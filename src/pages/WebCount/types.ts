import { ButtonComponentProps, TextFieldComponentProps } from "../../molecules/Form/types";

export type FormMapping = (
    url: string,
    setUrl: React.Dispatch<React.SetStateAction<string>>,
) => (ButtonComponentProps | TextFieldComponentProps)[];
