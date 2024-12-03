import { Header } from "@/components/Header";
import { YogaCard } from "@/components/YogaCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Your Journey to Inner Peace
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your practice with personalized yoga sessions designed for every level
          </p>
          <Button className="bg-primary hover:bg-accent text-lg px-8 py-6 h-auto">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Featured Classes */}
      <section id="classes" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <YogaCard
              title="Morning Flow"
              duration="30 mins"
              level="Beginner"
              image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            />
            <YogaCard
              title="Power Vinyasa"
              duration="45 mins"
              level="Intermediate"
              image="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
            />
            <YogaCard
              title="Gentle Restore"
              duration="60 mins"
              level="All Levels"
              image="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Yoje</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-primary text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Personalized Practice</h3>
              <p className="text-gray-600">Customized sessions that adapt to your level and goals</p>
            </div>
            <div className="p-6">
              <div className="text-primary text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from certified yoga teachers with years of experience</p>
            </div>
            <div className="p-6">
              <div className="text-primary text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Practice anytime, anywhere with our on-demand classes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;