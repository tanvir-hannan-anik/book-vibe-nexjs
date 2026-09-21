import React from 'react';
import { IBook } from '@/types/book-type';
import BookCard from '@/components/shared/BookCard';

const getBooks = async () => {
    const res = await fetch("http://localhost:3000/booksData.json");
    const data = await res.json();
    return data;
};

const Books = async () => {
    const books = await getBooks();

    return (
        <section className="container mx-auto my-17.5">
            <h1 className="font-extrabold text-3xl mb-6 text-center">
                Books
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book:IBook, ind:number) => (
                    <BookCard key={ind} book={book} />
                ))}
            </div>
        </section>
    );
};

export default Books;