import Layout from "../../component/Layout";
import styles from "./styles.module.css";

function Formelements() {
  return (
    <>
      <Layout>
        <div className={styles.content}>
          <div className={styles.form}>
            <h3>Form Element</h3>
            <h5>Fist name : </h5>
            <input type="text" />
            <h5>Last name : </h5>
            <input type="text" />
            <h5>Password : </h5>
            <input type="password" />
            <h5>Jenis kelamin</h5>
            <div className={styles.radio}>
              <input type="radio" />
              <h6>Male</h6>
              <input type="radio" />
              <h6>Famale</h6>
            </div>
            <h5>Alamat : </h5>
            <textarea name="" id="" cols={30} rows={10}></textarea>
            <h5>Hobby</h5>
            <div className={styles.radio}>
              <input type="checkbox" />
              <h6>Baca Buku</h6>
              <input type="checkbox" />
              <h6>Kesepian</h6>
              <input type="checkbox" />
              <h6>Olahraga</h6>
              <input type="checkbox" />
              <h6>Jalan Jalan</h6>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Formelements;
