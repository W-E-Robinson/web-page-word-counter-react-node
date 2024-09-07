import { ReactNode, memo } from 'react';

import { Accordion as MUIAccordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './styles.sass';

export interface AccordionContent {
    accordionSummary: {
        id: string;
        title: string;
        ariaControls: string;
    }
    contentComponent: ReactNode;
}
export interface AccordionProps {
    accordionContent: AccordionContent[];
}

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
