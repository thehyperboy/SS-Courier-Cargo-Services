import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, MapPin, Phone, Mail, Calculator } from 'lucide-react';

export default function BookNow() {
  const [serviceType, setServiceType] = useState('');
  const [weight, setWeight] = useState('');
  const [estimatedCost, setEstimatedCost] = useState(0);

  const calculateCost = () => {
    if (!weight || !serviceType) return;
    
    const weightNum = parseFloat(weight);
    let costPerKg = 0;
    
    switch (serviceType) {
      case 'domestic-express':
        costPerKg = 100; // ₹100 per kg
        break;
      case 'international':
        costPerKg = 1600; // ₹1600 per kg
        break;
      case 'cargo':
        costPerKg = 15; // ₹15 per kg
        break;
      default:
        costPerKg = 50;
    }
    
    setEstimatedCost(weightNum * costPerKg);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
            Book Your Shipment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quick and easy booking process. Get your items delivered safely and on time.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Package className="w-6 h-6 text-primary" />
                    Shipment Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="service-type">Service Type</Label>
                      <Select value={serviceType} onValueChange={setServiceType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="domestic-express">Domestic Express</SelectItem>
                          <SelectItem value="international">International</SelectItem>
                          <SelectItem value="cargo">Cargo Service</SelectItem>
                          <SelectItem value="pickup">Pickup & Door-to-Door</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <div className="relative">
                        <Input 
                          id="weight" 
                          type="number" 
                          placeholder="Enter weight"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                        <Button 
                          type="button" 
                          size="sm" 
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={calculateCost}
                        >
                          <Calculator className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Sender Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Sender Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sender-name">Full Name</Label>
                        <Input id="sender-name" placeholder="Enter full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sender-phone">Phone Number</Label>
                        <Input id="sender-phone" placeholder="Enter phone number" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sender-email">Email</Label>
                        <Input id="sender-email" type="email" placeholder="Enter email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sender-city">City</Label>
                        <Input id="sender-city" placeholder="Enter city" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sender-address">Complete Address</Label>
                      <Textarea id="sender-address" placeholder="Enter complete pickup address" />
                    </div>
                  </div>

                  {/* Receiver Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Receiver Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="receiver-name">Full Name</Label>
                        <Input id="receiver-name" placeholder="Enter full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="receiver-phone">Phone Number</Label>
                        <Input id="receiver-phone" placeholder="Enter phone number" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="receiver-city">City</Label>
                        <Input id="receiver-city" placeholder="Enter city" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="receiver-country">Country (for international)</Label>
                        <Input id="receiver-country" placeholder="Enter country" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="receiver-address">Complete Address</Label>
                      <Textarea id="receiver-address" placeholder="Enter complete delivery address" />
                    </div>
                  </div>

                  {/* Package Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Package Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dimensions">Dimensions (L×W×H cm)</Label>
                        <Input id="dimensions" placeholder="e.g., 30×20×15" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="value">Declared Value (₹)</Label>
                        <Input id="value" type="number" placeholder="Enter item value" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contents">Contents Description</Label>
                      <Textarea id="contents" placeholder="Describe package contents" />
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Additional Services</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="insurance" />
                        <Label htmlFor="insurance">Extra Insurance Coverage</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cod" />
                        <Label htmlFor="cod">Cash on Delivery (COD)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="priority" />
                        <Label htmlFor="priority">Priority Delivery</Label>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full btn-accent" size="lg">
                    Submit Booking Request
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Cost Estimator */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Cost Estimator</CardTitle>
                </CardHeader>
                <CardContent>
                  {estimatedCost > 0 && (
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm text-muted-foreground">Estimated Cost</p>
                      <p className="text-2xl font-bold text-primary">₹{estimatedCost}</p>
                      <p className="text-xs text-muted-foreground mt-1">*Excluding additional services</p>
                    </div>
                  )}
                  {!estimatedCost && (
                    <p className="text-muted-foreground text-center">
                      Select service type and enter weight to calculate estimated cost
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p className="text-sm text-muted-foreground">+91 9848231347</p>
                      <p className="text-sm text-muted-foreground">+91 9885561347</p>
                      <p className="text-sm text-muted-foreground">+91 040 48539215</p>
                      <p className="text-sm text-muted-foreground">+91 040 42101419</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <p className="text-sm text-muted-foreground">sscouriers347@yahoo.co.in</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full btn-secondary">
                    Chat Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}