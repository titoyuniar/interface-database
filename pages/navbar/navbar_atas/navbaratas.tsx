import styles from "./styles.module.css";
import Image from "next/dist/client/image";
import ikonlist from "../ikon/ikonlist.svg";
import ikonlonceng from "../ikon/ikonlonceng.svg";
import ikonpesan from "../ikon/ikonpesan.svg";
import imgprofile from "../ikon/myprofil.jpg";
import ikonpengaturan from "../ikon/ikonpengaturan.svg";

function NavbarAtas() {
  return (
    <>
      <div className={styles.navbaratas}>
        <div className={styles.ikonlist}>
          <a>
            <Image src={ikonlist}></Image>
          </a>
        </div>
        <div className={styles.lisitemnavbaratas}>
          <ul className={styles.itemimg}>
            <a>
              <Image src={ikonlonceng}></Image>
            </a>
            <a>
              <Image src={ikonpesan}></Image>
            </a>
            <a className={styles.myprofile}>
              <Image src={imgprofile} height={20} width={20}></Image>
            </a>
            <a>
              <Image src={ikonpengaturan}></Image>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
export default NavbarAtas;
