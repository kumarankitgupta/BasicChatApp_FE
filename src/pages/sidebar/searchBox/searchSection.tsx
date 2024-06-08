import Search from "antd/es/transfer/search";
import styles from "../style.module.css";
function searchSection() {
  return (
    <>
      <div className={styles.search_box_div}>
        <Search placeholder="Searh your Chats here!" />
      </div>
    </>
  );
}

export default searchSection;
