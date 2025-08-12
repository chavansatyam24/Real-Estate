import React, { useState, useEffect } from 'react';
import { assets, projectsData } from '../assets/assets';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeCard ? 'hidden' : 'auto';
  }, [activeCard]);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative" id="Projects">
      {/* === Background Content === */}
      <div
        className={`container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full transition duration-300 ${
          activeCard ? 'blur-sm pointer-events-none' : ''
        }`}
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          Projects{' '}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Completed
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto ">
          Crafting Spaces, Building Legacies - Explore Our Portfolio
        </p>

        {/* Navigation Arrows */}
        <div className="flex justify-center mb-4">
          <button
            onClick={prevProject}
            className="p-3 bg-gray-200 rounded mr-2"
            aria-label="Previous Project"
          >
            <img src={assets.left_arrow} alt="Previous" />
          </button>
          <button
            onClick={nextProject}
            className="p-3 bg-gray-200 rounded mr-2"
            aria-label="Next Project"
          >
            <img src={assets.right_arrow} alt="Next" />
          </button>
        </div>

        {/* Projects List */}
        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
            }}
          >
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-full sm:w-1/4 cursor-pointer hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
                onClick={() => setActiveCard(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto mb-14"
                />
                <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                  <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {project.price} <span className='px-1'></span>
    • {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* === Modal === */}
      {activeCard && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative bg-white rounded-xl p-6 w-11/12 sm:w-2/3 lg:w-1/2 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close (X) Button */}
            <button
              className="absolute top-3 right-4 text-gray-500 text-3xl hover:text-black z-50"
              onClick={() => setActiveCard(null)}
              aria-label="Close Modal"
            >
              &times;
            </button>

            {/* Image */}
            <img
              src={activeCard.image}
              alt={activeCard.title}
              className="w-full max-h-[300px] object-cover rounded mb-4"
            />

            {/* Project Details */}
            <h2 className="text-2xl font-bold mb-2">{activeCard.title}</h2>
            <p className="text-gray-600 mb-2">
              {activeCard.price} – {activeCard.location}
            </p>
            <p className="text-gray-700 text-sm">
              {activeCard.description}
            </p>
            <a className="text-blue-600 hover:underline" href="#">Learn more about this..</a>

          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
