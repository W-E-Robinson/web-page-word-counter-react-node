import React, { Suspense, useState } from "react";

import { useSelector } from "react-redux";

import { AppState } from "../../modules/Redux/reducers/rootReducer";
import { Form } from "../../molecules/Form";
import { formMapping } from "./functions";
import { Header } from "./components/Header";

const Accordion = React.lazy(() => import("../../organisms/Accordion").then(module => ({ default: module.Accordion })));

export const WordCount = () => {
    const { wordCountsInfo } = useSelector((state: AppState) => state.wordCounts);

    const [url, setUrl] = useState<string>("");

    const formFields = formMapping(url, setUrl);

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
