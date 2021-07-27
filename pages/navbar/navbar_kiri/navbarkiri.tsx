import PropsList from "./propsList/propslist";
import styles from "./styles.module.css";

function NavbarKiri() {
  return (
    <div className={styles.container}>
      <div className={styles.nav_navbarkiri}>
        <h4 className={styles.lector}>Lector.</h4>
      </div>
      <div className={styles.listitemprops}>
        <PropsList />
      </div>
    </div>
  );
}
export default NavbarKiri;
