import { FC, useState } from "react";

import styles from "./styles.module.scss";

interface Props {
  label: string;
  checked: boolean;
}

const Checkbox: FC<Props> = ({ label, checked }) => {
  const [isChecked, setIsChecked] = useState(checked ? checked : false);

  return (
    <label>
      <input
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        className={styles.input}
      />
      <span
        className={`${styles.checkbox} ${
          isChecked ? styles["checkbox--active"] : ""
        }`}
        aria-hidden="true"
      />
      {label}
    </label>
  );
};
export default Checkbox;
