import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Send, CheckCircle } from 'lucide-react';

const services = [
  'Internet Connectivity',
  'Computer Networking',
  'CCTV & Security',
  'Systems Integration',
  'Web Development',
  'Web Hosting',
  'Other',
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-tech-gray rounded-xl p-8 border border-orange text-center"
      >
        <CheckCircle className="w-16 h-16 text-orange mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-2">Thank You!</h3>
        <p className="text-tech-text">
          We have received your message and will get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Name <span className="text-orange">*</span>
          </label>
          <Input
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Your name"
            className="bg-tech-medium border-tech-border text-white placeholder:text-tech-text focus:border-orange focus:ring-orange"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Phone <span className="text-orange">*</span>
          </label>
          <Input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="Your phone number"
            className="bg-tech-medium border-tech-border text-white placeholder:text-tech-text focus:border-orange focus:ring-orange"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Email <span className="text-orange">*</span>
        </label>
        <Input
          type="email"
          required
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="your@email.com"
          className="bg-tech-medium border-tech-border text-white placeholder:text-tech-text focus:border-orange focus:ring-orange"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Service Required
        </label>
        <Select
          value={formData.service}
          onValueChange={(value) => handleChange('service', value)}
        >
          <SelectTrigger className="bg-tech-medium border-tech-border text-white focus:ring-orange">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-tech-gray border-tech-border">
            {services.map((service) => (
              <SelectItem
                key={service}
                value={service}
                className="text-white hover:bg-tech-medium focus:bg-tech-medium focus:text-orange"
              >
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Message
        </label>
        <Textarea
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Tell us about your project..."
          rows={4}
          className="bg-tech-medium border-tech-border text-white placeholder:text-tech-text focus:border-orange focus:ring-orange resize-none"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-orange hover:bg-orange-dark text-black font-semibold py-6 transition-all duration-300 hover:shadow-glow"
      >
        <Send className="w-5 h-5 mr-2" />
        Request a Consultation
      </Button>
    </form>
  );
}
