import logoUrl from "../../../assets/Logo.svg";

import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logoUrl} alt="Logo" />
    </div>
  );
};

export default Logo;
