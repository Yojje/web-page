import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Users, Calendar, Star, Globe, BookOpen } from "lucide-react";

const Features = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Discover Yoje Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your gateway to a global yoga community. Connect with expert instructors,
            join engaging discussions, and transform your practice.
          </p>
        </div>

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
      </main>
    </div>
  );
};

export default Features;