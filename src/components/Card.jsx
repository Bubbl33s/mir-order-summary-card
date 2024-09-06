export default function Card() {
  return (
    <>
      <div className="rounded-3xl mx-auto w-11/12 max-w-80 md:max-w-md bg-white text-center text-gray-500 font-medium text-sm md:text-base">
        <header className="rounded-t-3xl overflow-hidden">
          <img
            src="/illustration-hero.svg"
            alt="Listening to music ilustration"
            className="w-full"
          />
        </header>
        <div className="px-5 py-7 md:px-8">
          <section className="mb-6">
            <h1 className="font-black text-blue-950 text-xl md:text-2xl mb-3">
              Order Summary
            </h1>
            <p className="w-10/12 mx-auto mb-5 md:w-full">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
            <div className="bg-indigo-100/30 rounded-xl flex items-center justify-between mx-auto px-5 py-4">
              <div className="flex items-center gap-3">
                <img src="/icon-music.svg" alt="Music icon" />
                <div>
                  <h2 className="font-black text-blue-950 ">Annual Plan</h2>
                  <p>$59.99/year</p>
                </div>
              </div>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                className="font-black text-[13px] md:text-sm text-violet-700 underline hover:no-underline"
              >
                Change
              </a>
            </div>
          </section>
          <footer className="font-black">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              className="bg-blue-700 block rounded-xl text-white py-3 mt-5 shadow-xl shadow-indigo-300/70 hover:bg-indigo-500"
            >
              Proceed to Payment
            </a>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              className="block rounded-xl mt-5 hover:text-indigo-950"
            >
              Cancel Order
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
