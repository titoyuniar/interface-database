import Layout from "../../component/Layout";
import styles from "./styles.module.css";
import Propspopups from "./propspopups";

function Popups() {
  return (
    <>
      <Layout>
        <div className={styles.content}>
          <div className={styles.contentkiri}>
            <Propspopups nama="General" />
            <Propspopups nama="Customize Window" />
            <Propspopups nama="Menu Icons" />
            <Propspopups nama="Menus Appareance" />
            <Propspopups nama="Popup Menu" />
            <Propspopups nama="Popup Hotkeys" />
            <Propspopups nama="Alternative Menu" />
            <Propspopups nama="File Managers" />
            <Propspopups nama="Snippets and Hotsrings" />
            <Propspopups nama="User Vaariable" />
            <Propspopups nama="Database" />
            <Propspopups nama="Menus Advanced Options" />
            <Propspopups nama="launce Advanced Options" />
            <Propspopups nama="Launch Advanced Options" />
            <Propspopups nama="Various Advanced Options" />
          </div>
          <div className={styles.contentkanan}>
            <h3>Database - Options - Quick Access Popup</h3>
            <div className={styles.isi}>
              <div className={styles.p1}>
                <input type="checkbox" />
                <h5>Enable Quick Access Popup Database</h5>
              </div>
              <div className={styles.p2}>
                <h5>Colleection and refresh interval (seconds): </h5>
                <input type="number" />
              </div>
              <div className={styles.p2}>
                <h5>
                  Number of days to take into accound in freequent items menus :
                </h5>
                <input type="number" />
              </div>
              <div className={styles.p2}>
                <h5>maxsimum siza of the database (in MB) : </h5>
                <input type="number" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Popups;
