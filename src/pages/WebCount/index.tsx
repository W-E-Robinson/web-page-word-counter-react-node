import {
    Suspense, useState, useMemo, useCallback, useEffect, lazy,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AccordionContent } from '../../atomicComponents/organisms/Accordion';
import { AppState } from '../../modules/Redux/reducers/rootReducer';
import Form from '../../atomicComponents/molecules/Form';
import formMapping from './mappings';
import Header from './components/Header';
import {
    setWordCountStateProperty, type WebPageInfo,
} from '../../modules/Redux/actions/wordCount/actions';

import styles from './styles.module.sass';

const Alert = lazy(() => import('../../atomicComponents/atoms/Alert'));
const Accordion = lazy(() => import('../../atomicComponents/organisms/Accordion'));
const WordTable = lazy(() => import('./components/WordTable'));

type FormatAccordionContent = (
    wordCountsInfo: WebPageInfo[],
) => AccordionContent[];

const WordCount = () => {
    const reduxDispatch = useDispatch();

    const [url, setUrl] = useState<string>('');
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const { error, wordCountsInfo } = useSelector((state: AppState) => state.wordCounts);

    useEffect(() => {
        if (typeof error === 'string') {
            setShowAlert(true);
        }
    }, [error]);

    const searchedUrls = useMemo(
        () => wordCountsInfo.map((wordCountInfo) => wordCountInfo.url),
        [wordCountsInfo],
    );
    const formFields = useMemo(
        () => formMapping(url, setUrl, reduxDispatch, searchedUrls),
        [url],
    );

    // eslint-disable-next-line max-len
    const formatAccordionContent: FormatAccordionContent = useCallback((countInfo: WebPageInfo[]) => countInfo
        .map((info) => ({
            accordionSummary: {
                id: info.url,
                title: `Word Count: ${info.wordCount}, URL: ${info.url}`,
                ariaControls: `${info.url}-details`,
            },
            contentComponent:
                <Suspense fallback={<></>}>
                    <WordTable
                        wordsList={info.wordsList}
                        url={info.url}
                    />
                </Suspense>,
        })), []);

    return (
        <div className={styles.container} role="main">
            <Header />
            <Form fields={formFields} id="url-input-form" />
            {showAlert
                && <Suspense fallback={<></>}>
                    <div className={styles.alert} aria-live="polite">
                        <Alert
                            id="alert"
                            severity={'error'}
                            message={error ? error as string : 'Remove alert'}
                            onClose={() => {
                                setShowAlert(false);
                                reduxDispatch(setWordCountStateProperty({ error: null }));
                            }}
                        />
                    </div>
                </Suspense>}
            {wordCountsInfo.length > 0
                && <Suspense fallback={<></>}>
                    <div className={styles.accordion} role="region" aria-label="Word Count Results">
                        <Accordion accordionContent={formatAccordionContent(wordCountsInfo)} />
                    </div>
                </Suspense>}
        </div>
    );
};

export default WordCount;
