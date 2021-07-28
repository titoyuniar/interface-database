import Layout from "../../component/Layout";
import styles from "./styles.module.css";
import ikonlist from "../navbar/ikon/ikonlist.svg";
import Image from "next/dist/client/image";
import Propstables from "./propstables";

function Tables() {
  return (
    <>
      <Layout>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.img}>
              <Image src={ikonlist} width={20} height={20}></Image>
            </div>
            <button>Official signals</button>
            <button>Lapsed Time a 10min</button>
            <hr />
            <div className={styles.titlebold}>
              <Propstables
                status="Status"
                signal="Signal Name"
                severity="Severty"
                stage="Stage"
                lapsed="Lapsed Time"
                team="Team Lead"
              />
            </div>
            <br />
            <hr />
            <Propstables
              status="Offline"
              signal="Astrid: NE shared managed-features"
              severity="Medium"
              stage="Triagend"
              lapsed="10.12"
              team="These Nguyen"
            />
            <br />
            <hr />
            <Propstables
              status="Offline"
              signal="Cosmo: prod shared vm"
              severity="Huge"
              stage="Triaged"
              lapsed="12.45"
              team="Brie Fuman"
            />
            <br />
            <hr />
            <Propstables
              status="Offline"
              signal="Phoenix:"
              severity="Severty"
              stage="Stage"
              lapsed="Lapsed Time"
              team="Team Lead"
            />
            <br />
            <hr />
            <Propstables
              status="Offline"
              signal="Signal Name"
              severity="Severty"
              stage="Stage"
              lapsed="Lapsed Time"
              team="Team Lead"
            />
            <br />
            <hr />
            <div className={styles.row}>
              <h5>Rows Per page</h5>
              <button>4</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Tables;
