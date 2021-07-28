import Layout from "../../component/Layout";
import styles from "./styles.module.css";

function Notifications() {
  return (
    <>
      <Layout>
        <div className={styles.content}>
          <div className={styles.navbar}>
            <h4>Notifications</h4>
            <h4>1-8 of 8</h4>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Notifications;
