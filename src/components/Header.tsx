import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">Yoje</div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#classes" className="text-gray-600 hover:text-primary transition-colors">Classes</a>
          <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
          <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
        </nav>
        <Button className="bg-primary hover:bg-accent transition-colors">Get Started</Button>
      </div>
    </header>
  );
};