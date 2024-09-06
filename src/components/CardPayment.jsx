import CardPricing from "./CardPricing";

export default function CardPayment() {
  return (
    <>
      <CardPricing />
      <section className="font-black">
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
      </section>
    </>
  );
}
