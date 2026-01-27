import Papa from "papaparse";

export function loadBooks(csvText) {
  const result = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (h) => h.trim(),
  });
  console.log("PapaParse result:", result);

  return result.data
    .filter(
      (row) =>
        row.bookID &&
        row.title &&
        row.authors &&
        row.isbn
    )
    .map((row) => ({
      id: row.bookID.trim(),
      title: row.title.trim(),
      author: row.authors.trim(),
      isbn: row.isbn.trim(),
      rating: row.average_rating ? Number(row.average_rating) : null,
      pages: row.num_pages ? Number(row.num_pages) : null,
    }));
}
