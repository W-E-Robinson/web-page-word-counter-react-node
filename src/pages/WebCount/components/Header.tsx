import React from "react";

import Typography from "@mui/material/Typography";

import styles from "../styles.module.sass";

export const Header = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["header"]}>
                <Typography variant="h4">Web Page Word Counter</Typography>
                <Typography variant="h6">Paste in a URL in to the form below and click Count to find out how many words are in the page!</Typography>
            </div>
        </div>
    );
};
