import styles from "../styles.module.css";
import { Line } from "react-chartjs-2";

function Chartjs() {
  return (
    <>
      <div className={styles.chartjs}>
        <Line
          data={{
            labels: ["jan", "feb", "mart", "apr", "may", "june"],
            datasets: [
              {
                label: "daily",
                data: [5, 15, 10, 15, 10, 30],
                backgroundColor: "#46c4f5",
              },
              {
                label: "may",
                data: [5, 10, 15, 10, 15, 30],
                backgroundColor: "#eb4883",
              },
            ],
          }}
        ></Line>
      </div>
    </>
  );
}
export default Chartjs;
