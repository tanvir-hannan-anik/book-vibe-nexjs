import booksData from "../../public/booksData.json";
import { IBook } from "@/types/book-type";

export const getBooks = (): IBook[] => booksData as IBook[];
