export default function CardPricing() {
  return (
    <>
      <section className="mb-6 bg-indigo-100/30 rounded-xl flex items-center justify-between mx-auto p-4 text-[13px] md:text-base">
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src="/icon-music.svg"
            alt="Music icon"
            className="h-10 md:h-auto"
          />
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
      </section>
    </>
  );
}
