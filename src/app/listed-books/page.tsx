"use client";

import BookWatchListCard from "@/components/shared/BookWatchListCard";
import { BookContext } from "@/context/BooksContext";
import { IBook } from "@/types/book-type";
import React, { useContext } from "react";

const ListedBookDetails = () => {
    const context = useContext(BookContext);

    if (!context) {
        throw new Error(
            "ListedBookDetails must be used inside BooksProvider"
        );
    }

    const { readBooks, wishlist } = context;

    return (
        <section className="container mx-auto px-4 py-8">

            {/* ================= HEADER ================= */}
            <div className="bg-gray-100 rounded-xl py-4 text-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">
                    Books
                </h2>
            </div>

            {/* ================= SORT BUTTON ================= */}
            <div className="flex justify-center mb-7">
                <select
                    className="select select-success select-sm w-32"
                    defaultValue=""
                >
                    <option value="" disabled>
                        Sort By
                    </option>

                    <option value="rating">
                        Rating
                    </option>

                    <option value="pages">
                        Number of pages
                    </option>

                    <option value="year">
                        Publisher year
                    </option>
                </select>
            </div>

            {/* ================= TABS ================= */}
            <div className="tabs tabs-lift">

                {/* ================= READ BOOKS TAB ================= */}
                <input
                    type="radio"
                    name="book_tabs"
                    className="tab"
                    aria-label={`Read Books (${readBooks.length})`}
                    defaultChecked
                />

                <div className="tab-content bg-white border-base-300 p-0 pt-4">

                    {readBooks.length > 0 ? (

                        <div className="space-y-3">

                            {readBooks.map((book: IBook) => (
                                <BookWatchListCard
                                    key={book.bookId}
                                    book={book}
                                />
                            ))}

                        </div>

                    ) : (

                        <div className="py-10 text-center text-gray-500">
                            No Read Book Found
                        </div>

                    )}

                </div>

                {/* ================= WISHLIST TAB ================= */}
                <input
                    type="radio"
                    name="book_tabs"
                    className="tab"
                    aria-label={`Wishlist Books (${wishlist.length})`}
                />

                <div className="tab-content bg-white border-base-300 p-0 pt-4">

                    {wishlist.length > 0 ? (

                        <div className="space-y-3">

                            {wishlist.map((book: IBook) => (
                                <BookWatchListCard
                                    key={book.bookId}
                                    book={book}
                                />
                            ))}

                        </div>

                    ) : (

                        <div className="py-10 text-center text-gray-500">
                            No Wishlist Found
                        </div>

                    )}

                </div>

            </div>

        </section>
    );
};

export default ListedBookDetails;