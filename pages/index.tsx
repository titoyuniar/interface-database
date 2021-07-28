import styles from "../styles/Home.module.css";
import ContentCard from "./navbar/content_card/card";
import Dashboard from "./navbar/content_dashboard_traffic/dashboard";
import Traffic from "./navbar/content_dashboard_traffic/traffic";
import NavbarAtas from "./navbar/navbar_atas/navbaratas";
import NavbarKiri from "./navbar/navbar_kiri/navbarkiri";
import Orderstatus from "./navbar/recent_order/orderstatus";
import ResentActivities from "./navbar/recent_order/recentactivities";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbarkiri}>
          <NavbarKiri />
        </div>
        <div className={styles.navbarkanan}>
          <NavbarAtas />
        </div>
        <div className={styles.dashboard_traffic}>
          <div className={styles.dashboard}>
            <Dashboard />
          </div>
          <div className={styles.traffic}>
            <Traffic />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardcontent1}>
            <ContentCard />
          </div>
        </div>
        <div className={styles.resent_order}>
          <div className={styles.resentactivities}>
            <ResentActivities />
          </div>
          <div className={styles.orderstatus}>
            <Orderstatus />
          </div>
        </div>
      </div>
    </>
  );
}
