
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, ShoppingCart, Bed } from 'lucide-react';
import OrderPage from '@/pages/OrderPage.jsx';
import InfoPage from '@/pages/InfoPage.jsx';
import { Toaster } from '@/components/ui/toaster.jsx';
import { Button } from '@/components/ui/button.jsx';

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { path: '/info', label: 'Info', icon: <Info className="w-5 h-5" /> },
    { path: '/order', label: 'Order', icon: <ShoppingCart className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/info" className="flex items-center text-primary-foreground text-2xl font-bold">
          <Bed className="w-8 h-8 mr-2" />
          Automatress
        </Link>
        <div className="flex space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.path}
              asChild
              variant={location.pathname === item.path ? 'secondary' : 'ghost'}
              className={`
                ${location.pathname === item.path 
                  ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' 
                  : 'text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground'}
              `}
            >
              <Link to={item.path} className="flex items-center space-x-2 px-4 py-2 rounded-md">
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const PageLayout = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="pt-24 container mx-auto px-4 min-h-screen bg-background"
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Navigate to="/info" replace />} />
          <Route path="/info" element={<PageLayout><InfoPage /></PageLayout>} />
          <Route path="/order" element={<PageLayout><OrderPage /></PageLayout>} />
        </Routes>
      </AnimatePresence>
      <Toaster />
    </Router>
  );
}

export default App;
