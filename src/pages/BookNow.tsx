import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, MapPin, Phone, Mail, Calculator } from 'lucide-react';
import heroCourier from "@/assets/hero-courier.png";

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
      case 'international-express':
        costPerKg = 1600; // ₹1600 per kg
        break;
      default:
        costPerKg = 0;
    }
    setEstimatedCost(weightNum * costPerKg);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 sm:px-8 lg:px-0 border-b border-gray-100 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl w-full mx-auto text-center py-24">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight" style={{letterSpacing: '-0.03em'}}>
            Book Your Shipment
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 font-light mb-8 max-w-xl mx-auto" style={{letterSpacing: '-0.01em'}}>
            <span className="text-black font-semibold">Fast. Reliable. Effortless.</span><br />
            <span className="block mt-2 text-gray-700 text-lg font-normal">Experience courier booking as simple as Apple.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="px-8 py-4 rounded-full text-lg font-semibold bg-black text-white shadow hover:bg-gray-900 transition">
              Book Now
            </Button>
            <Button variant="outline" className="px-8 py-4 rounded-full text-lg font-semibold border-gray-700 text-black hover:bg-gray-200 transition">
              Track Shipment
            </Button>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none select-none">
          <img src={heroCourier} alt="Courier Hero" className="w-full max-w-2xl rounded-3xl shadow-xl opacity-90" style={{objectFit: 'cover', height: '320px'}} />
        </div>
      </section>
      <section className="py-20 px-4 sm:px-8 lg:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Shipment Details Card */}
            <Card className="bg-white shadow-sm rounded-3xl border border-gray-100">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-3xl font-semibold text-gray-900">
                  <Package className="w-7 h-7 text-gray-400" /> Shipment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Add shipment details here if needed */}
              </CardContent>
            </Card>
            {/* Booking Form Card */}
            <Card className="bg-white shadow-sm rounded-3xl border border-gray-100 col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-gray-400" /> Cost Estimator
                </CardTitle>
              </CardHeader>
              <CardContent>
                {estimatedCost > 0 ? (
                  <div className="text-center p-8 bg-gray-50 rounded-2xl">
                    <p className="text-sm text-gray-500 mb-2">Estimated Cost</p>
                    <p className="text-4xl font-bold text-gray-900 mb-1">₹{estimatedCost}</p>
                    <p className="text-xs text-gray-400">*Excluding additional services</p>
                  </div>
                ) : (
                  <p className="text-gray-400 text-center py-8">
                    Select service type and enter weight to calculate estimated cost
                  </p>
                )}
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  <div className="space-y-2">
                    <Label htmlFor="service-type">Service Type</Label>
                    <Select value={serviceType} onValueChange={setServiceType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="domestic-express">Domestic Express</SelectItem>
                        <SelectItem value="international-express">International Express</SelectItem>
                        <SelectItem value="pickup">Pickup & Door-to-Door</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      value={weight}
                      onChange={e => setWeight(e.target.value)}
                      placeholder="Enter weight in kg"
                      min={0}
                      step={0.1}
                      onBlur={calculateCost}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Main Booking Form */}
          <div className="max-w-6xl mx-auto mt-16">
            <Card className="bg-white shadow-sm rounded-3xl border border-gray-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  Booking Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Sender Details */}
                <div className="space-y-12">
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
                  {/* Receiver Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" /> Receiver Details
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
                  <Button className="w-full py-4 rounded-2xl bg-gray-900 text-white text-lg font-semibold shadow hover:bg-gray-800 transition" size="lg">
                    Submit Booking Request
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Contact Info Card */}
          <div className="max-w-6xl mx-auto mt-16">
            <Card className="shadow-xl border border-primary/20 rounded-2xl bg-white/80 backdrop-blur">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-primary flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <a href="tel:+919848231347" className="text-sm text-primary font-semibold hover:underline">+91 9848231347</a><br />
                      <a href="tel:+919885561347" className="text-sm text-primary font-semibold hover:underline">+91 9885561347</a><br />
                      <a href="tel:+9104042101419" className="text-sm text-primary font-semibold hover:underline">+91 040 42101419</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <a href="mailto:sscouriers347@yahoo.co.in" className="text-sm text-primary font-semibold hover:underline">sscouriers347@yahoo.co.in</a>
                    </div>
                  </div>
                </div>
                <Button className="w-full py-3 rounded-xl text-base font-semibold shadow hover:bg-primary/90 transition">
                  💬 Chat Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}