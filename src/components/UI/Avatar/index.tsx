import avatarImage from "../../../assets/avatar-mock.jpg";

import styles from "./styles.module.scss";

const Avatar = () => {
  return (
    <div className={styles.wrapper}>
      <img src={avatarImage} alt="avatar" className={styles.avatar} />
    </div>
  );
};

export default Avatar;
