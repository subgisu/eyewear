import { ArrowDown } from 'lucide-react';
import { PRODUCT_INFO } from '../constants';

const Hero = () => {
  const { heroCopy } = PRODUCT_INFO;

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="src/assets/main-visual-new.png"
          alt="MIRI Eyewear — 햇빛 아래의 라이프스타일"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/30 via-transparent to-ivory/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-brown-800 font-bold fade-in-up">
          {heroCopy.title}
        </h1>
        <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-brown-900 fade-in-up delay-100">
          {heroCopy.subtitle}
        </h2>
        <p className="text-brown-600 text-sm md:text-lg leading-relaxed whitespace-pre-line max-w-xl mx-auto fade-in-up delay-200">
          {heroCopy.desc}
        </p>
      </div>

      <div className="relative z-10 pb-12 w-full flex justify-center fade-in-up delay-500">
        <ArrowDown className="text-brown-800 animate-bounce w-6 h-6" strokeWidth={1} />
      </div>
    </section>
  );
};

export default Hero;
