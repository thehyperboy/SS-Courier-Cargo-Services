import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Domestic Express",
      price: "₹50",
      unit: "per 500g",
      description: "Fast delivery within India",
      features: [
        "Next day delivery in major cities",
        "Real-time tracking",
        "Insurance up to ₹5,000",
        "Free pickup from location",
        "SMS & email notifications"
      ],
      popular: false
    },
    {
      name: "International Standard",
      price: "₹800",
      unit: "per 500g",
      description: "Reliable worldwide shipping",
      features: [
        "7-10 days delivery worldwide",
        "Real-time tracking",
        "Insurance up to ₹25,000",
        "Customs clearance support",
        "Door-to-door delivery",
        "Free packaging materials"
      ],
      popular: true
    },
    {
      name: "Cargo Services",
      price: "₹15",
      unit: "per kg",
      description: "Bulk shipment solutions",
      features: [
        "Surface & air cargo options",
        "No weight limit",
        "Furniture & vehicle shipping",
        "Dedicated customer support",
        "Flexible delivery options",
        "Volume discounts available"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    { service: "COD (Cash on Delivery)", price: "₹50 + 2% of amount" },
    { service: "Additional Insurance", price: "0.5% of declared value" },
    { service: "Packing Materials", price: "₹25 - ₹150" },
    { service: "Express Pickup", price: "₹100" },
    { service: "Saturday Delivery", price: "₹75 extra" },
    { service: "Proof of Delivery", price: "₹25" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No hidden fees. Competitive rates for all your shipping needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-card border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'border-primary ring-2 ring-primary/20 scale-105' : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.unit}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  className={`w-full ${plan.popular ? 'btn-accent' : 'btn-secondary'}`}
                >
                  <Link to="/book">Book Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Additional Services</h2>
            <p className="text-muted-foreground">
              Optional services to enhance your shipping experience
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
            {additionalServices.map((item, index) => (
              <div 
                key={index} 
                className={`flex justify-between items-center p-4 ${
                  index !== additionalServices.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <span className="text-foreground font-medium">{item.service}</span>
                <span className="text-primary font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Need a Custom Quote?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Contact us for bulk shipping, regular business shipping, or special requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-accent">
              <Link to="/contact">Get Custom Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary">
              <Link to="/book">Calculate Shipping</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}