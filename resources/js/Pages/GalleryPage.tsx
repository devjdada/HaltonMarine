import React, { useState } from 'react';
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import PageHero from "@/Components/PageHero";
import Lightbox from "@/Components/Lightbox";
import { Helmet } from "react-helmet-async";
import { seo } from "@/lib/seo";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  description: string | null;
  file_path: string;
  type: 'image' | 'video';
}

interface GalleryPageProps {
  gallery: GalleryItem[];
  banner?: {
    title: string;
    subtitle?: string;
    image: string;
  };
}

const GalleryPage = ({ gallery, banner }: GalleryPageProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Helmet>
        <title>{`Gallery | ${seo.home.title}`}</title>
        <meta name="description" content="Explore our project gallery featuring dredging operations, marine services, and our fleet in action." />
      </Helmet>
      <Navbar />
      <PageHero 
        title={banner?.title || "Our Gallery"} 
        subtitle={banner?.subtitle}
        image={banner?.image || "https://images.unsplash.com/photo-1504917595217-d4dc5f649771?q=80&w=2070&auto=format&fit=crop"} 
      />
      
      <main className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">Visual Portfolio</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Expore our collection of high-impact marine projects and operational highlights. 
              Click on any item to view in full resolution.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500 font-medium pb-1">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              {gallery.filter(i => i.type === 'image').length} Images
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              {gallery.filter(i => i.type === 'video').length} Videos
            </span>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {gallery.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              key={item.id}
              onClick={() => setSelectedItemIndex(index)}
              className="relative aspect-square cursor-pointer group overflow-hidden bg-zinc-900 rounded-sm"
            >
              {item.type === 'image' ? (
                <img 
                  src={`/storage/${item.file_path}`} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video 
                    src={`/storage/${item.file_path}`}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-sky-500/80 group-hover:scale-110 transition-all duration-300">
                      <Play className="text-white fill-white ml-1" size={20} />
                    </div>
                  </div>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <span className="text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">
                  {item.type}
                </span>
                <h3 className="text-white font-bold text-lg leading-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {gallery.length === 0 && (
          <div className="text-center py-32 border-2 border-dashed border-zinc-900 rounded-3xl">
            <p className="text-zinc-600 text-xl font-medium">Gallery is currently empty. Check back soon for updates.</p>
          </div>
        )}
      </main>

      <Lightbox 
        items={gallery}
        currentIndex={selectedItemIndex || 0}
        isOpen={selectedItemIndex !== null}
        onClose={() => setSelectedItemIndex(null)}
        onNavigate={setSelectedItemIndex}
      />

      <Footer />
    </div>
  );
};

export default GalleryPage;
