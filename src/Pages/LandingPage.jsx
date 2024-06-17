import React from 'react';
import Hero from '../Components/Hero/Hero';
import Introduction from '../Components/Introduction/Introduction';
import UnsplashUse from '../Components/UnsplashDocs/UnsplashUse';
import RickMortyUse from '../Components/RickMorty/RickMortyUse';

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