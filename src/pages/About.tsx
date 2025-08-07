import { CheckCircle, Award, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function About() {
  const achievements = [
    { icon: Award, title: "22+ Years Experience", desc: "Serving since March 2001" },
    { icon: Users, title: "Customer Satisfaction", desc: "Core criteria of our service" },
    { icon: Globe, title: "Nationwide Network", desc: "Covering major cities across India" },
    { icon: CheckCircle, title: "Trusted Service", desc: "Reliable and professional delivery" }
  ];

  const values = [
    "Customer-oriented service tailored to requirements",
    "Professional and reliable delivery solutions",
    "Competitive pricing for all service categories", 
    "Modern technology for tracking and management",
    "24/7 customer support and assistance",
    "Secure handling of all shipments"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
              About SS Courier
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Modern And Trusted Logistics Company
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Journey</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  SS Couriers & Cargo Services was launched about twenty-two (22) years back in March 2001 (SS Enterprises) to serve the clients of a city that is emerging as a major city in terms of rapid industrialization, IT growth, international outlook, and culture.
                </p>
                <p>
                  In this growing world of business, effective communication has become a vital role, for which every company is trying to get an edge over the other. This mass mailing has been a very effective mode of expressing the companies' activities.
                </p>
                <p>
                  Since there are not many professionalized companies that are in a position to give such customer-oriented service, we offer tailor-made services according to the requirements of our esteemed customers. SS Couriers & Cargo Services was born with the core criteria of offering "Customer Satisfaction."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <achievement.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values & Commitment</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are committed to providing exceptional service that exceeds our customers' expectations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-3 bg-card border border-border rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Experience Our Service?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join thousands of satisfied customers who trust us with their shipping needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-accent">
              <Link to="/book">Book Your Shipment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}