import React, { Suspense } from "react";

import { useSelector } from "react-redux";

import { AppState } from "../../modules/Redux/reducers/rootReducer";
import { Form } from "../../molecules/Form";
import { formMapping } from "./functions";
import { Header } from "./components/Header";

const Accordion = React.lazy(() => import("../../organisms/Accordion").then(module => ({ default: module.Accordion })));

export const WordCount = () => {
    const { wordCountsInfo } = useSelector((state: AppState) => state.wordCounts);

    const formFields = formMapping();

    return (
        <>
            <Header />
            <Form fields={formFields} />
            {wordCountsInfo.length &&
                <Suspense fallback={<></>}>
                    <Accordion accordionData={wordCountsInfo} />
                </Suspense>}
        </>
    );
};
