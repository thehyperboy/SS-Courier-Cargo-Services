import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Truck, ChevronDown, Package, Globe, Zap, MapPin } from 'lucide-react';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';

const services = [
  { name: 'Domestic Courier', icon: Package, href: '/services/domestic' },
  { name: 'International Courier', icon: Globe, href: '/services/international' },
  { name: 'Cargo Services', icon: Truck, href: '/services/cargo' },
  { name: 'Express Delivery', icon: Zap, href: '/services/express' },
  { name: 'Pickup & Door-to-Door', icon: MapPin, href: '/services/pickup' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-lg text-gradient-primary">SS Courier</span>
              <span className="text-xs text-muted-foreground -mt-1">& Cargo Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-2">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link 
                      to={service.href} 
                      className="flex items-center space-x-3 p-3 hover:bg-secondary transition-colors"
                    >
                      <service.icon className="w-4 h-4 text-primary" />
                      <span>{service.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/pricing" className="text-foreground hover:text-primary transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild className="btn-secondary">
              <Link to="/track">Track Shipment</Link>
            </Button>
            <Button asChild className="btn-accent">
              <Link to="/book">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-up">
            <Link 
              to="/" 
              className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            
            {/* Mobile Services */}
            <div className="px-3 py-2">
              <span className="font-medium text-foreground">Services</span>
              <div className="ml-4 mt-2 space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="flex items-center space-x-2 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/pricing" 
              className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            {/* Mobile CTA Buttons */}
            <div className="px-3 pt-4 space-y-2">
              <Button variant="outline" asChild className="w-full btn-secondary">
                <Link to="/track" onClick={() => setIsOpen(false)}>Track Shipment</Link>
              </Button>
              <Button asChild className="w-full btn-accent">
                <Link to="/book" onClick={() => setIsOpen(false)}>Book Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}