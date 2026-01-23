import BookCard from "./BookCard";
import { useRef } from "react";

export default function BookRow({title, books}){
    const rowRef = useRef(null);

    const scrollByAmount = 320;

    const scrollLeft = () => {
        rowRef.current?.scrollBy({
        left: -scrollByAmount,
        behavior: "smooth",
        });
    };

    const scrollRight = () => {
        rowRef.current?.scrollBy({
        left: scrollByAmount,
        behavior: "smooth",
        });
    };
    return(
        <section className="mb-10">
            <h2 className="mb-3 text-lg font-semibold text-gray-900">{title}</h2>
            <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow"
          aria-label="Scroll left"
        >
          ‹
        </button>

        {/* Scroll Container */}
        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-10"
        >
          {books.map((book) => (
            <BookCard key={book.isbn} book={book} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow"
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
        </section>
    );
}