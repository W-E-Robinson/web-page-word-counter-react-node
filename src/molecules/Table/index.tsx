import React from "react";

import { Table as MUITable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { TableProps } from "./types";

export const Table = ({
    headers,
    rows,
}: TableProps) => {
    return (
        <TableContainer component={Paper}>
            <MUITable aria-label="table">
                <TableHead>
                    <TableRow>
                        {headers.map((header) => {
                            return <TableCell>{header}</TableCell>;
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={Object.keys(row)[0]}>
                            {Object.values(row).map((cell) => {
                                return <TableCell>{cell}</TableCell>;
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </MUITable>
        </TableContainer>
    );
};
