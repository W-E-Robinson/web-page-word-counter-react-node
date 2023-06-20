import React, { Suspense, useState, useMemo, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../../modules/Redux/reducers/rootReducer";
import { Form } from "../../molecules/Form";
import { formMapping } from "./functions";
import { Header } from "./components/Header";
import { setWordCountProperty } from "../../modules/Redux/actions/wordCount/actions";

import styles from "./styles.module.sass";

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

    return (
        <div className={styles["container"]}>
            <Header />
            <Form fields={formFields} id="url-input-form" />
            {showAlert &&
                <Suspense fallback={<></>}>
                    <div className={styles["alert"]}>
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
                    <div className={styles["accordion"]}>
                        <Accordion accordionData={wordCountsInfo} />
                    </div>
                </Suspense>}
        </div>
    );
};
