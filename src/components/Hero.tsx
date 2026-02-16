import mainBgImage from '../assets/main-visual-new.png';
import { ArrowDown } from 'lucide-react';
import { PRODUCT_INFO } from '../constants';

const Hero = () => {
  const { heroCopy } = PRODUCT_INFO;

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden">
      
      {/* 1. 배경 이미지 및 어두운 오버레이 */}
      <div className="absolute inset-0 z-0">
        <img
          src={mainBgImage}
          alt="MIRI Eyewear"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* 2. 메인 텍스트 영역 (소실된 코드 복구 및 text-white 적용) */}
      <div className="relative z-10 container mx-auto px-6 pt-32 h-full flex flex-col justify-center items-center text-center">
        <p className="text-xl font-bold text-white mb-4 tracking-wider">
          {heroCopy.title}
        </p>
        <h1 className="text-5xl md:text-6xl font-bold leading-snug text-white">
          {heroCopy.subtitle}
        </h1>
        <p className="mt-6 text-xl text-white/90 whitespace-pre-line leading-relaxed">
          {heroCopy.desc}
        </p>
      </div>

      {/* 3. 하단 화살표 (배경 대비를 위해 흰색으로 변경) */}
      <div className="relative z-10 pb-12 w-full flex justify-center fade-in-up delay-500">
        <ArrowDown className="text-white animate-bounce w-6 h-6" strokeWidth={1} />
      </div>

    </section>
  );
};

export default Hero;
