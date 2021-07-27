import React from "react";
import { Bar } from "react-chartjs-2";

import styles from "./styles.module.css";

const ContentCard = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card1}>
          <p className={styles.nama}>Revinew Status</p>
          <div className={styles.bar}>
            <Bar
              data={{
                labels: ["jan", "feb", "mart", "apr", "may", "june"],
                datasets: [
                  {
                    label: "daily",
                    data: [5, 15, 10, 15, 10, 30],
                    backgroundColor: "white",
                    fontColor: "white",
                  },
                ],
              }}
            ></Bar>
          </div>
        </div>
        <div className={styles.card2}>
          <p className={styles.nama}>Page View</p>
          <h1 className={styles.nama2}>$432</h1>
        </div>
        <div className={styles.card3}>
          <p className={styles.nama}>Bounce Rate</p>
          <h1 className={styles.nama2}>$432</h1>
        </div>
        <div className={styles.card4}>
          <p className={styles.nama}>Revinew</p>
          <div className={styles.bar}>
            <Bar
              data={{
                labels: ["jan", "feb", "mart", "apr", "may", "june"],
                datasets: [
                  {
                    label: "daily",
                    data: [5, 15, 10, 15, 10, 30],
                    backgroundColor: "white",
                    borderColor: "white",
                  },
                ],
              }}
            ></Bar>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContentCard;
