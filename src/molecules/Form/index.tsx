import React from "react";

import { Button } from "../../atoms/Button/index";
import { TextField } from "../../atoms/TextField/index";
import { FormProps } from "./types";

import styles from "./styles.module.sass";

export const Form = ({
    fields,
}: FormProps) => {
    return (
        <div className={styles["container"]}>
            {fields.map((field, index) => {
                if (field.component === "TEXT_FIELD") {
                    return (
                        <div key={field.id} className={styles[`${index ? "field" : ""}`]}>
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
                        <div key={field.id} className={styles[`${index ? "field" : ""}`]}>
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
        </div>
    );
};
