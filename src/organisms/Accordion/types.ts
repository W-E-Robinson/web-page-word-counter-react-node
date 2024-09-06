import { ReactNode } from 'react';

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
