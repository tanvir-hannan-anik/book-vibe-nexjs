"use client";

import React, {
    createContext,
    ReactNode,
    SetStateAction,
    useState,
} from "react";

import { IBook } from "@/types/book-type";

/* ================= CONTEXT TYPE ================= */

interface BookContextType {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<
        SetStateAction<IBook[]>
    >;

    wishlist: IBook[];
    setWishlist: React.Dispatch<
        SetStateAction<IBook[]>
    >;
}

/* ================= CONTEXT ================= */

export const BookContext =
    createContext<BookContextType | null>(null);

/* ================= PROVIDER PROPS ================= */

interface BooksProviderProps {
    children: ReactNode;
}

/* ================= PROVIDER ================= */

const BooksProvider = ({
    children,
}: BooksProviderProps) => {

    const [readBooks, setReadBooks] =
        useState<IBook[]>([]);

    const [wishlist, setWishlist] =
        useState<IBook[]>([]);

    const shareData: BookContextType = {
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