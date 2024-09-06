import { fetchWordCountRequest } from '../../../modules/Redux/actions/wordCount/actions';
import { FormMapping } from '../types';

const formMapping: FormMapping = (url, setUrl, reduxDispatch, searchedUrls) => [
    {
        component: 'TEXT_FIELD' as const,
        id: 'text-field-url-input',
        label: 'Paste URL',
        onChange: (value) => setUrl(value),
        value: url,
        error: false,
        helperText: null,
    },
    {
        component: 'BUTTON' as const,
        id: 'reset-button',
        label: 'Reset',
        variant: 'outlined' as const,
        disabled: !url.length,
        onClick: () => setUrl(''),
    },
    {
        component: 'BUTTON' as const,
        id: 'count-button',
        label: 'Count',
        variant: 'contained' as const,
        disabled: !url.length,
        onClick: () => {
            reduxDispatch(fetchWordCountRequest({ searchedUrls, webPageUrl: url }));
            setUrl('');
        },
    },
];

export default formMapping;
