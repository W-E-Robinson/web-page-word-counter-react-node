import React, { Suspense } from "react";

import { useSelector } from "react-redux";

import { AppState } from "../../modules/Redux/reducers/rootReducer";
import { Header } from "./components/Header";

const Accordion = React.lazy(() => import("../../organisms/Accordion").then(module => ({ default: module.Accordion })));

export const WordCount = () => {
    const { wordCountsInfo } = useSelector((state: AppState) => state.wordCounts);

    return (
        <>
            <Header />
            {wordCountsInfo.length &&
                <Suspense fallback={<></>}>
                    <Accordion accordionData={wordCountsInfo} />
                </Suspense>}
        </>
    );
};
