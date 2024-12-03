import { Header } from "@/components/Header";
import { YogaCard } from "@/components/YogaCard";
import { InstructorCard } from "@/components/InstructorCard";

const Index = () => {
  const instructors = [
    {
      name: "Sarah Johnson",
      specialties: ["Hatha Yoga", "Meditation", "Breathing Techniques"],
      experience: "8 years",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      price: "$45/hour"
    },
    {
      name: "David Chen",
      specialties: ["Vinyasa Flow", "Power Yoga", "Flexibility"],
      experience: "12 years",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      price: "$50/hour"
    },
    {
      name: "Maya Patel",
      specialties: ["Ashtanga", "Prenatal Yoga", "Mindfulness"],
      experience: "10 years",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      price: "$48/hour"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Find Your Perfect Yoga Instructor
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with expert yoga instructors worldwide and transform your practice with personalized guidance.
          </p>
        </div>
      </section>

      {/* Featured Instructors */}
      <section className="py-12 px-4" id="instructors">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructors.map((instructor, index) => (
              <InstructorCard key={index} {...instructor} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-gray-50" id="features">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Yoje</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
              <p className="text-gray-600">Learn from certified yoga teachers with years of experience.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Flexible Scheduling</h3>
              <p className="text-gray-600">Book classes that fit your schedule and timezone.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Personalized Practice</h3>
              <p className="text-gray-600">Get individual attention and customize your yoga journey.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;