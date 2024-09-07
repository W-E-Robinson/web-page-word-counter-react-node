export type TableRowObjShape = Record<string, string | number | null>;

export interface TableProps {
    headers: string[];
    rows: TableRowObjShape[];
    caption: string;
}
