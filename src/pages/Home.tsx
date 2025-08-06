import { Link } from 'react-router-dom';
import { ArrowRight, Package, Globe, Truck, Zap, MapPin, Clock, Users, Shield, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-courier.jpg';

const services = [
  {
    icon: Package,
    title: 'Domestic Courier',
    description: 'Fast and reliable delivery across the country with real-time tracking.',
    link: '/services/domestic'
  },
  {
    icon: Globe,
    title: 'International Courier',
    description: 'Global shipping solutions with customs clearance support.',
    link: '/services/international'
  },
  {
    icon: Truck,
    title: 'Cargo Services',
    description: 'Heavy shipments and bulk cargo transportation.',
    link: '/services/cargo'
  },
  {
    icon: Zap,
    title: 'Express Delivery',
    description: '24-48 hours express delivery for urgent shipments.',
    link: '/services/express'
  },
  {
    icon: MapPin,
    title: 'Door-to-Door Pickup',
    description: 'Convenient pickup and delivery right at your doorstep.',
    link: '/services/pickup'
  }
];

const features = [
  {
    icon: Clock,
    title: '24+ Years Experience',
    description: 'Trusted expertise in courier and cargo services since 1996.'
  },
  {
    icon: Zap,
    title: '24-48 Hrs Express',
    description: 'Lightning-fast delivery for your urgent shipments.'
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Dedicated customer support and satisfaction guarantee.'
  },
  {
    icon: Shield,
    title: 'Secure & Safe',
    description: 'Your packages are fully insured and handled with care.'
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
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'Excellent service! My international shipment reached on time without any issues.',
    business: 'Import/Export Business'
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Very reliable for domestic courier. Great customer support and tracking system.',
    business: 'Online Retailer'
  },
  {
    name: 'Amit Patel',
    rating: 5,
    comment: 'Best rates for heavy cargo shipments. Professional handling and timely delivery.',
    business: 'Manufacturing Company'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary-glow to-primary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 text-white/90 text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                SS Courier & Cargo Services
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-poppins leading-tight">
                Welcome To
                <br />
                <span className="text-accent">SS Courier</span>
                <br />
                <span className="text-3xl md:text-4xl font-normal text-white/90">Transport Services</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
                Take your business to the next level with SS Courier's new business management tools. 
                Logica will open a new horizon for us.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button asChild size="lg" className="bg-accent hover:bg-accent-glow text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/contact">
                    Contact Logistics <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/70 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                  <Link to="/track">Track Package</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">24+</div>
                  <div className="text-white/70 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-white/70 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-white/70 text-sm">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Truck Image */}
            <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Courier truck" 
                  className="w-full h-auto object-contain"
                />
                {/* Floating boxes effect */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-lg animate-float" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-1/4 -left-6 w-12 h-12 bg-white/10 rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-accent/30 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
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
                Logisca AI freight service deliver the knowledge & opportunity to optimize every mile on every lane. 
                Get full-service Truckload services provide the options you need to manage costs by combining our technology intelligence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">International Shipping</h4>
                    <p className="text-sm text-muted-foreground">Global delivery solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Container Freight</h4>
                    <p className="text-sm text-muted-foreground">Secure container transport</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Express Product Shipping</h4>
                    <p className="text-sm text-muted-foreground">Fast delivery service</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Intermodal Shipping</h4>
                    <p className="text-sm text-muted-foreground">Multi-mode transport</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Hot Shot Trucking</h4>
                    <p className="text-sm text-muted-foreground">Expedited trucking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Flatbed Shipping</h4>
                    <p className="text-sm text-muted-foreground">Specialized freight</p>
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
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50k</div>
                  <div className="text-white/80">Successful Transportations</div>
                </div>
                <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">256</div>
                  <div className="text-white/80">Land Freight Transportation</div>
                </div>
                <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">25+</div>
                  <div className="text-white/80">Countries of Operation</div>
                </div>
                <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">125</div>
                  <div className="text-white/80">Train Freight Transportation</div>
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
              Wide Variety of Logistics Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Logisca AI freight service deliver the knowledge & opportunity to optimize every mile on every lane. Get full-service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative animate-slide-up">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={heroImage} 
                  alt="Maritime Freight" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-blue-600">
                  SERVICE ONE
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Maritime Freight Transportation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Logisca air freight service deliver the knowledge opportunity optimize every mile on every lane. Get full-service opportunity optimize.
              </p>
              <Link to="/services/maritime" className="inline-flex items-center text-accent font-medium hover:text-accent-glow transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="group relative animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="aspect-video bg-gradient-to-br from-red-500 to-red-600 rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={heroImage} 
                  alt="Land Freight" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-red-600">
                  SERVICE TWO
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Land Freight Transportation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Logisca air freight service deliver the knowledge opportunity optimize every mile on every lane. Get full-service opportunity optimize.
              </p>
              <Link to="/services/land" className="inline-flex items-center text-accent font-medium hover:text-accent-glow transition-colors">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="group relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={heroImage} 
                  alt="Train Freight" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-orange-600">
                  SERVICE THREE
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Train Freight Transportation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Logisca air freight service deliver the knowledge opportunity optimize every mile on every lane. Get full-service opportunity optimize.
              </p>
              <Link to="/services/train" className="inline-flex items-center text-accent font-medium hover:text-accent-glow transition-colors">
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
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}