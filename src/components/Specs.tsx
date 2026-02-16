import { PRODUCT_INFO } from '../constants';
import { FrontView, SideView } from './SpecsDiagram';

const SPEC_LABELS: Record<string, string> = {
  lensWidth: '렌즈 폭',
  lensHeight: '렌즈 높이',
  bridge: '브릿지',
  totalLength: '전체 길이',
  templeLength: '다리 길이',
  weight: '무게',
};

const Specs = () => {
  const { specs } = PRODUCT_INFO.sections;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-end border-b-4 border-brown-200 pb-4 mb-12">
          <div>
            <span className="text-xs font-bold text-brown-400 tracking-[0.2em] block mb-1">MIRI EYEWEAR</span>
            <h3 className="text-3xl md:text-4xl font-serif text-brown-800">SUNGLASS INFO</h3>
          </div>
          <span className="hidden md:block text-brown-400 font-serif italic text-lg">
            Model. {PRODUCT_INFO.name.replace('MIRI ', '')}
          </span>
        </div>

        {/* Diagrams */}
        <div className="mb-16">
          <FrontView />
          <SideView />
        </div>

        {/* Specs Table */}
        <div className="bg-brown-50 rounded-lg p-8">
          <div className="grid grid-cols-2 gap-y-6 gap-x-8 md:grid-cols-3">
            {Object.entries(SPEC_LABELS).map(([key, label]) => (
              <div key={key} className="flex flex-col border-b border-brown-200 pb-2">
                <span className="text-xs text-brown-400 mb-1">{label}</span>
                <span className="text-lg font-medium text-brown-900">
                  {specs[key as keyof typeof specs]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specs;
