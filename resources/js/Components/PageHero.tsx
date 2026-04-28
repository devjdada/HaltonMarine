
interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

const PageHero = ({ title, subtitle, image }: PageHeroProps) => {
  const imageUrl = image && (image.startsWith('http') || image.startsWith('/')) ? image : (image ? `/storage/${image}` : '');
  
  return (
    <div className="relative h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-xl text-white/90 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;
