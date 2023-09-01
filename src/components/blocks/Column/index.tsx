import { FC } from "react";
import { ITaskGeneral } from "../../../types/ITask";

import styles from "./styles.module.scss";
import TaskCard from "../../UI/TaskCard";
import Plus from "./components/Plus";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../UI/Loader";
import Error from "../../UI/Error";

interface ColumnProps {
  title: string;
}

const Columnn: FC<ColumnProps> = ({ title }) => {
  const { data, loading, error } = useFetch<ITaskGeneral>({
    url: "https://jsonplaceholder.typicode.com/todos",
  });

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button className={styles["add-button"]}>
          <Plus />
        </button>
        {data?.length ? (
          <div className={styles["tasks-quantity"]}>
            <span className={styles["quantity-value"]}>{data?.length}</span>
          </div>
        ) : null}
      </header>
      {!error ? (
        <div className={styles["tasks-wrapper"]}>
          {!loading ? (
            <>
              {data?.map((item) => (
                <TaskCard key={item.title} task={item} />
              ))}
            </>
          ) : (
            <div className={styles["loader"]}>
              <Loader />
            </div>
          )}
        </div>
      ) : (
        <Error message={error?.message} />
      )}
    </section>
  );
};

export default Columnn;
