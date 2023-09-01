import { FC } from "react";
import { faker } from "@faker-js/faker";
import { ITaskGeneral } from "../../../types/ITask";
import styles from "./styles.module.scss";
import Tags from "../Tags";
import Avatar from "../Avatar";
import Checkbox from "../Form/Checkbox";

interface Props {
  task: ITaskGeneral;
}

const TaskCard: FC<Props> = ({ task }) => {
  const pastDate = new Date(faker.date.past()).toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const futureDate = new Date(faker.date.future()).toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const description = faker.lorem.text();
  const tag1 = faker.word.noun();
  const tag2 = faker.word.noun();

  return (
    <article className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <Checkbox label="" checked={task.completed} />
          <h3 className={styles.title}>{task.title}</h3>
        </div>
        <div className={styles.dates}>
          <p className={styles.date}>{pastDate}</p>
          <p className={styles.date}>{futureDate}</p>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.bottom}>
          <Tags tags={[tag1, tag2]} />
          <Avatar />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
