import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface UserCardProps {
  user: {
    name: string;
    role: string;
    telegram: string;
    image: string;
    quote: string;
  };
  isActive: boolean;
}

export const UserCard = ({ user, isActive }: UserCardProps) => {
  const handleTelegramClick = () => {
    if (user.telegram) {
      window.open(`https://t.me/${user.telegram.replace('@', '')}`, '_blank');
    }
  };

  return (
    <>
      <style>{`
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(-1px, -1px); }
          60% { transform: translate(1px, 1px); }
          80% { transform: translate(1px, -1px); }
        }
        
        @keyframes textGlitch {
          0%, 100% { 
            text-shadow: 2px 0 #ffffff, -2px 0 #000000;
          }
          25% { 
            text-shadow: -2px 0 #ffffff, 2px 0 #000000;
          }
          50% { 
            text-shadow: 2px 0 #ffffff, -2px 0 #000000, 0 0 10px rgba(255,255,255,0.5);
          }
          75% { 
            text-shadow: -2px 0 #ffffff, 2px 0 #000000, 0 0 5px rgba(255,255,255,0.3);
          }
        }
        
        .glitch-card {
          animation: ${isActive ? 'glitch 3s infinite alternate' : 'none'};
        }
        
        .glitch-text {
          animation: textGlitch 2s infinite alternate;
        }
      `}</style>
      
      <Card 
        className={`
          relative w-full max-w-md mx-auto bg-black/10 
          border border-white/10 backdrop-blur-xl transition-all duration-500 ease-out
          ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
          hover:bg-black/15 hover:border-white/15 glitch-card
        `}
        style={{
          boxShadow: '0 0 30px rgba(255, 255, 255, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.02)',
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <CardContent className="p-8 text-center space-y-6">
          {/* Profile Picture */}
          <div className="relative mx-auto w-32 h-32">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-gray-300 to-white p-1 animate-pulse">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src={user.image} 
                  alt={`${user.name} profile`}
                  className="object-cover transition-all duration-300 hover:brightness-110"
                  loading="lazy"
                />
                <AvatarFallback className="bg-gray-800 text-white text-2xl font-mono">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Username and Role with Enhanced Glitch Effect */}
          <div className="space-y-2">
            <h2 className="text-3xl font-mono font-bold text-white relative glitch-text">
              {user.name}
            </h2>
            <p className="text-lg font-mono text-gray-400">
              {user.role}
            </p>
            
            {/* Social Handles */}
            <div className="space-y-2">
              {user.telegram && (
                <button
                  onClick={handleTelegramClick}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-black/10 rounded-lg border border-white/10 w-full hover:bg-black/15 hover:border-white/15 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  <span className="text-white font-mono text-sm">{user.telegram}</span>
                </button>
              )}
              
              <div className="flex items-center justify-center gap-2 px-4 py-2 bg-black/10 rounded-lg border border-white/10 backdrop-blur-sm">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span className="text-white font-mono text-sm">?</span>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="px-4 py-3 bg-black/5 rounded-lg border border-white/5 backdrop-blur-sm">
            <p className="text-gray-300 italic text-sm leading-relaxed font-mono">
              "{user.quote}"
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
