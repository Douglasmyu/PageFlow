import { useState } from "react";
import BookCard from "./BookCard";

const PAGE_SIZE = 6;

export default function BookRow({ title, books }) {
  const [page, setPage] = useState(0);

  const maxPage = Math.ceil(books.length / PAGE_SIZE) - 1;

  const visibleBooks = books.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE
  );

  return (
    <section className="mb-10">
      <h2 className="mb-3 text-lg font-semibold text-gray-900">
        {title}
      </h2>

      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="mr-4 rounded-full  bg-white p-2 shadow disabled:opacity-30"
        >
          ‹
        </button>

        {/* Books */}
        <div className="flex gap-4">
          {visibleBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => setPage((p) => Math.min(p + 1, maxPage))}
          disabled={page === maxPage}
          className="ml-4 rounded-full bg-white p-2 shadow disabled:opacity-30"
        >
          ›
        </button>
      </div>
    </section>
  );
}
