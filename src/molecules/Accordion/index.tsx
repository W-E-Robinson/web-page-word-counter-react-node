import React from "react";

import { Accordion as MUIAccordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { AccordionProps } from "./types";

export const Accordion = ({
    accordionData,
}: AccordionProps) => {
    return (
        <>
            {accordionData.map((data) => {
                return (
                    <MUIAccordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            id={data.webPageUrl}
                        >
                            <Typography>Word Count: {data.totalWordCount} - {data.webPageUrl}</Typography>
                        </AccordionSummary>
                        <AccordionDetails></AccordionDetails>
                    </MUIAccordion>
                );
            })}
        </>
    );
};
