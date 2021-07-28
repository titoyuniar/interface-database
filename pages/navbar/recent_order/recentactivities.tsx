import styles from "./styles.module.css";
import Image from "next/dist/client/image";
import zikonlight from "../ikon/zikonlight.svg";
import zikonlist from "../ikon/zikonlist.svg";
import zikonpensil from "../ikon/zikonpensil.svg";

function ResentActivities() {
  return (
    <div className={styles.divresent}>
      <div>
        <p>Resent activies</p>
      </div>
      <div className={styles.resentcontent}>
        <div className={styles.resentmenit}>
          <p>42 mints ago</p>
          <p>1 day ago</p>
          <p>42 mints ago</p>
          <p>1 day ago</p>
          <p>1 day ago</p>
        </div>
        <div className={styles.resentimg}>
          <div className={styles.resentimg1}>
            <Image src={zikonlist}></Image>
          </div>
          <div className={styles.resentimg2}>
            <Image src={zikonlight}></Image>
          </div>
          <div className={styles.resentimg3}>
            <Image src={zikonpensil}></Image>
          </div>
          <div className={styles.resentimg4}>
            <Image src={zikonlight}></Image>
          </div>
          <div className={styles.resentimg5}>
            <Image src={zikonlight}></Image>
          </div>
        </div>
        <div className={styles.resenttask}>
          <div>
            <p className={styles.task1}>task upadate</p>
            <h5 className={styles.task2}>nikolai a task</h5>
          </div>
          <div>
            <p className={styles.task1}>dead added</p>
            <h5 className={styles.task2}>panshi updateed atask</h5>
          </div>
          <div>
            <p className={styles.task1}>published article</p>
            <h5 className={styles.task2}>rasel published a Article</h5>
          </div>
          <div>
            <p className={styles.task1}>dock updateed</p>
            <h5 className={styles.task2}>reshmi updated a dock</h5>
          </div>
          <div>
            <p className={styles.task1}>replyed comment</p>
            <h5 className={styles.task2}>jenathon added a comment</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResentActivities;
