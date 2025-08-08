import { Link } from 'react-router-dom';
import { ArrowRight, Package, Globe, Truck, Zap, MapPin, Clock, Users, Shield, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import heroImage from '@/assets/hero-courier.jpg';


const services = [
  {
    icon: Package,
    title: 'Domestic Courier Services',
    description: 'Shipping within India with reliable and affordable service.',
    link: '/services/domestic'
  },
  {
    icon: Globe,
    title: 'International Courier Services',
    description: 'Global shipping capabilities to over 25 countries.',
    link: '/services/international'
  },
  {
    icon: Truck,
    title: 'Cargo Services',
    description: 'Large shipments including furniture and vehicles.',
    link: '/services/cargo'
  },
  {
    icon: Zap,
    title: 'Express Delivery',
    description: 'Domestic & international destinations within 24-48 hours.',
    link: '/services/express'
  },
  {
    icon: MapPin,
    title: 'Pickup Services',
    description: 'Collection from customer locations for convenience.',
    link: '/services/pickup'
  }
];

const features = [
  {
    icon: Clock,
    title: '22+ Years Experience',
    description: 'Serving Hyderabad and beyond since 2001.'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Most deliveries completed within 24-48 hours.'
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Dedicated support and satisfaction guarantee.'
  },
  {
    icon: Shield,
    title: 'Secure & Safe',
    description: 'Fully insured packages, handled with care.'
  }
];

const steps = [
  {
    number: '01',
    title: 'Book a Pickup',
    description: 'Schedule your pickup online or call us to arrange collection.'
  },
  {
    number: '02',
    title: 'We Pick & Ship',
    description: 'Our team collects your package and ships it safely.'
  },
  {
    number: '03',
    title: 'Track & Deliver',
    description: 'Monitor your shipment and receive it at the destination.'
  }
];

const testimonials = [
  {
    name: 'Ravi Kumar',
    rating: 5,
    comment: 'SS Courier delivered my furniture safely and on time. Highly recommended!',
    business: 'Hyderabad Resident'
  },
  {
    name: 'Anjali Singh',
    rating: 5,
    comment: 'Fast international shipping and great customer support.',
    business: 'Small Business Owner'
  },
  {
    name: 'Suresh Reddy',
    rating: 5,
    comment: 'Affordable rates and reliable service for my business shipments.',
    business: 'Retailer'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <p className="text-sm text-muted-foreground mb-4">Hyderabad • Since 2001</p>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
              Fast, reliable logistics built around you
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Domestic and international courier & cargo. 24–48h express delivery, secure handling, and door‑to‑door pickup across India and abroad.
            </p>
            {/* Quick quote panel (inspired by reference) */}
            <form className="mt-8 rounded-2xl border border-border bg-card shadow-card p-2 md:p-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
                <Input placeholder="Pickup city or PIN" aria-label="Pickup" className="h-12" />
                <Input placeholder="Destination city or PIN" aria-label="Destination" className="h-12" />
                <Button type="submit" size="lg" className="h-12">Get quote</Button>
              </div>
            </form>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/book">Book now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/track">Track shipment</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div>24+ years experience</div>
              <div>95% on‑time delivery</div>
              <div>25+ countries served</div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-5">
            <div className="relative">
              <img
                src={heroImage}
                alt="Courier delivery in transit"
                className="w-full h-auto rounded-2xl border border-border object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full mb-6 text-sm font-medium">
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-poppins">
                We'll keep your items
                <br />
                <span className="text-accent">damage-free</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                SS Courier & Cargo Services ensures your shipments are delivered safely and securely, with careful handling and reliable service. We offer domestic and international courier, cargo, express delivery, package tracking, and pickup services for personal and business needs. Experience fast, affordable, and damage-free transport every time.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Domestic Courier Services</h4>
                    <p className="text-sm text-muted-foreground">Shipping within India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">International Courier Services</h4>
                    <p className="text-sm text-muted-foreground">Global shipping capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Cargo Services</h4>
                    <p className="text-sm text-muted-foreground">Large shipments, furniture, vehicles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Express Delivery</h4>
                    <p className="text-sm text-muted-foreground">24-48 hour delivery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Pickup Services</h4>
                    <p className="text-sm text-muted-foreground">Collection from customer locations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Package Tracking</h4>
                    <p className="text-sm text-muted-foreground">Online shipment monitoring</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary hover:bg-primary-glow text-white px-6 py-3 rounded-xl">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">Have Questions?</span>
                  </div>
                  <a href="tel:+919876543210" className="font-semibold text-foreground hover:text-primary">
                    Call: +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Experience Badge */}
            <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Logistics operations" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                {/* Experience Badge */}
                <div className="absolute -bottom-8 -left-8 bg-accent text-white p-8 rounded-2xl shadow-2xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">24+</div>
                    <div className="text-white/90 text-sm font-medium">Years of Experience</div>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-border/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Truck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">95%</div>
                      <div className="text-xs text-muted-foreground">On-time Delivery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4 font-poppins">Why Choose SS Courier?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner with proven expertise and reliable service
            </p>
          </div>
          
          {/* Stats Section */}
          <div className="bg-primary text-white py-16 -mx-4 sm:-mx-6 lg:-mx-8 mb-16 rounded-2xl">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="animate-slide-up">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">22+</div>
                  <div className="text-white/80">Years of Experience</div>
                </div>
                <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
                  <div className="text-white/80">Happy Clients</div>
                </div>
                <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-white/80">Customer Support</div>
                </div>
                <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">95%</div>
                  <div className="text-white/80">On-time Delivery Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center card-feature hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mx-auto mb-6 shadow-lg">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full mb-6 text-sm font-medium">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              SS Courier & Cargo Services offers domestic and international courier, cargo, express delivery, package tracking, and pickup services. Fast, secure, and affordable shipping for all your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Domestic Courier */}
            <div className="group relative animate-slide-up">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={heroImage} 
                  alt="Domestic Courier" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-blue-600">
                  DOMESTIC
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Domestic Courier Services</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Reliable shipping within India for documents, parcels, and packages. Fast, secure, and affordable delivery to all major cities and towns.
              </p>
              <Link to="/services/domestic" className="inline-flex items-center text-accent font-medium hover:text-accent-glow transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* International Courier */}
            <div className="group relative animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="aspect-video bg-gradient-to-br from-green-500 to-green-600 rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={heroImage} 
                  alt="International Courier" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-green-600">
                  INTERNATIONAL
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">International Courier Services</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Global shipping to over 25 countries. Safe and timely delivery of parcels, documents, and cargo worldwide with real-time tracking.
              </p>
              <Link to="/services/international" className="inline-flex items-center text-accent font-medium hover:text-accent-glow transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Cargo & Express Delivery */}
            <div className="group relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={heroImage} 
                  alt="Cargo & Express Delivery" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-orange-600">
                  CARGO & EXPRESS
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Cargo & Express Delivery</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Large shipments, furniture, vehicles, and urgent deliveries. 24-48 hour express service available for domestic and international destinations.
              </p>
              <Link to="/services/cargo" className="inline-flex items-center text-accent font-medium hover:text-accent-glow transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4 font-poppins">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands of satisfied customers across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="card-elegant p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{testimonial.comment}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Need to Ship Something Today?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get your packages delivered fast and secure with our professional courier services. 
            Book your pickup now and experience the SS Courier difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Link to="/book">
                Book Pickup Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white !text-white hover:!bg-white hover:!text-primary text-lg px-8 py-4 font-medium">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}