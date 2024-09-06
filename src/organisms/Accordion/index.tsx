import React, { memo } from 'react';

import { Accordion as MUIAccordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { AccordionProps } from './types';

import './styles.sass';

const Accordion = memo(({ accordionContent }: AccordionProps) => (
    <>
        {accordionContent.map((content) => (
            <MUIAccordion
                className="accordion-organism"
                TransitionProps={{ unmountOnExit: true }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    id={content.accordionSummary.id}
                    aria-controls={content.accordionSummary.ariaControls}
                >
                    <Typography>{content.accordionSummary.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {content.contentComponent}
                </AccordionDetails>
            </MUIAccordion>
        ))}
    </>
));

export default Accordion;
