import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Users, Calendar, Star, Globe, BookOpen, Mail, Phone, User, Brain, Cpu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const features = [
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Expert Instructors Marketplace",
      description: "Connect with certified yoga instructors worldwide. Browse through detailed profiles, read reviews, and find the perfect teacher for your practice style."
    },
    {
      icon: <Calendar className="w-12 h-12 text-primary" />,
      title: "Flexible Class Scheduling",
      description: "Book private or group sessions that fit your schedule. Choose from various time slots and customize your learning journey."
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-primary" />,
      title: "Vibrant Community",
      description: "Join our growing community of yoga enthusiasts. Create or join topic-specific servers, share experiences, and connect with like-minded practitioners."
    },
    {
      icon: <Star className="w-12 h-12 text-primary" />,
      title: "Personalized Experience",
      description: "Get individual attention from instructors who understand your goals. Whether you're a beginner or advanced practitioner, find classes that match your level."
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Global Reach",
      description: "Access yoga instruction from different cultures and traditions. Learn various styles and approaches from teachers around the world."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "Knowledge Sharing",
      description: "Participate in discussions, share insights, and learn from the community. Access resources and tips from experienced practitioners."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Yoga Enthusiast",
      quote: "Yoje has transformed my yoga practice. The instructors are amazing!",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Student",
      quote: "The personalized attention from instructors has helped me grow tremendously.",
      avatar: "MC"
    },
    {
      name: "Emma Davis",
      role: "Professional",
      quote: "Flexible scheduling makes it easy to maintain my practice despite a busy schedule.",
      avatar: "ED"
    }
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let valid = true;
    let newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user starts typing
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [id]: ""
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
  
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xrbgjrbw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
        alert('Message sent successfully!');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };  

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 animate-fade-up">
            Yoje
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-up">
            A better you
          </p>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up">
            Connect with expert yoga instructors worldwide and transform your practice with personalized guidance.
          </p>
        </div>
      </section>

      {/* AI Technology Highlight Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Powered by Advanced AI Technology
              </h2>
              <p className="text-lg text-gray-600">
                Experience yoga like never before with our cutting-edge machine learning and pose detection technology. 
                Get real-time feedback on your poses and personalized guidance for improvement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Brain className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Real-time Pose Detection</h3>
                    <p className="text-gray-600">Instant analysis of your yoga poses with millisecond precision</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Cpu className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Custom ML Models</h3>
                    <p className="text-gray-600">Developed in-house for accurate and instant feedback</p>
                  </div>
                </div>
              </div>
              <Link to="/ai-technology">
                <Button size="lg" className="mt-4">
                  Learn More About Our Technology
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
                alt="AI Yoga Analysis"
                className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg">
                Real-time Analysis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-gray-600">Certified Instructors</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-primary mb-2">10,000+</h3>
              <p className="text-gray-600">Active Students</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
              <p className="text-gray-600">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Yoje</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-6 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      id="name" 
                      className="pl-10" 
                      placeholder="Your name" 
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      id="email" 
                      type="email" 
                      className="pl-10" 
                      placeholder="Your email" 
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      id="phone" 
                      type="tel" 
                      className="pl-10" 
                      placeholder="Your phone number" 
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    className="min-h-[120px]" 
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <Button className="w-full" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
