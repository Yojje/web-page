import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Users, Calendar, Star, Globe, BookOpen, Mail, Phone, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Yoje
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            A better you
          </p>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with expert yoga instructors worldwide and transform your practice with personalized guidance.
          </p>
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
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="name" className="pl-10" placeholder="Your name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="email" type="email" className="pl-10" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="phone" type="tel" className="pl-10" placeholder="Your phone number" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;