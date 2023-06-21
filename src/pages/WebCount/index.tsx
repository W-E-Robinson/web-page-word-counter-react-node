import React, { Suspense, useState, useMemo, useCallback, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../../modules/Redux/reducers/rootReducer";
import { Form } from "../../molecules/Form";
import { formMapping } from "./functions";
import { Header } from "./components/Header";
import { WordTable } from "./components/WordTable";
import { setWordCountProperty } from "../../modules/Redux/actions/wordCount/actions";

import styles from "./styles.module.sass";
import { FormatAccordionContent } from "./types";
import { WebPageInfo } from "../../modules/Redux/actions/wordCount/types";

const Alert = React.lazy(() => import("../../atoms/Alert").then(module => ({ default: module.Alert })));
const Accordion = React.lazy(() => import("../../organisms/Accordion").then(module => ({ default: module.Accordion })));

export const WordCount = () => {
    const reduxDispatch = useDispatch();

    const [url, setUrl] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const { error, wordCountsInfo } = useSelector((state: AppState) => state.wordCounts);

    useEffect(() => {
        if (error === null || typeof error === "string") { setShowAlert(true); }
    }, [error]);

    const searchedUrls = useMemo(() => wordCountsInfo.map(wordCountInfo => wordCountInfo.webPageUrl), [wordCountsInfo]);
    const formFields = useMemo(() => formMapping(url, setUrl, reduxDispatch, searchedUrls), [url]);

    const formatAccordionContent: FormatAccordionContent = useCallback((wordCountsInfo: WebPageInfo[]) => {
        return wordCountsInfo.map((info) => {
            return {
                accordionSummary: {
                    id: info.webPageUrl,
                    title: `Word Count: ${info.totalWordCount}, URL: ${info.webPageUrl}`,
                    ariaControls: `${info.webPageUrl}-details`,
                },
                contentComponent: <WordTable
                    destructuredWordCount={info.destructuredWordCount}
                    url={info.webPageUrl}
                />,
            };
        });
    }, []);

    return (
        <div className={styles["container"]} role="main">
            <Header />
            <Form fields={formFields} id="url-input-form" />
            {showAlert &&
                <Suspense fallback={<></>}>
                    <div className={styles["alert"]} aria-live="polite">
                        <Alert
                            id="alert"
                            severity={error === null ? "success" : "error"}
                            message={error === null ? "Request Successful!" : error as string}
                            onClose={() => {
                                setShowAlert(false);
                                reduxDispatch(setWordCountProperty({ error: undefined }));
                            }}
                        />
                    </div>
                </Suspense>}
            {wordCountsInfo.length > 0 &&
                <Suspense fallback={<></>}>
                    <div className={styles["accordion"]} role="region" aria-label="Word Count Results">
                        <Accordion accordionContent={formatAccordionContent(wordCountsInfo)} />
                    </div>
                </Suspense>}
        </div>
    );
};
