import React from 'react';
import Hero from '../Components/Hero/Hero';
import Introduction from '../Components/Introduction/Introduction';
import UnsplashUse from '../Components/UseCases/Unsplash/UnsplashUse';
import RickMortyUse from '../Components/UseCases/RickMorty/RickMortyUse';

const LandingPage = () => {
  return (
    <div className=''>
      <Hero />
      <Introduction />
      <UnsplashUse />
      <RickMortyUse />
    </div>
  );
};

export default LandingPage;