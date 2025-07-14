import { useState, useEffect, useCallback } from 'react';
import { UserCard } from './UserCard';
import { NavigationArrows } from './NavigationArrows';

interface User {
  name: string;
  role: string;
  image: string;
  telegram: string;
  quote: string;
}

interface UserCardDashboardProps {
  users: User[];
  usersPerPage?: number;
}

export const UserCardDashboard = ({ users, usersPerPage = 3 }: UserCardDashboardProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalPages = Math.ceil(users.length / usersPerPage);
  const currentUsers = users.slice(currentPage * usersPerPage, (currentPage + 1) * usersPerPage);

  const handleNavigation = useCallback((newPage: number) => {
    if (isTransitioning || newPage < 0 || newPage >= totalPages) return;
    
    setIsTransitioning(true);
    setCurrentPage(newPage);
    
    // Reset transition state after animation
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, totalPages]);

  const handlePrevious = useCallback(() => {
    handleNavigation(currentPage - 1);
  }, [currentPage, handleNavigation]);

  const handleNext = useCallback(() => {
    handleNavigation(currentPage + 1);
  }, [currentPage, handleNavigation]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handlePrevious();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevious, handleNext]);

  // Preload adjacent page images for performance
  useEffect(() => {
    const preloadImages = () => {
      const pagesToPreload = [currentPage - 1, currentPage + 1].filter(page => page >= 0 && page < totalPages);
      
      pagesToPreload.forEach(page => {
        const pageUsers = users.slice(page * usersPerPage, (page + 1) * usersPerPage);
        pageUsers.forEach(user => {
          const img = new Image();
          img.src = user.image;
        });
      });
    };

    preloadImages();
  }, [currentPage, users, usersPerPage, totalPages]);

  if (!users.length) return null;

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-4">
      {/* Navigation Arrows */}
      <NavigationArrows
        onPrevious={handlePrevious}
        onNext={handleNext}
        canGoPrevious={currentPage > 0}
        canGoNext={currentPage < totalPages - 1}
      />

      {/* User Cards Container */}
      <div className="relative w-full max-w-6xl">
        <div className={`
          grid gap-6 transition-all duration-300 ease-out
          ${currentUsers.length === 1 ? 'grid-cols-1 max-w-lg mx-auto' : 
            currentUsers.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' :
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}
          ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
        `}>
          {currentUsers.map((user, index) => (
            <div key={`${currentPage}-${index}`} className="relative">
              {user.name.toLowerCase() === 'hxl7' && (
                <a
                  href="/bio"
                  className="absolute -top-6 left-1/2 -translate-x-1/2 text-purple-400 text-lg font-bold z-10"
                  style={{
                    textShadow: '0 0 5px #a855f7, 0 0 10px #a855f7, 0 0 20px #a855f7',
                    animation: 'pulse 2s infinite'
                  }}
                >
                  BIO
                </a>
              )}
              <UserCard user={user} isActive={!isTransitioning} />
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(index)}
            disabled={isTransitioning}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === currentPage 
                ? 'bg-white w-6' 
                : 'bg-white/30 hover:bg-white/50'
              }
            `}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};