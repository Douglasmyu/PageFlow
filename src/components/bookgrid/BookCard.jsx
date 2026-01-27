export default function BookCard({ book }) {
  if (!book) return null;

  const { title, author, isbn } = book;

  return (
    <div className="min-w-40 rounded-lg bg-white p-4 shadow-sm">
      <div className="mb-3 h-40 rounded bg-gray-200 flex items-center justify-center text-xs text-gray-500">
        ISBN {isbn || "N/A"}
      </div>
      <p className="text-sm font-medium text-black line-clamp-2">
        {title}
      </p>
      <p className="text-xs text-gray-600">
        {author}
      </p>
    </div>
  );
}
