import Layout from "../../component/Layout";
import styles from "./styles.module.css";

function Editors() {
  return (
    <>
      <Layout>
        <div className={styles.content}>
          <p>Menu Editor</p>
          <div className={styles.contentkiri}>
            <button>Dashboard</button>
            <button>Widgets</button>
            <button>Element</button>
            <button>Advanded ui</button>
            <button>Form Element</button>
            <button>Editors</button>
            <button>Charts</button>
            <button>Tables</button>
            <button>PoppUps</button>
            <button>Notifications</button>
            <button>Icons</button>
            <button>Maps</button>
            <button>Notifications</button>
            <button>User Pages</button>
            <button>Eror Pages</button>
            <button>General</button>
            <button>E-Commerce</button>
            <button>Email</button>
            <button>Calender</button>
            <button>Todolist</button>
            <button>Galery</button>
            <button>Documentation</button>
          </div>
          <div className={styles.contenttengah}>
            <button>Documentation</button>
            <button>Documentation</button>
            <button>Documentation</button>
            <button>Documentation</button>
          </div>
          <div className={styles.contentkanan}>
            <button>Documentation</button>
            <button>Documentation</button>
            <button>Documentation</button>
            <button>Documentation</button>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Editors;
