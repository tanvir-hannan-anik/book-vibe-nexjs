import { IBook } from '@/types/book-type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardProps {
    book: IBook
}

const BookCard = ({ book }: IBookCardProps) => {
    return (
        <div
            key={book.bookId}
            className="bg-white rounded-2xl shadow-md p-5"
        >
            {/* Image */}
            <div className="bg-gray-100 rounded-xl p-5 flex justify-center">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={800}
                    height={600}
                    className="h-64 w-full object-contain"
                />
            </div>

            {/* Tags */}
            <div className="flex gap-2 mt-4">
                {book.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Book Name */}
            <h2 className="text-xl font-bold mt-3">
                {book.bookName}
            </h2>

            {/* Author */}
            <p className="text-gray-500 mt-1">
                By {book.author}
            </p>

            {/* Rating & Pages */}
            <div className="flex justify-between items-center mt-4">
                <span className="font-semibold">
                    ⭐ {book.rating}
                </span>

                <span className="text-gray-500">
                    {book.totalPages} pages
                </span>
            </div>

            {/* Category */}
            <p className="text-sm text-gray-500 mt-2">
                Category: {book.category}
            </p>

            {/* Button */}
            <Link href={`/books/${book.bookId}`}>
                <button className="btn btn-success w-full mt-4">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default BookCard;