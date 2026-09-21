"use client";

import { BookContext } from "@/context/BooksContext";
import { IBook } from "@/types/book-type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

interface ReadButtonProps {
    book: IBook;
}

const ReadButton = ({ book }: ReadButtonProps) => {

    const context = useContext(BookContext);

    if (!context) {
        throw new Error(
            "ReadButton must be used inside BooksProvider"
        );
    }

    const { readBooks, setReadBooks } = context;

    const handleReadBook = (): void => {

        console.log(
            "Read Button triggered",
            book
        );

        setReadBooks([
            ...readBooks,
            book,
        ]);

        toast.success(
            `You have read "${book.bookName}"`
        );
    };

    return (
        <button
            className="border border-gray-300 px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-100 transition"
            onClick={handleReadBook}
        >
            Read
        </button>
    );
};

export default ReadButton;