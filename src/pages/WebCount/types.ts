import { Dispatch } from 'react';
import { FetchWordCountRequest, WebPageInfo, Word } from '../../modules/Redux/actions/wordCount/types';
import { ButtonComponentProps, TextFieldComponentProps } from '../../molecules/Form/types';
import { AccordionContent } from '../../organisms/Accordion/types';

export type FormMapping = (
    url: string,
    setUrl: React.Dispatch<React.SetStateAction<string>>,
    reduxDispatch: Dispatch<FetchWordCountRequest>,
    searchedUrls: string[],
) => (ButtonComponentProps | TextFieldComponentProps)[];

export type FormatAccordionContent = (
    wordCountsInfo: WebPageInfo[],
) => AccordionContent[];

export interface WordTableProps {
    destructuredWordCount: Word[];
    url: string;
}
