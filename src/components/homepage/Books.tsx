import React from 'react';
import BookCard from '../shared/BookCard';
import { IBook } from '@/types/book-type';
import Link from 'next/link';

const getBooks = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
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
                {books.slice(0,3).map((book:IBook, ind:number) => (
                    <BookCard key={ind} book={book} />
                ))}
            </div>
            <div className='flex justify-center items-center'>
            <Link href='/books' className='btn btn-success rounded-3xl m-5'>See More</Link>
            </div>
        </section>
    );
};

export default Books;