import { Link } from 'react-router-dom';
import { Package, Globe, Truck, Zap, MapPin, ArrowRight, CheckCircle, Clock, Shield, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Package,
    title: 'Domestic Courier',
    description: 'Fast and reliable delivery across India with real-time tracking and secure handling.',
    features: ['Pan-India Coverage', 'Real-time Tracking', 'COD Available', 'Insurance Protected'],
    deliveryTime: '1-3 Business Days',
    link: '/services/domestic'
  },
  {
    icon: Globe,
    title: 'International Courier',
    description: 'Global shipping solutions with customs clearance support and worldwide delivery.',
    features: ['220+ Countries', 'Customs Clearance', 'Door-to-Door', 'Documentation Support'],
    deliveryTime: '3-7 Business Days',
    link: '/services/international'
  },
  {
    icon: Truck,
    title: 'Cargo Services',
    description: 'Heavy shipments and bulk cargo transportation with specialized handling.',
    features: ['Heavy Cargo', 'Bulk Shipments', 'Special Handling', 'Competitive Rates'],
    deliveryTime: '2-5 Business Days',
    link: '/services/cargo'
  },
  {
    icon: Zap,
    title: 'Express Delivery',
    description: '24-48 hours express delivery for urgent shipments with priority handling.',
    features: ['Same Day Delivery', 'Priority Handling', 'Emergency Service', 'Time Guarantee'],
    deliveryTime: '24-48 Hours',
    link: '/services/express'
  },
  {
    icon: MapPin,
    title: 'Door-to-Door Pickup',
    description: 'Convenient pickup and delivery service right at your doorstep.',
    features: ['Free Pickup', 'Doorstep Service', 'Flexible Timing', 'SMS Updates'],
    deliveryTime: 'As per Service',
    link: '/services/pickup'
  }
];

const benefits = [
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: '99% on-time delivery rate with real-time tracking and updates.'
  },
  {
    icon: Shield,
    title: 'Secure Handling',
    description: 'Your packages are fully insured and handled with utmost care.'
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Best rates in the market with transparent pricing and no hidden costs.'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Comprehensive courier and cargo solutions tailored to meet all your shipping needs 
            with professional service and competitive pricing.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="card-elegant p-8 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">Delivery Time</div>
                        <div className="font-semibold text-primary">{service.deliveryTime}</div>
                      </div>
                      
                      <Button asChild className="btn-accent">
                        <Link to={service.link}>
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4 font-poppins">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our professional approach and customer-focused solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="text-center card-elegant p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Ready to Ship with SS Courier?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get started with our professional courier services today. 
            Fast, reliable, and secure delivery solutions for all your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Link to="/book">
                Book Pickup Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
              <Link to="/pricing">Get Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}