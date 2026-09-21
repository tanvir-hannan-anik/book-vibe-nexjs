"use client";

import { BookContext } from "@/context/BooksContext";
import { IBook } from "@/types/book-type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishlistButton = ({ book }: { book: IBook }) => {
    const context = useContext(BookContext);

    if (!context) {
        throw new Error("WishlistButton must be inside BooksProvider");
    }

    const { wishlist, setWishlist } = context;

    const handleAddToWishlist = () => {
        console.log("Wishlist Button triggered", book);

        setWishlist([...wishlist, book]);
        toast.success(`You have added "${book.bookName}" to your Wishlist`)
    };

    return (
        <button
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5 rounded-md text-sm font-medium transition"
            onClick={handleAddToWishlist}
        >
            Wishlist
        </button>
    );
};

export default WishlistButton;