import mainBgImage from '../assets/main-visual-new.png';
import { ArrowDown } from 'lucide-react';
import { PRODUCT_INFO } from '../constants';

const Hero = () => {
  const { heroCopy } = PRODUCT_INFO;

 return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
  src={mainBgImage}
  alt="MIRI Eyewear — 햇빛 아래의 라이프스타일"
  className="w-full h-full object-cover brightness-50"
/>
<div className="absolute inset-0 z-0">
  {/* 1. 이미지 자체를 어둡게 누름 (opacity-90 삭제, brightness-50 추가) */}
  <img
    src={mainBgImage}
    alt="MIRI Eyewear"
    className="w-full h-full object-cover brightness-50"
  />
  {/* 2. 밝은 아이보리색 필터를 어두운 검은색(black) 필터로 교체하여 흰 글씨 가독성 극대화 */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
</div>
      <div className="relative z-10 pb-12 w-full flex justify-center fade-in-up delay-500">
        <ArrowDown className="text-brown-800 animate-bounce w-6 h-6" strokeWidth={1} />
      </div>
    </section>
  );
};

export default Hero;
