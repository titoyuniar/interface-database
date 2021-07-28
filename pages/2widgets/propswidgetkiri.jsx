import styles from "./styles.module.css";

function Propswidgetkiri(props) {
  return (
    <>
      <div className={styles.formkiri}>
        <button>{props.nama}</button>
        <p>{props.paragraf}</p>
      </div>
    </>
  );
}
export default Propswidgetkiri;
