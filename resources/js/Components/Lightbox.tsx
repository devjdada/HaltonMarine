import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  description: string | null;
  file_path: string;
  type: 'image' | 'video';
}

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox = ({ items, currentIndex, isOpen, onClose, onNavigate }: LightboxProps) => {
  const currentItem = items[currentIndex];

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
          >
            <X size={32} />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all bg-white/10 hover:bg-white/20 p-4 rounded-full z-[110]"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all bg-white/10 hover:bg-white/20 p-4 rounded-full z-[110]"
          >
            <ChevronRight size={32} />
          </button>

          {/* Content Area */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-5xl max-h-[85vh] w-full px-12 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full group">
              {currentItem.type === 'image' ? (
                <img
                  src={`/storage/${currentItem.file_path}`}
                  alt={currentItem.title}
                  className="w-full h-full object-contain max-h-[75vh]"
                />
              ) : (
                <video
                  src={`/storage/${currentItem.file_path}`}
                  controls
                  autoPlay
                  className="w-full h-full object-contain max-h-[75vh]"
                />
              )}
            </div>

            {/* Caption */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-center text-white"
            >
              <h3 className="text-2xl font-bold">{currentItem.title}</h3>
              {currentItem.description && (
                <p className="mt-2 text-white/70 max-w-2xl mx-auto">{currentItem.description}</p>
              )}
              <div className="mt-4 text-sm text-white/40 uppercase tracking-widest font-mono">
                {currentIndex + 1} / {items.length}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
