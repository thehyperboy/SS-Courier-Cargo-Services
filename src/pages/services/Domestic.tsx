import { Clock, Shield, MapPin, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Domestic() {
  const features = [
    {
      icon: Zap,
      title: "Express Delivery",
      description: "Next day delivery to major cities across India"
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Your packages are handled with utmost care and security"
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Track your shipment status in real-time with SMS updates"
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "Delivery to over 25,000+ pin codes across India"
    }
  ];

  const serviceTypes = [
    {
      name: "Same Day Delivery",
      time: "Within 12 hours",
      price: "₹150/kg",
      coverage: "Within city limits"
    },
    {
      name: "Next Day Express",
      time: "Next business day",
      price: "₹100/kg",
      coverage: "Major cities"
    },
    {
      name: "Standard Delivery",
      time: "2-3 business days",
      price: "₹75/kg",
      coverage: "All India"
    },
    {
      name: "Economy Service",
      time: "3-5 business days",
      price: "₹50/kg",
      coverage: "All India"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
            Domestic Courier Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fast, reliable, and secure courier services across India with real-time tracking and competitive pricing.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Service Options</h2>
            <p className="text-muted-foreground">Choose the delivery speed that best fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceTypes.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Delivery:</span> {service.time}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Price:</span> <span className="text-primary font-semibold">{service.price}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Coverage:</span> {service.coverage}
                  </p>
                </div>
                <Button asChild variant="outline" className="w-full btn-secondary">
                  <Link to="/book">Select This Option</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pan-India Coverage</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our extensive network covers every corner of India, ensuring your packages reach their destination safely and on time.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">28 States & 8 Union Territories</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">25,000+ Pin codes covered</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">500+ Distribution centers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Rural & Remote area delivery</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Major Cities Coverage</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad',
                  'Chennai', 'Kolkata', 'Pune', 'Ahmedabad',
                  'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur',
                  'Indore', 'Thane', 'Bhopal', 'Visakhapatnam'
                ].map((city, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-foreground">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Ship Domestically?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Get your packages delivered across India with our reliable domestic courier service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-accent">
              <Link to="/book">Book Domestic Shipment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary">
              <Link to="/track">Track Your Package</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}