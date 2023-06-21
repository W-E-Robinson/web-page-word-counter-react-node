import React, { memo } from "react";

import { Table } from "../../../molecules/Table";

import { WordTableProps } from "../types";

export const WordTable = memo(({
    destructuredWordCount,
    url,
}: WordTableProps) => {
    return (
        <Table
            headers={["Word", "Count"]}
            rows={destructuredWordCount}
            caption={`A table to show the frequency of words for the given URL: ${url}`}
        />
    );
});
