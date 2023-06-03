import { Dispatch } from "react";
import { FetchWordCountRequest } from "../../modules/Redux/actions/wordCount/types";
import { ButtonComponentProps, TextFieldComponentProps } from "../../molecules/Form/types";

export type FormMapping = (
    url: string,
    setUrl: React.Dispatch<React.SetStateAction<string>>,
    reduxDispatch: Dispatch<FetchWordCountRequest>,
) => (ButtonComponentProps | TextFieldComponentProps)[];
