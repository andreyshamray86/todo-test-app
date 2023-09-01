import { FC } from "react";
import tagFigure from "../../../assets/tag-right-figure.png";

import styles from "./styles.module.scss";

interface Props {
  tags: string[];
}

const Tags: FC<Props> = ({ tags }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.first}>{tags[0]}</div>
      <div className={styles.second}>
        {tags[1]}
        <img
          src={tagFigure}
          alt="tag-figure"
          className={styles["tag-figure"]}
        />
      </div>
    </div>
  );
};

export default Tags;
