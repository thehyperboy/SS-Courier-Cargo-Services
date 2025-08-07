import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string } >({});

  const validate = () => {
    const errs: { name?: string; phone?: string } = {};
    if (!form.name.trim()) errs.name = 'Full Name is required.';
    if (!form.phone.trim() || !/^\+?\d{10,}$/.test(form.phone)) errs.phone = 'Please enter a valid phone number.';
    return errs;
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2">
          <Phone className="w-8 h-8 text-primary" /> Get in Touch with SS Courier & Cargo Services
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Whether you need help with a shipment, want to book a pickup, or have any questions—we’re just a message away.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info Block */}
          <div>
            <Card className="shadow-xl border-border mb-6">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" /> Head Office
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>1-8-505/B/21, Prakash Nagar, Begumpet, Hyderabad, Telangana 500016</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+919848231347" className="text-primary underline">+91 9848231347</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:sscouriers347@yahoo.co.in" className="text-primary underline">sscouriers347@yahoo.co.in</a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Mon-Sat: 9:00 AM – 8:00 PM</span>
                  <span className="ml-2">Sunday: Closed</span>
                </div>
                <div className="mt-4">
                  <a href="https://wa.me/919848231347" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600">
                    Chat with Us on WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Google Map Embed */}
            <div className="rounded-lg overflow-hidden shadow mb-4">
              <iframe
                title="SS Courier & Cargo Services Location"
                src="https://www.google.com/maps?q=1-8-505/B/21,+Prakash+Nagar,+Begumpet,+Hyderabad,+Telangana+500016&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="text-center text-sm text-muted-foreground py-2">Visit us at our Hyderabad office</div>
            </div>
          </div>

          {/* Contact Form Block */}
          <div>
            <Card className="shadow-xl border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" /> Contact Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="p-4 text-center text-green-600 font-semibold">
                    Thanks! We’ll get back to you within 2 hours during business hours.
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" value={form.name} onChange={handleChange} required className={errors.name ? 'border-red-500' : ''} />
                      {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" value={form.phone} onChange={handleChange} required className={errors.phone ? 'border-red-500' : ''} />
                      {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" value={form.email} onChange={handleChange} type="email" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Select name="subject" value={form.subject} onValueChange={val => setForm({ ...form, subject: val })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Shipment Inquiry">Shipment Inquiry</SelectItem>
                          <SelectItem value="Pickup Request">Pickup Request</SelectItem>
                          <SelectItem value="Price Quote">Price Quote</SelectItem>
                          <SelectItem value="Feedback/Complaint">Feedback/Complaint</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} />
                    </div>
                    <Button type="submit" className="w-full btn-accent" size="lg">
                      <Send className="w-4 h-4 mr-2" /> Submit Request
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Help CTA Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-primary/10 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4 p-6 text-center md:text-left">
          <div className="text-lg font-semibold">Need urgent help or looking to schedule a pickup?</div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
            <a href="tel:+919848231347" className="px-4 py-2 bg-primary text-white rounded shadow hover:bg-primary/80">Call Now</a>
            <a href="https://wa.me/919848231347" target="_blank" rel="noopener" className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600">WhatsApp Us</a>
            <a href="/track" className="px-4 py-2 bg-secondary text-primary rounded shadow hover:bg-secondary/80">Track Shipment</a>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <footer className="bg-background border-t py-6 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <div className="flex gap-6 text-sm">
            <a href="/about" className="hover:underline">About</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
          </div>
          <div className="flex gap-4">
            {/* Social Media Icons (add if any) */}
          </div>
          <div className="text-xs text-muted-foreground">Powered by Your Developer/Team Name</div>
        </div>
      </footer>
    </div>
  );
}
