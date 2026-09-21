"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { IBook } from "@/types/book-type";

interface BookWatchListCardProps {
    book: IBook;
}

const BookWatchListCard = ({ book }: BookWatchListCardProps) => {
    return (
        <div className="w-full border border-gray-200 rounded-xl p-4 bg-white">

            <div className="flex gap-4">

                {/* ================= IMAGE ================= */}
                <div className="w-[156px] h-[156px] shrink-0 bg-gray-100 rounded-xl flex items-center justify-center">

                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={120}
                        height={140}
                        className="max-h-[135px] w-auto object-contain"
                    />

                </div>


                {/* ================= CONTENT ================= */}
                <div className="flex-1 min-w-0">

                    {/* Book Name */}
                    <h2 className="text-xl font-bold text-gray-900">
                        {book.bookName}
                    </h2>


                    {/* Author */}
                    <p className="text-sm text-gray-700 mt-2">
                        By : {book.author}
                    </p>


                    {/* Tags + Year */}
                    <div className="flex items-center gap-3 mt-3 flex-wrap">

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

                        <span className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="text-base">◉</span>
                            Year of Publishing: {book.yearOfPublishing}
                        </span>

                    </div>


                    {/* Publisher + Pages */}
                    <div className="flex items-center gap-5 mt-4 text-sm text-gray-500">

                        <span className="flex items-center gap-2">
                            <span className="text-base">♧</span>
                            Publisher: {book.publisher}
                        </span>

                        <span className="flex items-center gap-2">
                            <span className="text-base">▤</span>
                            Page {book.totalPages}
                        </span>

                    </div>


                    {/* Divider */}
                    <div className="border-t border-gray-200 mt-3"></div>


                    {/* Bottom Buttons */}
                    <div className="flex items-center gap-2 mt-3">

                        {/* Category */}
                        <span className="bg-blue-100 text-blue-500 px-4 py-2 rounded-full text-xs">
                            Category: {book.category}
                        </span>


                        {/* Rating */}
                        <span className="bg-orange-50 text-orange-400 px-4 py-2 rounded-full text-xs">
                            Rating: {book.rating}
                        </span>


                        {/* View Details */}
                        <Link
                            href={`/books/${book.bookId}`}
                            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
                        >
                            View Details
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default BookWatchListCard;