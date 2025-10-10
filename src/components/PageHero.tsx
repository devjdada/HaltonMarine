import Navbar from "@/components/Navbar";

interface PageHeroProps {
  title: string;
  image: string;
}

const PageHero = ({ title, image }: PageHeroProps) => {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <Navbar />
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageHero;
