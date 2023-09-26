const Stays = () => {
  return (
    <section className="px-4 py-8 text-slate-800">
      <div className="mx-auto max-w-[62rem]">
        <h1 className="mb-1 text-2xl font-bold">Find your next stay</h1>
        <p className="text-sm">
          Search low prices on hotels, homes and much more...
        </p>
        <form className="mt-6 grid grid-cols-2 gap-4">
          <div className="col-start-1 col-end-3">
            <label htmlFor="destination" className="mb-2 block font-bold">
              Destination
            </label>
            <input
              type="search"
              name="destination"
              id="destination"
              placeholder="Enter a destination..."
              className="w-full rounded-md border p-4 font-bold"
            />
          </div>
          <div className="col-start-1 col-end-2">
            <label htmlFor="checkInDate" className="mb-2 block font-bold">
              Check-in date
            </label>
            <input
              type="date"
              name="checkInDate"
              id="checkInDate"
              className="w-full rounded-md border p-4 font-bold"
            />
          </div>
          <div className="col-start-2 col-end-3">
            <label htmlFor="checkOutDate" className="mb-2 block font-bold">
              Check-out date
            </label>
            <input
              type="date"
              name="checkOutDate"
              id="checkOutDate"
              className="w-full rounded-md border p-4 font-bold"
            />
          </div>
          <div className="col-start-1 col-end-3 flex flex-row-reverse items-center justify-end gap-2">
            <label
              htmlFor="isTravellingForWork"
              className="cursor-pointer text-base"
            >
              I'm travelling for work
            </label>
            <input
              type="checkbox"
              name="isTravellingForWork"
              id="isTravellingForWork"
              className="h-5 w-5 cursor-pointer rounded-md border p-4 font-bold"
            />
          </div>
          <button
            type="submit"
            className="col-start-1 col-end-3 rounded-md bg-blue-600 py-4 text-lg font-bold text-white"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Stays;
