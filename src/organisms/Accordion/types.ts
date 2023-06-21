import { ReactNode } from "react";

interface AccordionContent {
    accordionSummary: {
        id: string;
        title: string;
        ariaControls: string;//end in details
    }
    contentComponent: ReactNode;
}

export interface AccordionProps {
    accordionContent: AccordionContent[];
}
