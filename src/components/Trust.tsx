import { Truck, RefreshCw } from 'lucide-react';
import { PRODUCT_INFO } from '../constants';

const Trust = () => {
  const { trust } = PRODUCT_INFO.sections;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-ivory rounded-lg">
            <Truck className="w-8 h-8 text-brown-600 mx-auto mb-4" />
            <p className="text-brown-900 font-medium">{trust.shipping}</p>
          </div>
          <div className="p-8 bg-ivory rounded-lg">
            <RefreshCw className="w-8 h-8 text-brown-600 mx-auto mb-4" />
            <p className="text-brown-900 font-medium">{trust.exchange}</p>
          </div>
        </div>
        <p className="text-brown-600 whitespace-pre-line leading-relaxed">
          {trust.message}
        </p>
      </div>
    </section>
  );
};

export default Trust;
