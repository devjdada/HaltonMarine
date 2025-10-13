import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dredgingImage from "@/assets/service-dredging.jpg";
import equipmentImage from "@/assets/service-equipment.jpg";
import marineImage from "@/assets/service-marine.jpg";
import vesselImage from "@/assets/service-vessel.jpg";

const equipmentData = [
  {
    name: "Dredgers",
    image: dredgingImage,
  },
  {
    name: "Excavators",
    image: equipmentImage,
  },
  {
    name: "Barges",
    image: marineImage,
  },
  {
    name: "Tug Boats",
    image: vesselImage,
  },
];

const Equipment = () => {
  return (
    <section className="container mx-auto py-12 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {equipmentData.map((item) => (
          <Card key={item.name}>
            <CardHeader>
              <img src={item.image} alt={item.name} className="rounded-t-lg object-cover h-64 w-full" />
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