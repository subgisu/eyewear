import { PRODUCT_INFO } from '../constants';

const Activities = () => {
  const { activities } = PRODUCT_INFO.sections;

  return (
    <section className="py-24 bg-white border-y border-brown-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3">
            <h3 className="text-sm font-bold tracking-widest uppercase text-brown-400 mb-4">
              {activities.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {activities.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-brown-50 text-brown-800 text-xs uppercase tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-brown-900 whitespace-pre-line">
              {activities.desc}
            </p>
            <div className="mt-12 p-6 bg-ivory border border-brown-100">
              <p className="text-sm text-brown-600 italic">
                추천 활동은 단순 아이콘이 아니라, 라이프스타일의 확장입니다.
                <br />
                움직임 속에서 더 안정적인 프레임 밸런스를 경험하세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
