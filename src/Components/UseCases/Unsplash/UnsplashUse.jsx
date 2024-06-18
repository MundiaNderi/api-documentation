import React from "react";
import { Link } from "react-router-dom";

const UnsplashUse = () => {
    return (
        <div className="items-center pt-10 my-8 px-4 md:px-32 ">
            {/*Unsplash for Developers */}
            <hr className="py-2" />
            <div className="flex flex-col-reverse md:flex-row">
                <div>
                    <h1 className="font-Raleway text-veryDarkBlue font-bold text-3xl">
                        Unsplash API Usage for Developers
                    </h1>
                    <p className=" font-Raleway text-veryDarkBlue py-2">
                        To enjoy the benefits of Unsplash API as a Developer, follow these
                        steps:
                    </p>
                    <ul className="list-disc ml-6 mb-4">
                        <li className=" font-Raleway text-veryDarkBlue py-2">
                            Create a developer account at Unsplash
                        </li>
                        <li className=" font-Raleway text-veryDarkBlue py-2">
                            Navigate to Your Apps and create a new application{" "}
                        </li>
                        <li className=" font-Raleway text-veryDarkBlue py-2">
                            {" "}
                            Within your application, you'll find an access and a secret key.
                            Both should remain confidential
                        </li>
                        <li className=" font-Raleway text-veryDarkBlue py-2">
                            Copy your access key and fire up Thunderclient on your VSCode or
                            Postman
                        </li>
                        <li className=" font-Raleway text-veryDarkBlue py-2">
                            Search the documentation
                            for a simple request to start with.
                        </li>
                        <li className=" font-Raleway text-veryDarkBlue py-2">
                            Interact with the API by sending your first request.
                        </li>
                        <li className=" font-Raleway text-veryDarkBlue py-2">
                            Consume the API in your projects
                        </li>
                    </ul>
                    <Link to="/unsplash">
                        <button className="bg-veryDarkBlue hover:bg-desaturatedBlue text-sm text-white px-4 py-2 rounded-r-2xl rounded-l-none">
                            View Unsplash Photos
                        </button>
                    </Link>
                </div>
                <div className="pb-8">
                    <img
                        src="/assets/Developers.jpg"
                        alt="Developers illustration"
                        width={400}
                    />
                </div>
            </div>

            {/*Unsplash for Businesses */}
            <div className="flex flex-col-reverse md:flex-row-reverse p-8">
                <div className="">
                    <h1 className="font-Raleway text-veryDarkBlue font-bold text-3xl">
                        Unsplash for Businesses
                    </h1>
                    <p className=" font-Raleway text-veryDarkBlue py-2">
                        Here are ways in which Unsplash can benefit your business:
                    </p>
                    <ul className="list-disc ml-6 mb-4">
                        <li className=" font-Raleway text-veryDarkBlue py-2">
                            Content Marketing: Entrepreneurs can leverage Unsplash APIs to
                            source high-quality images for content marketing strategies,
                            including blog posts, social media content, email newsletters, and
                            digital publications
                        </li>
                        <li className=" font-Raleway text-veryDarkBlue py-2">
                            E-commerce Platforms: Integrating Unsplash images can enhance
                            product pages, category pages, and promotional banners on
                            e-commerce websites
                        </li>
                        <li className=" font-Raleway text-veryDarkBlue py-2">
                            {" "}
                            Community Building: Unsplash APIs enable entrepreneurs to build
                            platforms centered around creative communities, encouraging users
                            to share and showcase their work using freely accessible images.
                        </li>
                        <li className=" font-Raleway text-veryDarkBlue py-2">
                            Licensing: Unsplash offers a straightforward licensing model that
                            allows developers and entrepreneurs to use images freely for
                            commercial and non-commercial purposes, eliminating concerns
                            related to copyright and attribution.
                        </li>
                    </ul>
                    <Link to="/unsplash">
                        <button className="bg-veryDarkBlue hover:bg-desaturatedBlue text-sm text-white px-4 py-2 rounded-r-2xl rounded-l-none">
                            View Unsplash Photos
                        </button>
                    </Link>
                </div>
                <div className="">
                    <img src="/assets/business.jpg" alt="business illustration" />
                </div>
            </div>
            <hr className="py-2" />
        </div>
    );
};

export default UnsplashUse;
