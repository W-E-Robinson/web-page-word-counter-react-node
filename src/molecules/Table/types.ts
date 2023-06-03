export interface TableProps {
    headers: string[];
    rows: Array<Record<string, number | string | null | undefined>>;
}
