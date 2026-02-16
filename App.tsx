import React from 'react';
import Hero from './components/Hero';
import Reason from './components/Reason';
import Weight from './components/Weight';
import UVFeature from './components/UVFeature';
import EliteFeatures from './components/EliteFeatures';
import Design from './components/Design';
import Activities from './components/Activities';
import Specs from './components/Specs';
import Trust from './components/Trust';
import Closing from './components/Closing';
import StickyFooter from './components/StickyFooter';

const App: React.FC = () => {
  return (
    <main className="w-full overflow-x-hidden min-h-screen relative font-sans">
      <Hero />
      <Reason />
      <Weight />
      <UVFeature />
      <Design />
      <EliteFeatures />
      <Activities />
      <Specs />
      <Trust />
      <Closing />
      <StickyFooter />
    </main>
  );
};

export default App;