import React from "react";

const Introduction = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row-reverse mt-8 px-4 md:px-32 items-center">
            <div className="">
                <h1 className="font-bold font-Raleway text-veryDarkBlue text-2xl mb-4">
                    Welcome to the API Documentation Hub
                </h1>
                <p className="py-2 font-Raleway">
                    APIs (Application Programming Interfaces) are essential tools in
                    modern web development. They allow different software systems to
                    communicate with each other, enabling the integration of diverse
                    functionalities and data sources into a single application. This makes
                    development more efficient and scalable.
                </p>
                <p className="py-2 font-Raleway">
                    In this documentation, we will explore two powerful APIs:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="font-Raleway text-veryDarkBlue py-2">
                        The Unsplash API, which provides access to a vast library of
                        high-quality photos.
                    </li>
                    <li className="font-Raleway text-veryDarkBlue py-2">
                        The Rick & Morty API, which offers detailed information about
                        characters, episodes, and locations from the popular animated
                        series.
                    </li>
                    <li className="font-Raleway text-veryDarkBlue py-2">
                        Interact with both APIs seamlessly. Users can load, search, and
                        expand their views with more photos and characters.
                    </li>
                </ul>
            </div>
            <div className="mr-4">
                <img
                    src="src/assets/documentation.jpg"
                    className="w-500"
                    alt="Documentation illustration"
                />
            </div>
        </div>
    );
};

export default Introduction;
