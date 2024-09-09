import { type ChangeEvent, memo, useState } from 'react';

import { Table as MUITable } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export type TableRowObjShape = Record<string, string | number>;
interface TableProps {
    headers: string[];
    rows: TableRowObjShape[];
    caption: string;
}

const Table = memo(({
    headers,
    rows,
    caption,
}: TableProps) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <MUITable>
                <caption>{caption}</caption>
                <TableHead>
                    <TableRow>
                        {headers.map((header, index) => (
                            <TableCell key={`header-${index}`}>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, rowIndex) => (
                            <TableRow key={`row-${rowIndex}`}>
                                {Object.values(row).map((cell, cellIndex) => (
                                    <TableCell key={`cell-${rowIndex}-${cellIndex}`}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                </TableBody>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </MUITable>
        </TableContainer>
    );
});

export default Table;
