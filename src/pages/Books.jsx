//grid books
import SearchBook from "../components/bookgrid/Search";


export default function Books() {
  return (
    <div>
        {/* search bar */}

        <div>
            <SearchBook />
        </div>
        <div><h1 className="font-bold text-2xl">Explore Books</h1></div>
        <div className = "grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4">navigation</div>

            <div className="p-4">main section for books</div>
        </div>
        

    </div>);
}
