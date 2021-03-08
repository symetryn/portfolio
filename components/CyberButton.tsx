import Link from "next/link";
import React from "react";
import styles from "../styles/Cyber.module.css";

interface Props {}

export const CyberButton: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <Link href="/">
        <button className={styles["cybr-btn"]} {...props}>
          {props.children}

          <span aria-hidden className={styles["cybr-btn__glitch"]}>
            {props.children}
          </span>
        </button>
      </Link>
    </>
  );
};
