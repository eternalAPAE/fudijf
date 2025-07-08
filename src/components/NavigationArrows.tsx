
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationArrowsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export const NavigationArrows = ({ 
  onPrevious, 
  onNext, 
  canGoPrevious, 
  canGoNext 
}: NavigationArrowsProps) => {
  return (
    <>
      {/* Left Arrow */}
      <Button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        size="icon"
        variant="outline"
        className="
          absolute left-4 top-1/2 -translate-y-1/2 z-20
          w-12 h-12 rounded-full
          bg-black/80 border-2 border-white/50
          text-white hover:text-black
          hover:bg-white/90 hover:border-white
          disabled:opacity-30 disabled:cursor-not-allowed
          transition-all duration-300 ease-out
          backdrop-blur-sm
        "
        style={{
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
        }}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      {/* Right Arrow */}
      <Button
        onClick={onNext}
        disabled={!canGoNext}
        size="icon"
        variant="outline"
        className="
          absolute right-4 top-1/2 -translate-y-1/2 z-20
          w-12 h-12 rounded-full
          bg-black/80 border-2 border-white/50
          text-white hover:text-black
          hover:bg-white/90 hover:border-white
          disabled:opacity-30 disabled:cursor-not-allowed
          transition-all duration-300 ease-out
          backdrop-blur-sm
        "
        style={{
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
        }}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>
    </>
  );
};
