"use client";

import { BookContext } from "@/context/BooksContext";
import { IBook } from "@/types/book-type";
import React, { useContext } from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    LabelList,
    Label,
    Tooltip,
} from "recharts";

/* ================= COLORS ================= */

const colors: string[] = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
    "black",
];

/* ================= GET PATH TYPE ================= */

interface GetPathProps {
    x: number;
    y: number;
    width: number;
    height: number;
}

/* ================= GET PATH ================= */

const getPath = ({
    x,
    y,
    width,
    height,
}: GetPathProps): string => {
    return `M${x},${y + height} 
        C${x + width / 3},${y + height} 
        ${x + width / 2},${y + height / 3} 
        ${x + width / 2},${y} 
        C${x + width / 2},${y + height / 3} 
        ${x + (2 * width) / 3},${y + height} 
        ${x + width},${y + height} 
        Z`;
};

/* ================= TRIANGLE BAR TYPE ================= */

interface TriangleBarProps {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    index?: number;
    isActive?: boolean;
}

/* ================= TRIANGLE BAR ================= */

const TriangleBar = ({
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    index = 0,
    isActive = false,
}: TriangleBarProps) => {

    const color = colors[index % colors.length];

    return (
        <path
            strokeWidth={isActive ? 5 : 0}
            d={getPath({
                x: Number(x),
                y: Number(y),
                width: Number(width),
                height: Number(height),
            })}
            stroke={color}
            fill={color}
            style={{
                transition: "stroke-width 0.3s ease-out",
            }}
        />
    );
};

/* ================= LABEL TYPE ================= */

type CustomColorLabelProps = React.ComponentProps<typeof Label> & {
    index?: number;
};

/* ================= CUSTOM LABEL ================= */

const CustomColorLabel = ({
    index = 0,
    ...props
}: CustomColorLabelProps) => {

    const fill = colors[index % colors.length];

    return (
        <Label
            {...props}
            fill={fill}
        />
    );
};

/* ================= CHART DATA TYPE ================= */

interface ChartData {
    name: string;
    uv: number;
    pv: number;
    amt: number;
}

/* ================= COMPONENT ================= */

const ReadBookChart = () => {

    const context = useContext(BookContext);

    if (!context) {
        throw new Error(
            "ReadBookChart must be used inside BooksProvider"
        );
    }

    const { readBooks } = context;

    /* ================= DATA ================= */

    const data: ChartData[] = readBooks.map(
        (book: IBook, index: number) => {
            return {
                name: book.bookName,
                uv: book.totalPages,
                pv: index + 1,
                amt: index + 1,
            };
        }
    );

    return (
        <div className="flex justify-center items-center my-50">

            <BarChart
                style={{
                    width: "100%",
                    maxWidth: "700px",
                    maxHeight: "70vh",
                    aspectRatio: 1.618,
                }}
                responsive
                data={data}
                margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >

                <CartesianGrid />

                <Tooltip
                    cursor={{
                        fillOpacity: 0.5,
                    }}
                />

                <XAxis dataKey="name" />

                <YAxis width="auto" />

                <Bar
                    dataKey="uv"
                    shape={TriangleBar}
                    activeBar
                >

                    <LabelList
                        content={CustomColorLabel}
                        position="top"
                    />

                </Bar>

            </BarChart>

        </div>
    );
};

export default ReadBookChart;