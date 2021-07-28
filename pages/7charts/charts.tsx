import {
  Bar,
  Bubble,
  Doughnut,
  PolarArea,
  Radar,
  Scatter,
} from "react-chartjs-2";
import Layout from "../../component/Layout";
import styles from "./styles.module.css";

function Chart() {
  return (
    <>
      <Layout>
        <div className={styles.content}>
          <div className={styles.cardbar}>
            <p>Bar</p>
            <Bar
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
            ></Bar>
          </div>
          <div className={styles.cardbar}>
            <p>Radar</p>
            <div className={styles.radar}>
              <Radar
                data={{
                  labels: ["jan", "feb", "may", "june"],
                  datasets: [
                    {
                      label: "daily",
                      data: [5, 15, 10, 15],
                      backgroundColor: "#46c4f5",
                    },
                  ],
                }}
              ></Radar>
            </div>
          </div>
          <div className={styles.cardbar}>
            <p>doughnut</p>
            <div className={styles.doughnut}>
              <Doughnut
                data={{
                  labels: ["mart", "apr", "may", "june"],
                  datasets: [
                    {
                      label: "daily",
                      data: [10, 15, 10, 30],
                      backgroundColor: "#46c4f5",
                    },
                    {
                      label: "may",
                      data: [15, 10, 15, 30],
                      backgroundColor: "#eb4883",
                    },
                  ],
                }}
              ></Doughnut>
            </div>
          </div>
          <div className={styles.cardbar}>
            <p>Polar Area</p>
            <div className={styles.doughnut}>
              <PolarArea
                data={{
                  labels: ["mart", "apr", "may", "june"],
                  datasets: [
                    {
                      label: "daily",
                      data: [10, 15, 10, 30],
                      backgroundColor: "#46c4f5",
                    },
                    {
                      label: "may",
                      data: [15, 10, 15, 30],
                      backgroundColor: "#eb4883",
                    },
                  ],
                }}
              ></PolarArea>
            </div>
          </div>
          <div className={styles.cardbar}>
            <p>Bubble</p>
            <div className={styles.doughnut}>
              <Bubble
                data={{
                  labels: ["mart", "apr", "may", "june"],
                  datasets: [
                    {
                      label: "daily",
                      data: [10, 15, 10, 30],
                      backgroundColor: "#46c4f5",
                    },
                    {
                      label: "may",
                      data: [15, 10, 15, 30],
                      backgroundColor: "#eb4883",
                    },
                  ],
                }}
              ></Bubble>
            </div>
          </div>
          <div className={styles.cardbar}>
            <p>Scatter</p>
            <div className={styles.doughnut}>
              <Scatter
                data={{
                  labels: ["mart", "apr", "may", "june"],
                  datasets: [
                    {
                      label: "daily",
                      data: [10, 15, 10, 30],
                      backgroundColor: "#46c4f5",
                    },
                    {
                      label: "may",
                      data: [15, 10, 15, 30],
                      backgroundColor: "#eb4883",
                    },
                  ],
                }}
              ></Scatter>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Chart;
