export default function BookCard({ book }) {
  const { title, author, isbn } = book;

  return (
    <div
      className="min-w-40 rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition"
      data-isbn={isbn}
    >
      {/* Placeholder cover */}
      <div className="mb-3 h-40 rounded bg-gray-200 flex items-center justify-center text-xs text-gray-500">
        ISBN {isbn}
      </div>

      <p className="text-sm font-medium text-gray-900 line-clamp-2">
        {title}
      </p>

      <p className="mt-1 text-xs text-gray-500 line-clamp-1">
        {author}
      </p>
    </div>
  );
}