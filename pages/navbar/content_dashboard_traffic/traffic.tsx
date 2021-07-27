import { Doughnut } from "react-chartjs-2";
import styles from "./styles.module.css";

function Traffic() {
  return (
    <div className={styles.divtraffic}>
      <p>traffic</p>
      <div className={styles.doughnut}>
        <Doughnut
          data={{
            labels: ["jan", "feb", "mart", "apr", "may", "june"],
            datasets: [
              {
                label: "daily",
                data: [5, 15, 10, 15, 10, 30],
                backgroundColor: [
                  "blue",
                  "red",
                  "yellow",
                  "green",
                  "skyblue",
                  "black",
                ],
              },
            ],
          }}
        ></Doughnut>
      </div>
    </div>
  );
}
export default Traffic;
