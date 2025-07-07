import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showMain, setShowMain] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const members = [
    { name: "Necro", role: "Founder", image: "https://files.catbox.moe/d4bm08.png", telegram: "@authorizationUA", quote: "Do not compare yourself to others. If you do so, you are insulting yourself. -Adolf Hitler" },
    { name: "hxl7", role: "Coder/Support", image: "https://files.catbox.moe/pkrjlz.png", telegram: "@poorint", quote: "I took a second out my day to calm the fuck down, now i got one less second to do something what the fuck now" },
    { name: "resired", role: "Co - Founder", image: "https://files.catbox.moe/g3248n.jpg", telegram: "@resired", quote: "?" },
    { name: "Wem", role: "Owner", image: "https://files.catbox.moe/ueblmu.jpg", telegram: "@wemURC", quote: "The greater the crime perpetrated by the leadership, the less likely it is that the people will ever believe their leaders to be capable of perpetrating such an event. - Adolf Hitler" },
    { name: "faint", role: "Co Owner", image: "https://files.catbox.moe/4zy9oq.jpg", telegram: "@t", quote: "?" },
    { name: "search", role: "Member", image: "https://files.catbox.moe/search.jpg", telegram: "@SearchDestroys", quote: "?" },
    { name: "frost", role: "Member", image: "https://files.catbox.moe/t1nytw.jpg", telegram: "@frostmeds", quote: "?" },
    { name: "grief", role: "Member", image: "https://files.catbox.moe/g76f9w.jpg", telegram: "@greif919", quote: "?" },
    { name: "Blue", role: "Member", image: "https://files.catbox.moe/8l502c.jpg", telegram: "@blewchews", quote: "?" },
    { name: "Rabbit", role: "Member", image: "https://files.catbox.moe/2my5qm.jpg", telegram: "@deathtoextorts", quote: "?." },
    { name: "opsex", role: "Member", image: "https://files.catbox.moe/3zw194.jpg", telegram: "", quote: "?" },
    { name: "Malice", role: "Partner + Member", image: "https://files.catbox.moe/xtk0vy.jpg", telegram: "@KillingThePedos", quote: "?" }
  ];

  const membersPerPage = 3;
  const totalPages = Math.ceil(members.length / membersPerPage);

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

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentMembers = () => {
    const start = currentPage * membersPerPage;
    return members.slice(start, start + membersPerPage);
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
          <source src="https://files.catbox.moe/conwsg.mp3" type="audio/mpeg" />
        </audio>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen text-white font-mono relative overflow-hidden"
      style={{
        backgroundImage: "url('/test.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="fixed top-4 right-4 z-20 flex items-center gap-2">
        <Button
          onClick={toggleAudio}
          size="sm"
          variant="outline"
          className="border-gray-600 bg-black/70 text-gray-300 hover:bg-gray-800/70 hover:text-white hover:border-gray-400"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
        <Volume2 className="w-4 h-4 text-gray-400" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20">
          <Button onClick={prevPage} size="icon" variant="outline" className="border-gray-600 bg-black/70 text-gray-300 hover:bg-gray-800/70 hover:text-white hover:border-gray-400 rounded-none w-12 h-12">
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </div>

        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
          <Button onClick={nextPage} size="icon" variant="outline" className="border-gray-600 bg-black/70 text-gray-300 hover:bg-gray-800/70 hover:text-white hover:border-gray-400 rounded-none w-12 h-12">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {getCurrentMembers().map((member, index) => (
            <a
              key={index}
              href={`https://t.me/${member.telegram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="member-card bg-black/80 border border-gray-600 rounded-none p-8 min-w-[300px] text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/20 hover:border-gray-400 hover:bg-black/90 group cursor-pointer backdrop-blur-sm"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-none overflow-hidden border-2 border-gray-600 group-hover:border-gray-400 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/150x150/333333/ffffff?text=${member.name.charAt(0)}`;
                    }}
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-1 group-hover:text-gray-200 transition-colors duration-300 uppercase tracking-wider text-gray-300">
                {member.name}
              </h3>

              <p className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300 text-sm uppercase tracking-wide font-mono mb-1">
                {member.role}
              </p>

              <p className="italic text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm mb-2">
                {member.quote}
              </p>

              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-xs font-mono">
                {member.telegram}
              </div>
            </a>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex gap-2 mb-8">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-none transition-all duration-300 ${
                  i === currentPage
                    ? 'bg-gray-400 shadow-lg shadow-gray-400/50'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <audio ref={audioRef} autoPlay loop>
        <source src="https://files.catbox.moe/pchg8m.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Index;
