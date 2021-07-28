import React from "react";
import Image from "next/dist/client/image";
import styles from "../styles.module.css";
import imghome from "../../ikon/imghome.svg";
import imgbar from "../../ikon/imgbar.svg";
import imgedit from "../../ikon/imgedit.svg";
import imgbox from "../../ikon/imgbox.svg";
import imgchart from "../../ikon/imgchart.svg";
import imgdokument from "../../ikon/imgdokument.svg";
import imgemail from "../../ikon/imgemail.svg";
import imgeror from "../../ikon/imgeror.svg";
import imggaleri from "../../ikon/imggaleri.svg";
import imgikon from "../../ikon/imgikon.svg";
import imgkalender from "../../ikon/imgkalender.svg";
import imgkeranjang from "../../ikon/imgkeranjang.svg";
import imgkursor from "../../ikon/imgkursor.svg";
import imgmaps from "../../ikon/imgmaps.svg";
import imgnetwork from "../../ikon/imgnetwork.svg";
import imgsearch from "../../ikon/imgsearch.svg";
import imgtable from "../../ikon/imgtable.svg";
import imgtodolist from "../../ikon/imgtodolist.svg";
import imguser from "../../ikon/imguser.svg";
import Link from "next/link";

function PropsList() {
  return (
    <>
      <div className={styles.edit}>
        <Image src={imghome} height={12} width={12}></Image>
        <Link href="/">Dashboard</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imgbox} height={12} width={12}></Image>
        <Link href="/2widgets/widgets">Widgets</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imgnetwork} height={12} width={12}></Image>
        <Link href="/3uielement/uielement">UI Element</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imgbar} height={12} width={12}></Image>
        <Link href="/4advancedui/advancedui">Advanced UI</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imgkursor} height={12} width={12}></Image>
        <Link href="/5formelements/formelements">Form Elements</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imgedit} height={12} width={12}></Image>
        <Link href="/6editors/editors">Editors</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imgchart} height={12} width={12}></Image>
        <Link href="/7charts/charts">Charts</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imgtable} height={12} width={12}></Image>
        <Link href="/8tables/tables">Tables</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imgsearch} height={12} width={12}></Image>
        <Link href="/9popups/popups">Popups</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imghome} height={12} width={12}></Image>
        <Link href="/10notifications/notifications">Notifications</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imgikon} height={12} width={12}></Image>
        <Link href="/11icons/icons">Icons</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imgmaps} height={12} width={12}></Image>
        <Link href="/12maps/maps">Maps</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imguser} height={12} width={12}></Image>
        <Link href="/13userpages/userpages">Userpages</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imgeror} height={12} width={12}></Image>
        <Link href="/14erorpages/erorpages">Eror Pages</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imgdokument} height={12} width={12}></Image>
        <Link href="/15generalpages/generalpages">General Pages</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imgkeranjang} height={12} width={12}></Image>
        <Link href="/16e-commerce/e-commerce">E-commerce</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imgemail} height={12} width={12}></Image>
        <Link href="/17email/email">Email</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imgkalender} height={12} width={12}></Image>
        <Link href="/18calender/calender">Calender</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imgtodolist} height={12} width={12}></Image>
        <Link href="/19todolist/todolist">Todolist</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imggaleri} height={12} width={12}></Image>
        <Link href="/20gallery/gallery">Gallery</Link>
      </div>
      <div className={styles.edit}>
        <Image src={imgdokument} height={12} width={12}></Image>
        <Link href="/21documentation/documentation">Documentation</Link>
      </div>
    </>
  );
}
export default PropsList;
