import {
    Suspense, useState, useMemo, useCallback, useEffect, lazy,
} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../../modules/Redux/reducers/rootReducer';
import Form from '../../atomicComponents/molecules/Form';
import formMapping from './functions';
import Header from './components/Header';
import { setWordCountProperty } from '../../modules/Redux/actions/wordCount/actions';

import styles from './styles.module.sass';
import { FormatAccordionContent } from './types';
import { WebPageInfo } from '../../modules/Redux/actions/wordCount/types';

const Alert = lazy(() => import('../../atomicComponents/atoms/Alert'));
const Accordion = lazy(() => import('../../atomicComponents/organisms/Accordion'));
const WordTable = lazy(() => import('./components/WordTable'));

const WordCount = () => {
    const reduxDispatch = useDispatch();

    const [url, setUrl] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const { error, wordCountsInfo } = useSelector((state: AppState) => state.wordCounts);

    useEffect(() => {
        if (error === null || typeof error === 'string') { setShowAlert(true); }
        // NOTE: what now?
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
                            destructuredWordCount={info.wordsList}
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
                            severity={error === null ? 'success' : 'error'}
                            message={error === null ? 'Request Successful!' : error as string}
                            onClose={() => {
                                setShowAlert(false);
                                reduxDispatch(setWordCountProperty({ error: undefined }));
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
