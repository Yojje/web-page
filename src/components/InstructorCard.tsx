import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface InstructorCardProps {
  name: string;
  specialties: string[];
  experience: string;
  rating: number;
  image: string;
  price: string;
}

export const InstructorCard = ({ name, specialties, experience, rating, image, price }: InstructorCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">{name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <span>⭐ {rating}</span>
              <span>•</span>
              <span>{experience} experience</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-semibold">{price}</span>
              <Button>Book a Class</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};