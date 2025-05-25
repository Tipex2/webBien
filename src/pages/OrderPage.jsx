
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import SizeSelectionDialog from '@/components/SizeSelectionDialog.jsx';
import { BedDouble, Star, Zap } from 'lucide-react';

const mattressesData = [
  {
    id: 1,
    title: 'JustSleep',
    description: "Airmax and memory foam combined to provide the perfect night's sleep for the whole family. Softness and adaptability for maximum comfort. An Oxicell core guarantees the mattress's stability and durability. Improve your quality of sleep.",
    icon: <BedDouble className="w-10 h-10 text-primary" />,
    features: ['Sanitized treatment', 'Breathable Fabric', 'repels moisture'],
    imageUrl: 'https://mxc-prod-api-varnish.maxcolchon.com/cdn-cgi/image/format=auto,fit=scale-down,quality=80,width=1920/uploads/media/products/831/gallery/colchones-colchon-justsleep-one-04.jpg',
  },
  {
    id: 2,
    title: 'Chipre',
    description: "A quality mattress for your children's healthy growth. Cyprus is designed to adapt to each stage of their development. Perfect firmness for proper back alignment so they grow healthy and strong.",
    icon: <Star className="w-10 h-10 text-primary" />,
    features: ['Atermic treatment', 'Targeted Lumbar Support', 'Silent'],
    imageUrl: 'https://mxc-prod-api-varnish.maxcolchon.com/cdn-cgi/image/format=auto,fit=scale-down,quality=80,width=1920/uploads/media/products/154/gallery/colchones-colchon-Chipre-4.jpg',
  },
  {
    id: 3,
    title: 'Oximax',
    description: "The soft feel of the Oximax mattress, its spongy support and contours to your body. You'll feel like your body floats on its surface while you rest. Need anything else?",
    icon: <Zap className="w-10 h-10 text-primary" />, 
    features: ['Anti-mite treatment', 'Exclusive tissue', 'Anti-allergy treatment'],
    imageUrl: 'https://mxc-prod-api-varnish.maxcolchon.com/cdn-cgi/image/format=auto,fit=scale-down,quality=80,width=1920/uploads/media/products/36/gallery/сolchon-oximax-imagen-adicional-03.jpg',
  },
];

const MattressCard = ({ mattress, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="w-full"
    >
      <Card className="overflow-hidden bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative h-52 w-full">
          <img className="absolute inset-0 w-full h-full object-cover" alt={mattress.title} src={mattress.imageUrl} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
           <div className="absolute bottom-3 left-3 p-2 rounded-full bg-background/80 backdrop-blur-sm">
            {mattress.icon}
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">{mattress.title}</CardTitle>
          <CardDescription className="text-muted-foreground min-h-[40px]">{mattress.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-1.5">
            {mattress.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-foreground">
                <Star className="w-4 h-4 mr-2 text-yellow-500 fill-yellow-400" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={() => onSelect(mattress)} 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 px-5 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Choose This Mattress
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const OrderPage = () => {
  const [selectedMattress, setSelectedMattress] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSelectMattress = (mattress) => {
    setSelectedMattress(mattress);
    setIsDialogOpen(true);
  };

  return (
    <div className="py-10 bg-background text-foreground min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-primary">
          Find Your Perfect Sleep
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore our curated collection of premium mattresses, designed for ultimate comfort and support.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 px-4 md:px-6">
        {mattressesData.map((mattress, index) => (
          <motion.div
            key={mattress.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <MattressCard mattress={mattress} onSelect={handleSelectMattress} />
          </motion.div>
        ))}
      </div>
      {selectedMattress && (
        <SizeSelectionDialog
          mattress={selectedMattress}
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      )}
    </div>
  );
};

export default OrderPage;
