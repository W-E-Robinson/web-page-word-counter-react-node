import React, { memo } from "react";

import { Accordion as MUIAccordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Table } from "../../molecules/Table";

import { AccordionProps } from "./types";
import "./styles.sass";

export const Accordion = memo(({
    accordionData,
}: AccordionProps) => {
    return (
        <>
            {accordionData.map((data) => {
                return (
                    <MUIAccordion
                        className="accordion-organism"
                        TransitionProps={{ unmountOnExit: true }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            id={data.webPageUrl}
                        >
                            <Typography>Word Count: {data.totalWordCount}, URL: {data.webPageUrl}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* @ts-ignore */}
                            <Table
                                headers={["Word", "Count"]}
                                rows={data.destructuredWordCount}
                                caption="A table to show the frequency of words for the given URL"
                            />
                        </AccordionDetails>
                    </MUIAccordion>
                );
            })}
        </>
    );
});
