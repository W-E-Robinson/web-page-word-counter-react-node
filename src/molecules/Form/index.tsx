import React from "react";

import { Button } from "../../atoms/Button/index";
import { TextField } from "../../atoms/TextField/index";
import { FormProps } from "./types";

export const Form = ({
    fields,
}: FormProps) => {
    return (
        <>
            {fields.map((field) => {
                if (field.component === "TEXT_FIELD") {
                    return (
                        <div key={field.id}>
                            <TextField
                                id={field.id}
                                value={field.value}
                                label={field.label}
                                onChange={field.onChange}
                                error={field.error}
                                helperText={field.helperText}
                            />
                        </div>
                    );
                } else if (field.component === "BUTTON") {
                    return (
                        <div key={field.id}>
                            <Button
                                id={field.id}
                                label={field.label}
                                variant={field.variant}
                                disabled={field.disabled}
                                onClick={field.onClick}
                            />
                        </div>
                    );
                }
            })}
        </>
    );
};
