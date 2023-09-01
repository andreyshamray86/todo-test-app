import Logo from "../../UI/Logo";
import Columnn from "../Column";

import styles from "./styles.module.scss";

const AppComponent = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Columnn title="Today" />
    </div>
  );
};

export default AppComponent;
