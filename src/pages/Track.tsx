import { useState } from 'react';
import { Search, Package, MapPin, Clock, CheckCircle, Truck, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const mockTrackingData = {
  'SS001234567': {
    status: 'In Transit',
    currentLocation: 'Mumbai Distribution Center',
    estimatedDelivery: '2024-01-15',
    timeline: [
      { status: 'Order Placed', location: 'Prakash Nagar', date: '2024-01-12', time: '09:30 AM', completed: true },
      { status: 'Picked Up', location: 'Prakash Nagar', date: '2024-01-12', time: '02:15 PM', completed: true },
      { status: 'In Transit', location: 'Mumbai Distribution Center', date: '2024-01-13', time: '08:45 AM', completed: true },
      { status: 'Out for Delivery', location: 'Delhi Hub', date: '2024-01-15', time: '10:00 AM', completed: false },
      { status: 'Delivered', location: 'Destination', date: '2024-01-15', time: 'Expected', completed: false }
    ]
  },
  'SS001234568': {
    status: 'Delivered',
    currentLocation: 'Delivered to Customer',
    estimatedDelivery: '2024-01-10',
    timeline: [
      { status: 'Order Placed', location: 'Prakash Nagar', date: '2024-01-08', time: '11:20 AM', completed: true },
      { status: 'Picked Up', location: 'Prakash Nagar', date: '2024-01-08', time: '04:30 PM', completed: true },
      { status: 'In Transit', location: 'Chennai Hub', date: '2024-01-09', time: '07:15 AM', completed: true },
      { status: 'Out for Delivery', location: 'Bangalore Hub', date: '2024-01-10', time: '09:30 AM', completed: true },
      { status: 'Delivered', location: 'Customer Address', date: '2024-01-10', time: '02:45 PM', completed: true }
    ]
  }
};

export default function Track() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = () => {
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    setIsLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      const data = mockTrackingData[trackingNumber.trim()];
      if (data) {
        setTrackingData(data);
        setError('');
      } else {
        setTrackingData(null);
        setError('Tracking number not found. Please check and try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    if (!completed) return <Clock className="w-5 h-5 text-muted-foreground" />;
    
    switch (status) {
      case 'Delivered':
        return <CheckCircle className="w-5 h-5 text-success" />;
      case 'Out for Delivery':
        return <Truck className="w-5 h-5 text-accent" />;
      case 'In Transit':
        return <Package className="w-5 h-5 text-primary" />;
      default:
        return <CheckCircle className="w-5 h-5 text-success" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'text-success';
      case 'In Transit':
        return 'text-primary';
      case 'Out for Delivery':
        return 'text-accent';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">
            Track Your Shipment
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Enter your tracking number to get real-time updates on your package delivery status
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="tracking" className="text-sm font-medium text-foreground">
                    Tracking Number
                  </label>
                  <div className="flex space-x-3">
                    <Input
                      id="tracking"
                      placeholder="Enter your tracking number (e.g., SS001234567)"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleTrack} 
                      disabled={isLoading}
                      className="btn-accent min-w-[100px]"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Search className="w-4 h-4 mr-2" />
                          Track
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                
                {error && (
                  <div className="flex items-center space-x-2 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{error}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tracking Results */}
      {trackingData && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Status Overview */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Package className="w-6 h-6 text-primary" />
                  <span>Shipment Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Current Status</div>
                    <div className={`text-xl font-semibold ${getStatusColor(trackingData.status)}`}>
                      {trackingData.status}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Current Location</div>
                    <div className="text-lg font-medium text-foreground flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                      {trackingData.currentLocation}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {trackingData.status === 'Delivered' ? 'Delivered On' : 'Expected Delivery'}
                    </div>
                    <div className="text-lg font-medium text-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                      {trackingData.estimatedDelivery}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Delivery Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trackingData.timeline.map((event, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex flex-col items-center">
                        {getStatusIcon(event.status, event.completed)}
                        {index < trackingData.timeline.length - 1 && (
                          <div className={`w-px h-12 mt-2 ${event.completed ? 'bg-success' : 'bg-border'}`}></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`font-medium ${event.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {event.status}
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center space-x-4 mt-1">
                          <span className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {event.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {event.date} at {event.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Updates */}
            <Card className="shadow-card bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-lg">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Get Updates on WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">
                      Receive real-time delivery updates directly on your WhatsApp
                    </p>
                  </div>
                  <Button asChild className="btn-accent">
                    <a 
                      href={`https://wa.me/919876543210?text=Hi, I want to get updates for tracking number: ${trackingNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Updates
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Sample Tracking Numbers */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Don't have a tracking number handy?
          </h3>
          <p className="text-muted-foreground mb-6">
            Try these sample tracking numbers to see how our tracking system works:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="outline"
              onClick={() => setTrackingNumber('SS001234567')}
              className="font-mono"
            >
              SS001234567 (In Transit)
            </Button>
            <Button
              variant="outline"
              onClick={() => setTrackingNumber('SS001234568')}
              className="font-mono"
            >
              SS001234568 (Delivered)
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}