import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cpu, Zap, Timer } from "lucide-react";

const AiTechnology = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-up">
            Cutting-Edge AI Technology
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-up">
            Experience real-time pose detection and instant feedback powered by our advanced machine learning models
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
                alt="Yoga Pose Detection"
                className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white text-lg font-semibold">Real-time Pose Detection</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1545389336-cf090694435e"
                alt="ML Analysis"
                className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white text-lg font-semibold">Instant ML Analysis</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Advanced ML Models</h3>
                <p className="text-gray-600">Custom-built models for accurate pose analysis</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Cpu className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real-time Processing</h3>
                <p className="text-gray-600">Instant feedback on your yoga poses</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Results in milliseconds</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Timer className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                <p className="text-gray-600">Models that improve over time</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto bg-secondary/30 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                Our advanced AI system uses real-time pose detection to analyze your yoga positions as you practice. 
                The machine learning models, developed in-house, instantly process this data to provide immediate feedback 
                on your form and technique.
              </p>
              <p className="text-lg text-gray-600">
                All processing happens in real-time, taking just milliseconds to analyze and provide feedback, 
                ensuring you get the guidance you need exactly when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiTechnology;