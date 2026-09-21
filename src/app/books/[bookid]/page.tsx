import ReadButton from '@/components/bookDetails/ReadButton';
import WishlistButton from '@/components/bookDetails/WishlistButton';
import { IBook } from '@/types/book-type';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPage {
    params: Promise<{
        bookid: string;
    }>;
}

const getBooks = async () => {
    const res = await fetch("http://localhost:3000/booksData.json");
    const data = await res.json();
    return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPage) => {

    const { bookid } = await params;

    const bookData = await getBooks();

    const book = bookData.find(
        (book: IBook) => String(book.bookId) === String(bookid)
    );

    if (!book) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">
                    Book Not Found
                </h1>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-white py-10 px-4 md:px-8">

            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                    {/* IMAGE */}
                    <div className="bg-gray-100 rounded-xl h-112.5 md:h-137.5 flex items-center justify-center p-8">

                        <Image
                            src={book.image}
                            alt={book.bookName}
                            width={400}
                            height={500}
                            className="max-h-full max-w-full object-contain"
                        />

                    </div>


                    {/* BOOK DETAILS */}
                    <div>

                        {/* Book Name */}
                        <h1 className="text-3xl md:text-4xl font-bold font-serif text-gray-900">
                            {book.bookName}
                        </h1>

                        {/* Author */}
                        <p className="text-gray-600 mt-2">
                            By : {book.author}
                        </p>


                        {/* Category */}
                        <div className="border-t border-gray-200 mt-5 pt-4">
                            <p className="text-gray-700">
                                {book.category}
                            </p>
                        </div>


                        {/* Review */}
                        <div className="border-t border-gray-200 mt-4 pt-4">

                            <p className="text-sm leading-6 text-gray-500">

                                <span className="font-bold text-gray-800">
                                    Review :
                                </span>{" "}

                                {book.review}

                            </p>

                        </div>


                        {/* Tags */}
                        <div className="mt-5 flex items-center gap-3 flex-wrap">

                            <span className="font-bold text-sm">
                                Tag
                            </span>

                            {book.tags.map((tag: string, index: number) => (
                                <span
                                    key={index}
                                    className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs"
                                >
                                    #{tag}
                                </span>
                            ))}

                        </div>


                        {/* Information */}
                        <div className="border-t border-gray-200 mt-5 pt-4">

                            <div className="grid grid-cols-2 gap-y-4 text-sm">

                                <span className="text-gray-500">
                                    Number of Pages:
                                </span>

                                <span className="font-semibold">
                                    {book.totalPages}
                                </span>


                                <span className="text-gray-500">
                                    Publisher:
                                </span>

                                <span className="font-semibold">
                                    {book.publisher}
                                </span>


                                <span className="text-gray-500">
                                    Year of Publishing:
                                </span>

                                <span className="font-semibold">
                                    {book.yearOfPublishing}
                                </span>


                                <span className="text-gray-500">
                                    Rating:
                                </span>

                                <span className="font-semibold">
                                    {book.rating}
                                </span>

                            </div>

                        </div>


                        {/* Buttons */}
                        <div className="flex gap-3 mt-6">

                            <ReadButton book={book}></ReadButton>
                            <WishlistButton book={book}></WishlistButton>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default BookDetailsPage;