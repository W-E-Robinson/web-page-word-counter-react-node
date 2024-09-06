import React, { memo } from 'react';

import Table from '../../../molecules/Table';

import { WordTableProps } from '../types';

const WordTable = memo(({
    destructuredWordCount,
    url,
}: WordTableProps) => (
    <Table
        headers={['Word', 'Count']}
        rows={destructuredWordCount}
        caption={`A table to show the frequency of words for the given URL: ${url}`}
    />
));

export default WordTable;
