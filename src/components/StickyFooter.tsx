import { PRODUCT_INFO } from '../constants';

const StickyFooter = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-brown-100 py-4 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
    <div className="container mx-auto px-6 max-w-5xl flex items-center justify-between">
      <div className="hidden md:block">
        <h4 className="text-brown-900 font-bold tracking-wide">{PRODUCT_INFO.name}</h4>
        <span className="text-xs text-brown-600">Premium Lifestyle Eyewear</span>
      </div>

      <div className="flex items-center justify-between w-full md:w-auto gap-6">
        <div className="text-right md:text-left">
          <span className="block text-xs text-brown-400 line-through opacity-50">
            ₩{PRODUCT_INFO.originalPrice}
          </span>
          <span className="block text-lg font-serif text-brown-900">
            ₩{PRODUCT_INFO.price}
          </span>
        </div>
        <a
          href="#purchase"
          className="bg-brown-800 hover:bg-brown-900 text-ivory px-8 py-3 transition-colors duration-300 flex-grow md:flex-grow-0 min-w-[140px] text-sm uppercase tracking-widest text-center"
        >
          구매하기
        </a>
      </div>
    </div>
  </div>
);

export default StickyFooter;
