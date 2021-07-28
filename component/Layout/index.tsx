import { ReactNode } from "react";
import NavbarAtas from "../../pages/navbar/navbar_atas/navbaratas";
import NavbarKiri from "../../pages/navbar/navbar_kiri/navbarkiri";
import styles from "./styles.module.css";

interface LayoutProps {
  children: ReactNode;
}
function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbarkiri}>
          <NavbarKiri />
        </div>
        <div className={styles.navbarkanan}>
          <NavbarAtas />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
export default Layout;
