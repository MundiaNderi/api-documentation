import React from "react";
import { Link } from "react-router-dom";

const RickMortyUse = () => {
  return (
    <div className="pt-10 mb-8 px-4 md:px-32">
      {/*Rick and Morty for Developers */}
      <div className="flex flex-col-reverse mb-8 md:flex-row items-center">
        <div>
          <h1 className="font-Raleway text-veryDarkBlue font-bold text-3xl">
            Rick and Morty API for developers
          </h1>
          <p className=" font-Raleway text-veryDarkBlue py-2">
            To enjoy the benefits of the Rick and Morty API as a developer,
            follow these steps:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className=" font-Raleway text-veryDarkBlue py-2">
              Navigate to the Rick and Morty GraphQL documentation
            </li>
            <li className=" font-Raleway text-veryDarkBlue py-2">
              Open the GraphQL playground and start querying
            </li>
            <li className=" font-Raleway text-veryDarkBlue py-2">
              Alternatively, use Postman to make and save your queries so that
              you can refer them for later
            </li>
            <li className=" font-Raleway text-veryDarkBlue py-2">
              Consume the GraphQL API in your projects
            </li>
          </ul>
          <Link to="/rickandmorty">
            <button className="bg-veryDarkBlue hover:bg-desaturatedBlue text-sm text-white px-4 py-2 rounded-r-2xl rounded-l-none">
              View Rick and Morty
            </button>
          </Link>
        </div>
        {/*Image */}
        <div className="">
          <img
            src="/assets/Movies.jpg"
            alt="Movies illustration"
            width={500}
          />
        </div>
      </div>

      {/*Rick and Morty for Businesses */}
      <div className='flex flex-col-reverse mt-5 md:flex-row-reverse my-8 items-center'>
        <div className="">
          <h1 className='font-bold font-Raleway text-veryDarkBlue text-2xl mb-4'>Unlock Business Potential with the Rick and Morty API</h1>
          <p className='py-2 font-Raleway'>
            The Rick and Morty API provides extensive data about the popular animated series. Here are some innovative business use cases:
          </p>
          <ul className='list-disc ml-6 mb-4'>
            <li className='font-Raleway text-veryDarkBlue py-2'>Fan Engagement: Develop interactive apps or websites that allow fans to explore characters, episodes, and locations in-depth.</li>
            <li className='font-Raleway text-veryDarkBlue py-2'>Merchandise: Create unique products based on character popularity and episode themes.</li>
            <li className='font-Raleway text-veryDarkBlue py-2'>Content Creation: Use the API to generate content for blogs, social media, and marketing campaigns.</li>
            <li className='font-Raleway text-veryDarkBlue py-2'>Analytics: Analyze viewer preferences and trends based on API data to inform business strategies.</li>
          </ul>
          <Link to="/rickandmorty">
            <button className="bg-veryDarkBlue hover:bg-desaturatedBlue text-sm text-white px-4 py-2 rounded-r-2xl rounded-l-none">
              View Rick and Morty
            </button>
          </Link>
        </div>
        <div className=''>
          <img src='/assets/Businesses.jpg' className='w-500' alt='Rick and Morty business illustration' width={1000} />
        </div>
      </div>
    </div>
  );
};

export default RickMortyUse;
