import { PRODUCT_INFO } from '../constants';
import Section from './Section';

const Closing = () => {
  const { closing } = PRODUCT_INFO.sections;

  return (
    <Section className="bg-ivory mb-20">
      <div className="flex flex-col items-center justify-center text-center py-8 md:py-12">
        <h2 className="text-3xl md:text-5xl font-serif text-brown-900 mb-8">
          {closing.title}
        </h2>
        <p className="text-brown-600 text-lg md:text-xl leading-relaxed whitespace-pre-line mb-12">
          {closing.desc}
        </p>

        <div className="text-center">
          <p className="text-sm tracking-[0.2em] text-brown-400 mb-2">{PRODUCT_INFO.name}</p>
          <p className="text-2xl font-medium text-brown-900 mb-8">₩{PRODUCT_INFO.price}</p>
          <a
            href="#purchase"
            className="inline-block border-b border-brown-900 text-brown-900 pb-1 hover:opacity-70 transition-opacity"
          >
            지금, 빛을 다루는 쪽으로.
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Closing;
