import { memo } from 'react';

import Table, { type TableRowObjShape } from '../../../atomicComponents/molecules/Table';
import { type Word } from '../../../modules/Redux/actions/wordCount/actions';

interface WordTableProps {
    wordsList: Word[];
    url: string;
}
const WordTable = memo(({
    wordsList,
    url,
}: WordTableProps) => (
    <Table
        headers={['Word', 'Count']}
        rows={(wordsList as unknown as TableRowObjShape[])}
        caption={`A table to show the frequency of words for the given URL: ${url}`}
    />
));

export default WordTable;
