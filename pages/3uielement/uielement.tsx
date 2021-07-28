import Layout from "../../component/Layout";
import styles from "./styles.module.css";
import Image from "next/dist/client/image";
import ikonlist from "../navbar/ikon/ikonlist.svg";
import ikonlonceng from "../navbar/ikon/ikonlonceng.svg";
import ikonpengaturan from "../navbar/ikon/ikonpengaturan.svg";
import ikonpesan from "../navbar/ikon/ikonpesan.svg";
import imgbar from "../navbar/ikon/imgbar.svg";
import imgbox from "../navbar/ikon/imgbox.svg";
import imgchart from "../navbar/ikon/imgchart.svg";
import imgdokument from "../navbar/ikon/imgdokument.svg";
import imgedit from "../navbar/ikon/imgedit.svg";
import imgemail from "../navbar/ikon/imgemail.svg";
import imgeror from "../navbar/ikon/imgeror.svg";
import imggaleri from "../navbar/ikon/imggaleri.svg";
import imgikon from "../navbar/ikon/imgikon.svg";
import imghome from "../navbar/ikon/imghome.svg";

function Uielement() {
  return (
    <>
      <Layout>
        <div className={styles.content}>
          <div className={styles.uielement}>
            <h5>Ui Elements/Bento Menu</h5>
            <div className={styles.ikon}>
              <Image src={ikonlist} width={55} height={55}></Image>
            </div>
            <div className={styles.ikon}>
              <Image src={ikonlonceng} width={55} height={55}></Image>
            </div>
            <div className={styles.ikon}>
              <Image src={ikonpengaturan} width={55} height={55}></Image>
            </div>
            <div className={styles.ikon}>
              <Image src={ikonpesan} width={55} height={55}></Image>
            </div>
            <div className={styles.ikon}>
              <Image src={imgbar} width={55} height={55}></Image>
            </div>
            <div className={styles.ikon}>
              <Image src={imgbox} width={55} height={55}></Image>
            </div>
            <div className={styles.ikon}>
              <Image src={imgchart} width={55} height={55}></Image>
            </div>
            <div className={styles.ikon}>
              <Image src={imgdokument} width={55} height={55}></Image>
            </div>
            <div className={styles.ikon}>
              <Image src={imgedit} width={55} height={55}></Image>
            </div>
            <div className={styles.ikon}>
              <Image src={imgemail} width={55} height={55}></Image>
            </div>
            <div className={styles.ikon}>
              <Image src={imgeror} width={55} height={55}></Image>
            </div>
            <div className={styles.ikon}>
              <Image src={imggaleri} width={55} height={55}></Image>
            </div>
            <div className={styles.ikon}>
              <Image src={imghome} width={55} height={55}></Image>
            </div>
            <div className={styles.ikon}>
              <Image src={imgikon} width={55} height={55}></Image>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Uielement;
