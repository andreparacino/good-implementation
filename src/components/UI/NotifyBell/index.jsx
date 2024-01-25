import { memo } from "react";
import notifyIcon from "src/assets/bell.svg";
import { useClassNames } from "src/helpers/hooks";
import styles from "./index.module.css";

const NotifyBell = memo(function NotifyBell({ shouldNotify, onClick }) {
  const classNames = useClassNames([
    styles.NotifyBell,
    onClick && styles["NotifyBell--clickable"],
    shouldNotify && styles["NotifyBell--active"],
  ]);

  return (
    <img
      role="button"
      src={notifyIcon}
      alt="notify"
      className={classNames}
      onClick={onClick}
    />
  );
});

export default NotifyBell;
