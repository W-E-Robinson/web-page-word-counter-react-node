import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Accordion from '../index';
import Table from '../../../molecules/Table/index';

describe('Accordion testing', () => {
    const mockRows = [
        { word: 'to', count: 13 },
        { word: 'and', count: 12 },
    ];

    const mockAccordionContent = [
        {
            accordionSummary: {
                id: 'mockId',
                title: 'Mock First Accordion Title',
                ariaControls: 'mockAriaControls',
            },
            contentComponent:
                <Table
                    headers={['First Column Title', 'Second Column Title']}
                    rows={mockRows}
                    caption="This is a mock caption"
                />,
        },
    ];

    test('accordion title information rendering', () => {
        render(<Accordion accordionContent={mockAccordionContent} />);

        expect(screen.getByText('Mock First Accordion Title')).toBeInTheDocument();
    });
    test('expandable data rendering', async () => {
        // eslint-disable-next-line max-len
        const { getByText, findByText } = render(<Accordion accordionContent={mockAccordionContent} />);

        const firstAccordion = getByText('Mock First Accordion Title');
        userEvent.click(firstAccordion);

        expect(await findByText('First Column Title')).toBeInTheDocument();
        expect(await findByText('Second Column Title')).toBeInTheDocument();
        expect(await findByText('to')).toBeInTheDocument();
        expect(await findByText('and')).toBeInTheDocument();
        expect(await findByText(13)).toBeInTheDocument();
        expect(await findByText(12)).toBeInTheDocument();
        expect(await findByText('This is a mock caption')).toBeInTheDocument();
    });
});
