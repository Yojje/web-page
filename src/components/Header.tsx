import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">Yoje</Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/community" className="text-gray-600 hover:text-primary transition-colors">Community</Link>
          <a href="#instructors" className="text-gray-600 hover:text-primary transition-colors">Instructors</a>
        </nav>
        <Button className="bg-primary hover:bg-primary/90 transition-colors">Get Started</Button>
      </div>
    </header>
  );
};