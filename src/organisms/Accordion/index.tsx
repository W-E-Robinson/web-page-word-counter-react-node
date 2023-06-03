import React, { memo } from "react";

import { Accordion as MUIAccordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Table } from "../../molecules/Table";

import { AccordionProps } from "./types";

export const Accordion = memo(({
    accordionData,
}: AccordionProps) => {
    return (
        <>
            {accordionData.map((data) => {
                return (
                    <MUIAccordion TransitionProps={{ unmountOnExit: true }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            id={data.webPageUrl}
                        >
                            <Typography>Word Count: {data.totalWordCount}, Url: {data.webPageUrl}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* @ts-ignore */}
                            <Table headers={["Word", "Count"]} rows={data.destructuredWordCount} />
                        </AccordionDetails>
                    </MUIAccordion>
                );
            })}
        </>
    );
});