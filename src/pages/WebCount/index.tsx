import React, { Suspense, useState, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../../modules/Redux/reducers/rootReducer";
import { Form } from "../../molecules/Form";
import { formMapping } from "./functions";
import { Header } from "./components/Header";

const Accordion = React.lazy(() => import("../../organisms/Accordion").then(module => ({ default: module.Accordion })));

export const WordCount = () => {
    const reduxDispatch = useDispatch();
    const { wordCountsInfo } = useSelector((state: AppState) => state.wordCounts);

    const [url, setUrl] = useState("");

    const formFields = useMemo(() => formMapping(url, setUrl, reduxDispatch), [url]);

    return (
        <>
            <Header />
            <Form fields={formFields} />
            {wordCountsInfo.length > 0 &&
                <Suspense fallback={<></>}>
                    <Accordion accordionData={wordCountsInfo} />
                </Suspense>}
        </>
    );
};
