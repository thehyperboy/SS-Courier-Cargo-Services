import { Link } from 'react-router-dom';
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-bold text-lg">SS Courier</span>
                <span className="text-sm text-primary-foreground/80">& Cargo Services</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-3">
              Delivering excellence with 24+ years of experience in domestic and international courier services. 
              Your trusted partner for fast, reliable shipping solutions.
            </p>
            <div className="text-primary-foreground/60 text-xs">
              <p className="mb-1">🌐 Website: www.sscourier.com</p>
              <p>📧 Email: info@sscourier.com</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">
                Services
              </Link>
              <Link to="/track" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">
                Track Shipment
              </Link>
              <Link to="/book" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">
                Book Pickup
              </Link>
              <Link to="/pricing" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">
                Pricing
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <div className="space-y-2">
              <Link to="/services/domestic" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">
                Domestic Courier
              </Link>
              <Link to="/services/international" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">
                International Courier
              </Link>
              <Link to="/services/cargo" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">
                Cargo Services
              </Link>
              <Link to="/services/express" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">
                Express Delivery
              </Link>
              <Link to="/services/pickup" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">
                Pickup & Door-to-Door
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/80">Prakash Nagar</p>
                  <p className="text-primary-foreground/60">Your City, Your State</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/60" />
                <a 
                  href="tel:+919876543210" 
                  className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/60" />
                <a 
                  href="mailto:info@sscourier.com" 
                  className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
                >
                  info@sscourier.com
                </a>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex space-x-2 pt-2">
              <a 
                href="tel:+919876543210" 
                className="flex-1 bg-white/10 hover:bg-white/20 text-center py-2 px-3 rounded-lg text-sm font-medium transition-colors"
              >
                Call
              </a>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-accent hover:bg-accent-glow text-center py-2 px-3 rounded-lg text-sm font-medium transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/60 text-sm">
            <p>© 2024 SS Courier & Cargo Services. All rights reserved.</p>
            <p className="text-xs mt-1">🌐 Visit us at: www.sscourier.com | 📱 Mobile App Available</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}