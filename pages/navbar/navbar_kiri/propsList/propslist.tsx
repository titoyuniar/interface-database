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
import imgnotifikasi from "../../ikon/imgnotifikasi.svg";
import imgsearch from "../../ikon/imgsearch.svg";
import imgtable from "../../ikon/imgtable.svg";
import imgtodolist from "../../ikon/imgtodolist.svg";
import imguser from "../../ikon/imguser.svg";
import Document, { Head } from "next/document";

function PropsList() {
  return (
    <>
      <div className={styles.edit}>
        <Image src={imghome} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>Dashboard</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imgbox} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>Widgets</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imgnetwork} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>UI Elements</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imgbar} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>Advanced UI</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imgkursor} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>Form Elements</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imgedit} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>Editors</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imgchart} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>Charts</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imgtable} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>Tables</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imgsearch} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>Popups</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imghome} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>Notifications</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imgikon} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>Icons</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imgmaps} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>Maps</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imguser} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>User pages</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imgeror} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>Eror Pages</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imgdokument} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>General Pages</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imgkeranjang} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>E-Commerce</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imgemail} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>Email</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imgkalender} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>Calender</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imgtodolist} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>Todo List</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imggaleri} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>Gallery</h3>
      </div>
      <div className={styles.edit}>
        <Image src={imgdokument} height={12} width={12}></Image>
        <h3 className={styles.edittitle}>Documentation</h3>
      </div>
    </>
  );
}
export default PropsList;
