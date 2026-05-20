// PREMIUM ROMANTIC 3D WEBSITE TEMPLATE // Stack: React + Tailwind + Framer Motion Ready // Replace all placeholder images/music with personal memories

export default function LoveWebsiteTemplate() { const images = [ "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop", ];

return ( <main className="bg-black text-white overflow-x-hidden w-full min-h-screen"> {/* RESPONSIVE WEBSITE TEMPLATE /} {/ Install Dependencies: npm install framer-motion gsap three @react-three/fiber @react-three/drei react-icons swiper howler lenis /} {/ HERO SECTION */} <section className="relative h-screen overflow-hidden"> <div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop')", }} />

<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

    <nav className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-10 py-6">
      <h1 className="text-3xl italic font-bold text-pink-300">
        For My Love ❤️
      </h1>

      <div className="flex gap-8 text-sm md:text-base text-pink-100">
        <a href="#">Home</a>
        <a href="#">Gallery</a>
        <a href="#">Memories</a>
        <a href="#">Cards</a>
        <a href="#">For You</a>
      </div>
    </nav>

    <div className="relative z-10 h-full flex items-center px-10 md:px-24">
      <div className="max-w-2xl">
        <p className="text-pink-300 text-xl mb-4">
          You Make My World ❤️
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-tight">
          More Beautiful
          <span className="block text-pink-400">Everyday</span>
        </h1>

        <p className="mt-8 text-gray-200 text-lg max-w-lg leading-8">
          A little place dedicated to the most amazing girl in my life.
        </p>

        <button className="mt-10 px-8 py-4 rounded-full bg-pink-500 hover:bg-pink-600 transition-all duration-500 hover:scale-110 shadow-2xl">
          Explore Our World 💖
        </button>
      </div>
    </div>
  </section>

  {/* MEMORIES SECTION */}
  <section className="relative min-h-screen bg-gradient-to-b from-pink-950 to-[#1a001a] py-24 px-6 overflow-hidden">
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(255,192,203,0.4),transparent_60%)]" />

    <div className="relative z-10 text-center">
      <p className="text-pink-300 text-lg">Beautiful Moments</p>

      <h2 className="text-5xl md:text-7xl font-black mt-4 leading-tight">
        Memories That
        <span className="block text-pink-400">Take My Breath Away</span>
      </h2>
    </div>

    <div className="relative mt-24 flex justify-center items-center">
      <div className="relative w-[700px] h-[400px] perspective-[2000px]">
        {images.map((img, i) => {
          const rotate = (i - 2) * 18;
          const translate = (i - 2) * 130;
          const scale = i === 2 ? 1.15 : 0.9;

          return (
            <div
              key={i}
              className="absolute top-0 left-1/2 transition-all duration-700 hover:z-50 hover:scale-125"
              style={{
                transform: `translateX(${translate}px) rotateY(${rotate}deg) scale(${scale})`,
              }}
            >
              <img
                src={img}
                className="w-[220px] h-[320px] object-cover rounded-[30px] border-4 border-pink-300 shadow-[0_0_60px_rgba(255,105,180,0.5)]"
              />
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* BOOK + CARD SECTION */}
  <section className="grid md:grid-cols-2 min-h-screen">
    <div className="relative bg-[#1a0d0d] flex items-center justify-center p-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,192,203,0.15),transparent_60%)]" />

      <div className="relative w-[380px] h-[500px] perspective-[2500px]">
        <div className="absolute inset-0 bg-[#d9b38c] rounded-r-2xl shadow-2xl transform rotate-[-8deg] hover:rotate-0 transition-all duration-700 overflow-hidden border-[12px] border-[#8b5e3c]">
          <div className="grid grid-cols-2 gap-3 p-5 bg-[#f5e6cc] h-full">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="rounded-xl object-cover h-40 w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="relative bg-gradient-to-br from-[#2a002a] to-[#120012] flex items-center justify-center p-10 overflow-hidden">
      <div className="grid gap-10">
        {[1, 2].map((card) => (
          <div
            key={card}
            className="group relative w-[260px] h-[360px] cursor-pointer"
          >
            <div className="absolute inset-0 rounded-[30px] bg-pink-400 shadow-[0_0_60px_rgba(255,105,180,0.5)] group-hover:rotate-y-180 transition-all duration-700" />

            <div className="absolute inset-2 rounded-[28px] bg-pink-200 flex items-center justify-center text-center p-6 text-[#7a004f] text-3xl font-bold shadow-inner">
              You Are Special ❤️
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CONCLUSION */}
  <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#180018] to-black px-6">
    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,20,147,0.2),transparent_60%)]" />

    <div className="relative z-10 max-w-4xl">
      <p className="text-pink-300 text-xl mb-6">
        Thank You For Being You ❤️
      </p>

      <h2 className="text-6xl md:text-8xl font-black leading-tight">
        I’m So Lucky
        <span className="block text-pink-400">To Have You</span>
      </h2>

      <p className="mt-10 text-xl text-gray-300 leading-10">
        This little website is just a small way to say how much you mean to me.
        I love you more than words can say. ❤️
      </p>

      <button className="mt-14 px-10 py-5 rounded-full bg-pink-500 hover:bg-pink-600 transition-all duration-500 hover:scale-110 text-xl font-bold shadow-2xl">
        Forever & Always 💕
      </button>
    </div>
  </section>
</main>

); }
