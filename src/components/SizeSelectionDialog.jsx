
import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.jsx';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.jsx';
import { Label } from '@/components/ui/label.jsx';
import { useToast } from '@/components/ui/use-toast.js';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { sendMqttMessage } from '@/lib/mqttService.js';

const mattressSizes = [
  { id: 'twin', label: '135x200', priceModifier: 1.0 },
  { id: 'full', label: '150x200', priceModifier: 1.2 },
  { id: 'queen', label: '180x200', priceModifier: 1.5 },
  { id: 'king', label: '200x200', priceModifier: 1.8 },
];

const generateUUIDv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const SizeSelectionDialog = ({ mattress, open, onOpenChange }) => {
  const [selectedSize, setSelectedSize] = useState(mattressSizes[0].id);
  const { toast } = useToast();
  const [isOrdering, setIsOrdering] = useState(false);

  if (!mattress) return null;

  const handleOrder = async () => {
    setIsOrdering(true);
    const sizeDetails = mattressSizes.find((s) => s.id === selectedSize);
    
    const orderId = generateUUIDv4();
    const mattressName = mattress.title;
    const sizeWidth = parseInt(sizeDetails.label.split('x')[0], 10);

    const mqttPayload = {
      _id: orderId,
      modelo: mattressName,
      tamanyo: sizeWidth,
    };
  
    localStorage.setItem(
      'lastOrder',
      JSON.stringify({
        mattress: mattress.title,
        size: sizeDetails.label,
        orderId: orderId, 
      })
    );

    try {
      await sendMqttMessage(mqttPayload); 
      toast({
        title: (
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            Order Placed & Notified!
          </div>
        ),
        description: `You've ordered a ${sizeDetails.label} ${mattress.title}. Notification sent. ID: ${orderId}`,
        variant: 'default',
        className: 'bg-green-100 border-green-500 text-green-700 shadow-lg',
      });
    } catch (error) {
      console.error('Failed to send MQTT message:', error);
      toast({
        title: (
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
            Order Placed (Notification Failed)
          </div>
        ),
        description: `Your order for ${sizeDetails.label} ${mattress.title} is placed (ID: ${orderId}), but notification failed. Error: ${error.message}`,
        variant: 'destructive',
        className: 'bg-yellow-100 border-yellow-500 text-yellow-700 shadow-lg',
      });
    } finally {
      setIsOrdering(false);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-background text-foreground border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Select Size for {mattress.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Choose your preferred size. Prices vary by selection.
          </DialogDescription>
        </DialogHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="py-4"
        >
          <RadioGroup
            defaultValue={selectedSize}
            onValueChange={setSelectedSize}
            className="space-y-3"
          >
            {mattressSizes.map((size) => (
              <motion.div
                key={size.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.3 + mattressSizes.indexOf(size) * 0.1,
                  duration: 0.4,
                }}
                className="flex items-center space-x-3 p-3 rounded-lg bg-secondary hover:bg-accent transition-colors duration-200"
              >
                <RadioGroupItem
                  value={size.id}
                  id={size.id}
                  className="border-primary text-primary focus:ring-ring"
                />
                <Label
                  htmlFor={size.id}
                  className="text-lg font-medium text-foreground cursor-pointer"
                >
                  {size.label}
                </Label>
              </motion.div>
            ))}
          </RadioGroup>
        </motion.div>
        <DialogFooter>
          <Button
            onClick={handleOrder}
            disabled={isOrdering}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
          >
            {isOrdering ? 'Processing...' : 'Order Now'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SizeSelectionDialog;
