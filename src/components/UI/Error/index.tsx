import { FC } from "react";

import styles from "./styles.module.scss";

interface Props {
  message?: string;
}

const Error: FC<Props> = ({ message }) => {
  return <p className={styles.error}>{message}</p>;
};

export default Error;
