import Layout from "../../component/Layout";
import styles from "./styles.module.css";
import imghapus from "../navbar/ikon/zzikondelete.svg";
import Image from "next/dist/client/image";

function Advanceui() {
  return (
    <>
      <Layout>
        <div className={styles.content}>
          <div className={styles.navbar}>
            <div className={styles.navbarkiri}>
              <input type="text" placeholder="Search" />
            </div>
            <div className={styles.navbarkanan}>
              <button>Advanced Search</button>
            </div>
            <div className={styles.card}>
              <div className={styles.judul}>
                <input type="checkbox" />
                <h5>Match</h5>
                <button>all</button>
                <h5>of the following rules :</h5>
              </div>
              <h5>Select Fields</h5>
              <div className={styles.atas}>
                <button className={styles.button1}>Address</button>
                <button className={styles.buttonnama}>contains</button>
                <button className={styles.button2}></button>
                <button className={styles.buttonplus}>+</button>
                <Image src={imghapus} width={20} height={20}></Image>
              </div>
              <div className={styles.bawah}>
                <button className={styles.button1}>Product Nama</button>
                <button className={styles.buttonnama}> is ...</button>
                <button className={styles.button2}></button>
                <button className={styles.buttonplus}>+</button>
                <Image src={imghapus} width={20} height={20}></Image>
              </div>
              <h5>Select Date</h5>
              <div className={styles.bawah}>
                <button className={styles.button1}>Custom Date</button>
                <button className={styles.buttonnama}>2018-01-01</button>
                <button className={styles.button2}>2018-01-01</button>
              </div>
              <div className={styles.buttonbawah}>
                <button className={styles.cencel}>Cencel</button>
                <button className={styles.apploy}>Apploy</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Advanceui;
