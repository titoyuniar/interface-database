import styles from "./styles.module.css";
function Propspopups(props) {
  return (
    <>
      <div className={styles.buttonbutton}>
        <button>{props.nama}</button>
      </div>
    </>
  );
}
export default Propspopups;
