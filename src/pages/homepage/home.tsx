import Sidebar from "../sidebar/sidebar";
import styles from "./style.module.css";
import { Outlet } from "react-router-dom";
const image =
  "https://us.123rf.com/450wm/vectorkif/vectorkif1906/vectorkif190600103/126133165-face-expression-of-cute-little-girl-smiling-emotion-of-pretty-girl-cartoon-character-vector.jpg?ver=6";
function home() {
  return (
    <div className={styles.main_container}>
      <div className={styles.user_section}>
        <Sidebar />
      </div>
      <div className={styles.chats_section}>
        <div className={styles.chat_header}>
          <img className={styles.chat_header_image} src={image} />
          Test
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default home;
