import styles from "./styles.module.css";

function Propswidgetkanan(props) {
  return (
    <>
      <div className={styles.formkanan}>
        <button>{props.nama}</button>
        <p>{props.paragraf}</p>
      </div>
    </>
  );
}
export default Propswidgetkanan;
