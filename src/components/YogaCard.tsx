import { Card, CardContent } from "@/components/ui/card";

interface YogaCardProps {
  title: string;
  duration: string;
  level: string;
  image: string;
}

export const YogaCard = ({ title, duration, level, image }: YogaCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      <CardContent className="p-0">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{duration}</span>
            <span>{level}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};