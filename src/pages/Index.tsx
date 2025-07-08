
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserCardDashboard } from '@/components/UserCardDashboard';

const Index = () => {
  const [showMain, setShowMain] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const members = [
    { name: "Authorization", role: "Founder", image: "https://files.catbox.moe/d4bm08.png", telegram: "@authorizationUA", quote: "Do not compare yourself to others. If you do so, you are insulting yourself. -Adolf Hitler" },
    { name: "hxl7", role: "Coder/Support", image: "https://files.catbox.moe/pkrjlz.png", telegram: "@poorint", quote: "I took a second out my day to calm the fuck down, now i got one less second to do something what the fuck now" },
    { name: "resired", role: "Co - Founder", image: "https://files.catbox.moe/g3248n.jpg", telegram: "@resired", quote: "The truth is that everyone will eventually fall and understand what they have done wrong and feel their own sins... Stop before it's too late, or plead with God later. - resired" },
    { name: "Wem", role: "Owner", image: "https://files.catbox.moe/ueblmu.jpg", telegram: "@WemURC", quote: "The greater the crime perpetrated by the leadership, the less likely it is that the people will ever believe their leaders to be capable of perpetrating such an event. - Adolf Hitler" },
    { name: "faint", role: "Co Owner", image: "https://files.catbox.moe/4zy9oq.jpg", telegram: "@faintend", quote: "?" },
    { name: "search", role: "Member", image: "https://files.catbox.moe/6yq44v.jpg", telegram: "@SearchDestroys", quote: "+ ANUBISS ✛ Shield ✛ 881| #AE #AP" },
    { name: "frost", role: "Member", image: "https://files.catbox.moe/t1nytw.jpg", telegram: "@frostmeds", quote: "bringing terror upon extortion" },
    { name: "grief", role: "Member", image: "https://files.catbox.moe/g76f9w.jpg", telegram: "@greif919", quote: "We must forget the concept of comradeship between soldiers. A Communist is no comrade before or after this battle. This is a war of annihilation -Adolf Hitler" },
    { name: "Blue", role: "Member", image: "https://files.catbox.moe/8l502c.jpg", telegram: "@blewchews", quote: "?" },
    { name: "Rabbit", role: "Member", image: "https://files.catbox.moe/2my5qm.jpg", telegram: "@deathtoextorts", quote: "?." },
    { name: "opsex", role: "Member", image: "https://files.catbox.moe/3zw194.jpg", telegram: "", quote: "?" },
    { name: "Malice", role: "Partner + Member", image: "https://files.catbox.moe/xtk0vy.jpg", telegram: "@KillingThePedos", quote: "?" }
  ];

  useEffect(() => {
    if (showMain && audioRef.current && !isPlaying) {
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  }, [showMain]);

  const enterSite = () => {
    setShowMain(true);
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!showMain) {
    return (
      <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="mb-12">
            <img 
              src="https://files.catbox.moe/0tgzx0.png" 
              alt="Hanging figure" 
              className="w-48 h-auto mx-auto opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          <div className="relative">
            <button
              onClick={enterSite}
              className="relative px-16 py-4 bg-transparent border-2 border-gray-500 text-gray-300 font-mono text-lg tracking-[0.2em] uppercase transition-all duration-300 hover:border-gray-300 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-white/30 focus:outline-none focus:shadow-[0_0_30px_rgba(255,255,255,0.5)] focus:shadow-white/50"
              style={{
                textShadow: '0 0 10px rgba(255,255,255,0.3)',
                boxShadow: '0 0 15px rgba(255,255,255,0.1), inset 0 0 15px rgba(255,255,255,0.05)'
              }}
            >
              ENTER 919
            </button>
          </div>
        </div>

        <audio ref={audioRef} loop>
          <source src="https://files.catbox.moe/pchg8m.mp3" type="audio/mpeg" />
        </audio>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen text-white font-mono relative overflow-hidden"
      style={{ 
        backgroundColor: '#000000',
        backgroundImage: 'url(https://files.catbox.moe/hbdxy9.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Audio Controls */}
      <div className="fixed top-4 right-4 z-30 flex items-center gap-2">
        <Button
          onClick={toggleAudio}
          size="sm"
          variant="outline"
          className="border-white/50 bg-black/70 text-white hover:bg-white/20 hover:text-white hover:border-white"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
        <Volume2 className="w-4 h-4 text-white" />
      </div>

      {/* User Dashboard */}
      <UserCardDashboard users={members} usersPerPage={3} />

      <audio ref={audioRef} autoPlay loop>
        <source src="https://files.catbox.moe/8st39o.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Index;
