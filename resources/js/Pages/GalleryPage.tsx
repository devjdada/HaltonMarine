import React from 'react';
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import PageHero from "@/Components/PageHero";
import { Helmet } from "react-helmet-async";
import { seo } from "@/lib/seo";
import { Card } from "@/Components/ui/card";

interface GalleryItem {
  id: number;
  title: string;
  description: string | null;
  file_path: string;
  type: 'image' | 'video';
}

interface GalleryPageProps {
  gallery: GalleryItem[];
}

const GalleryPage = ({ gallery }: GalleryPageProps) => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{`Gallery | ${seo.home.title}`}</title>
        <meta name="description" content="Explore our project gallery featuring dredging operations, marine services, and our fleet in action." />
      </Helmet>
      <Navbar />
      <PageHero 
        title="Our Gallery" 
        image="https://images.unsplash.com/photo-1504917595217-d4dc5f649771?q=80&w=2070&auto=format&fit=crop" 
      />
      
      <main className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item) => (
            <Card key={item.id} className="overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative aspect-video overflow-hidden bg-muted">
                {item.type === 'image' ? (
                  <img 
                    src={`/storage/${item.file_path}`} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <video 
                    src={`/storage/${item.file_path}`}
                    className="w-full h-full object-cover"
                    controls
                  />
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  {item.description && <p className="text-sm line-clamp-2">{item.description}</p>}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {gallery.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg italic">Gallery is currently empty. Check back soon for updates.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;
