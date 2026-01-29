import booksCSV from "../data/books.csv?raw";
import { loadBooks} from "../data/LoadBooks";
import BookRow from "../components/bookgrid/BookRow";
import SearchBook from "../components/bookgrid/Search";
const books = loadBooks(booksCSV);

export default function Books() {

    const rows = [
    {
    title: "All Books",
    books: books.slice(0, 4),
    },
    ];


    return (
    <div className="min-h-screen px-6 pt-24 bg-[#F7F9FB]">
        <SearchBook />
        {rows.map((row) => (
            <BookRow
            key={row.title}
            title={row.title}
            books={row.books}
            />
        ))}
        
    </div>
    );
}
