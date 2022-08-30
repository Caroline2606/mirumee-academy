import React from "react";
// import sortBy from "just-sort-by";

import styles from "./Table.module.css";
import arrowIcon from "./arrow.svg";

interface ColumnProps {
    justifyContent?: "flex-start" | "flex-end" | "center";
    content: string | number;
    width?: number;
}

interface RowProps {
    columns: ColumnProps[];
}

interface TableProps {
    columns: ColumnProps[];
    rows: RowProps[];
}

const Cell: React.FC<ColumnProps> = ({ content, justifyContent, width }) => (
    <div
        className={styles.cell}
        style={{
            justifyContent: justifyContent || "flex-end",
            width: `${width}%` || "auto",
        }}
    >
        {content || "unknow"}
    </div>
);

const Row: React.FC<RowProps> = ({ columns }) => (
    <div className={styles.row}>
        {columns.map((row) => (
            <Cell {...row} key={row.content} />
        ))}
    </div>
);

export const Table: React.FC<TableProps> = ({ columns, rows }) => {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                {columns.map((column) => (
                    <>
                        <Cell {...column} key={column.content} />
                    </>
                ))}
            </div>
            <div className={styles.rowsContainer}>
                {rows.map(({ columns }) => (
                    <Row columns={columns} />
                ))}
            </div>
        </div>
    );
};