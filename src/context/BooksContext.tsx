"use client";

import React, { createContext, ReactNode, SetStateAction, useState } from "react";
import { IBook } from "@/types/book-type";

interface BookContextType {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<SetStateAction<IBook[]>>;
    wishlist: IBook[];
    setWishlist: React.Dispatch<SetStateAction<IBook[]>>;
}

export const BookContext = createContext<BookContextType | null>(null);

const BooksProvider = ({ children }: { children: ReactNode }) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([]);
    const [wishlist, setWishlist] = useState<IBook[]>([]);

    const shareData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist,
    };

    return (
        <BookContext.Provider value={shareData}>
            {children}
        </BookContext.Provider>
    );
};

export default BooksProvider;