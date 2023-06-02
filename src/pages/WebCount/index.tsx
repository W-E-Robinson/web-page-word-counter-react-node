import React from "react";

import Typography from "@mui/material/Typography";

import styles from "./styles.module.sass";

export const WordCount = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["header"]}>
                <Typography variant="h4">Web Page Word Counter</Typography>
                <Typography variant="h6">SITE_DESCRIPTION</Typography>
            </div>
        </div>
    );
};
