export interface WeightFeature {
  id: number;
  desc: string;
}

export interface EliteFeatureItem {
  en: string;
  ko: string;
}

export interface ProductInfo {
  name: string;
  price: string;
  originalPrice: string;
  currency: string;
  heroCopy: {
    title: string;
    subtitle: string;
    desc: string;
  };
  sections: {
    reason: { title: string; desc: string };
    weight: {
      title: string;
      subtitle: string;
      features: WeightFeature[];
    };
    uv: {
      title: string;
      subtitle: string;
      features: string[];
    };
    eliteFeatures: {
      title: string;
      items: EliteFeatureItem[];
    };
    design: {
      title: string;
      subtitle: string;
      features: string[];
    };
    activities: {
      title: string;
      items: string[];
      desc: string;
    };
    specs: {
      lensWidth: string;
      lensHeight: string;
      bridge: string;
      totalLength: string;
      templeLength: string;
      weight: string;
      material: string;
    };
    trust: {
      shipping: string;
      exchange: string;
      message: string;
    };
    closing: {
      title: string;
      desc: string;
    };
  };
}
