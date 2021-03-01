import styles from "../styles/components/Sidebar.module.css";
import * as Icon from "react-feather";
import { useState } from "react";

export function Sidebar() {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

  return (
    <div className={styles.sidebarContainer}>
      <img src="logo-sidebar.svg" alt="" />
      <div className={styles["menu"]}>
        <div className={styles.menuItem}>
          <div></div>
          <Icon.Home className={styles.enabled} />
          <p></p>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.disabledItem}></div>
          <Icon.Award className={styles.disabled} />
          <p></p>
        </div>
      </div>
      {isLightTheme ? <Icon.Sun /> : <Icon.Moon />}
    </div>
  );
}
