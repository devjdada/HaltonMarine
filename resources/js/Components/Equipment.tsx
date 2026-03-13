import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Ship } from "lucide-react";
import dredgingImage from "@/assets/service-dredging.jpg";
import equipmentImage from "@/assets/service-equipment.jpg";
import marineImage from "@/assets/service-marine.jpg";
import vesselImage from "@/assets/service-vessel.jpg";

interface Equipment {
  id: number;
  name: string;
  specs: string | null;
  image: string | null;
  type: 'Core' | 'Extended';
}

interface EquipmentProps {
  equipment: Equipment[];
}

const Equipment = ({ equipment }: EquipmentProps) => {
  const displayEquipment = equipment.filter(e => e.type === 'Core');
  return (
    <section className="container mx-auto py-12 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayEquipment.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              {item.image ? (
                  <img src={item.image.startsWith('/') || item.image.startsWith('http') ? item.image : `/storage/${item.image}`} alt={item.name} className="rounded-t-lg object-cover h-64 w-full" />
              ) : (
                  <div className="h-64 w-full bg-primary/5 flex items-center justify-center rounded-t-lg">
                      <Ship className="h-12 w-12 text-primary/40" />
                  </div>
              )}
            </CardHeader>
            <CardContent>
              <CardTitle className="text-center">{item.name}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Equipment;
