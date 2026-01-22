import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {books} from "../../datafiles/books";
export default function searchBook(){
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("q") || "";
    const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author}`
      .toLowerCase()
      .includes(query.toLowerCase())
    );
    return(
    <div className="w-full max-w-sm min-w-50">
         <input 
            className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-flow"
            type="text"
            value={query}
            onChange={(e) => {
            const value = e.target.value;
            setSearchParams(value ? { q: value } : {});
            }}
            placeholder="Search books by title, author, or ISBN"/>

        <div className="mt-4 space-y-2">
        {filteredBooks.map((book) => (
          <div key={book.id} className="bg-white p-4 rounded shadow-sm">
            <p className="font-medium">{book.title}</p>
            <p className="text-sm text-gray-500">{book.author}</p>
          </div>
        ))}
        </div>
    </div>
    );
}