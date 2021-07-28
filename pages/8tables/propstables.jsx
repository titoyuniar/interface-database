import styles from "./styles.module.css";
function Propstables(props) {
  return (
    <>
      <div className={styles.bar}>
        <input type="checkbox" />
        <h5 className={styles.status}>{props.status}</h5>
        <h5 className={styles.signalname}>{props.signal}</h5>
        <h5 className={styles.severty}>{props.severity}</h5>
        <h5 className={styles.stage}>{props.stage}</h5>
        <h5 className={styles.lasped}>{props.lapsed}</h5>
        <h5 className={styles.team}>{props.team}</h5>
      </div>
    </>
  );
}
export default Propstables;
