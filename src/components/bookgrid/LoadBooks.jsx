import Papa from "papaparse";
//loading books from csv
export default function LoadBooks(csvText){
    const { data } = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  return data.map((row, index) => ({
    id: index,
    title: row.title,
    author: row.author,
    isbn: row.isbn,
  }));
}