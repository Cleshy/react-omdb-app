import React from "react";

export const MovieCard = () => {
  return (
    <div className="flex flex-col bg-indigo-900 text-indigo-100 p-3 rounded-xl h-150">
      <img
        src="https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg"
        alt=""
        className="rounded-xl mb-4"
      />
      <div>
        <h3 className="font-semibold">Guardians of the Galaxy Vol. 2</h3>
        <div className="flex gap-6 my-2 text-sm text-gray-400">
          <span>2017</span>
          <span>Movie</span>
          <span>136 min</span>
        </div>
        <p className="font-light line-clamp-3">
          The Guardians struggle to keep together as a team while dealing with
          their personal family issues, notably Star-Lord's encounter with his
          father, the ambitious celestial being Ego.
        </p>
      </div>
      <a href="#" className="mt-auto">
        Read more &rarr;
      </a>
    </div>
  );
};
