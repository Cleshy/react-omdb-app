export const Header = () => {
  return (
    <header className="bg-indigo-950 pt-8">
      <h1 className="text-amber-50 text-3xl font-bold text-center pb-8">
        Discover Movies{" "}
        <span className="text-indigo-400 font-extrabold">Instantly</span>.
      </h1>
      <form
        className="flex flex-col gap-6 justify-center items-center mx-auto"
        action=""
      >
        <input
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-indigo-200 text-blue-950 py-2 px-2 tracking-wider focus:outline-none rounded w-70 text-md"
          type="text"
          required
          placeholder="e.g. Avengers, Batman..."
        />
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-indigo-700 hover:bg-indigo-600 text-white py-1.5 px-8 rounded-full cursor-pointer font-semibold transition-all duration-200 ease-in-out"
          >
            Search
          </button>
          <button className="bg-indigo-300 text-indigo-950 rounded-full px-6 font-semibold cursor-pointer py-1.5 transition-all duration-200 ease-in-out">
            Favourites
          </button>
        </div>
      </form>
    </header>
  );
};
