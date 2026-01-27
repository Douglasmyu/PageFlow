import { useRef } from "react";
import BookCard from "./BookCard";

export default function BookRow({ title, books }) {
  const rowRef = useRef(null);
  const SCROLL_AMOUNT = 320;

  const scrollLeft = () => {
    rowRef.current?.scrollBy({
      left: -SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    rowRef.current?.scrollBy({
      left: SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <section className="mb-10">
      <h2 className="mb-3 text-lg font-semibold text-gray-900">
        {title}
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full
           bg-white hover:bg-slate-500 transition-colors p-2 shadow"
        >
          ‹
        </button>

        {/* Scroll Container */}
        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-auto px-10 scroll-smooth min-h-65"
        >
          {books
            .filter(Boolean)
            .map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full
           bg-white hover:bg-slate-500 transition-colors p-2 shadow"
        >
          ›
        </button>
      </div>
    </section>
  );
}
