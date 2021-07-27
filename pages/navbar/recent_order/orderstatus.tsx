import styles from "./styles.module.css";
import Image from "next/dist/client/image";
import Xikonkeranjang from "../ikon/xikonkeranjang.svg";
import xikonhapus from "../ikon/xikonhapus.svg";
import xikonseru from "../ikon/xikonseru.svg";

function Orderstatus() {
  return (
    <div className={styles.divorderstatus}>
      <p className={styles.order}>Order Status</p>
      <h5 className={styles.overview}>Overview of latest month</h5>
      <div className={styles.navbar}>
        <div className={styles.navbarorder}>
          <button className={styles.button}>+ add</button>
          <button>
            <Image src={xikonseru}></Image>
          </button>
          <button>
            <Image src={xikonhapus}></Image>
          </button>
          <button>
            <Image src={Xikonkeranjang}></Image>
          </button>
        </div>
        <div className={styles.navbarkanan}>
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className={styles.navtable}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th className={styles.borderradius1}>Invoice</th>
            <th>customers</th>
            <th>from</th>
            <th>price</th>
            <th className={styles.borderradius2}>status</th>
          </tr>
          <tr className={styles.tr2}>
            <td>12286</td>
            <td>charly dues</td>
            <td>brazil</td>
            <td>$299</td>
            <td>
              <button className={styles.procces}>Procces</button>
            </td>
          </tr>
          <tr className={styles.tr2}>
            <td>12386</td>
            <td>marko</td>
            <td>Italy</td>
            <td>$2642</td>
            <td>
              <button className={styles.open}>Open</button>
            </td>
          </tr>
          <tr className={styles.tr2}>
            <td>12386</td>
            <td>Belgiri Bastana</td>
            <td>Korea</td>
            <td>$369</td>
            <td>
              <button className={styles.onhold}>onhold</button>
            </td>
          </tr>
          <tr className={styles.tr2}>
            <td>12286</td>
            <td>Sarti Onuska</td>
            <td>Japan</td>
            <td>$1240</td>
            <td>
              <button className={styles.procces2}>Procces</button>
            </td>
          </tr>
          <tr className={styles.tr2}>
            <td>12286</td>
            <td>charly dues</td>
            <td>brazil</td>
            <td>$299</td>
            <td>
              <button className={styles.open2}>Open</button>
            </td>
          </tr>
        </table>
        <div className={styles.clear}></div>
      </div>
    </div>
  );
}
export default Orderstatus;
