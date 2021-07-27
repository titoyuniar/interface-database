import styles from "./styles.module.css";
import Chartjs from "./chartjs/chartjs";

function Dashboard() {
  return (
    <div className={styles.cardnav}>
      <div className={styles.dashboardkiri}>
        <p className={styles.dashboard}>dashboard</p>
        <h5 className={styles.overview}>Overview of latest Month</h5>
        <h1 className={styles.dolar}>$3468.96</h1>
        <p className={styles.current}>current Month Earnings</p>
        <h1 className={styles.dolar}>82</h1>
        <p className={styles.current}>current Month Sales</p>
        <button className={styles.button}>Last Month Summary</button>
      </div>
      <div className={styles.dashboardkanan}></div>
      <div className={styles.dashboardbawah}>
        <div>
          <p className={styles.imgbawah}></p>
          {/* <p>email</p> */}
        </div>
        <div className={styles.clear}></div>
      </div>
      <Chartjs />
    </div>
  );
}
export default Dashboard;
