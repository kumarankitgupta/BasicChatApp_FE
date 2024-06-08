import styles from "../style.module.css";
const image =
  "https://us.123rf.com/450wm/vectorkif/vectorkif1906/vectorkif190600103/126133165-face-expression-of-cute-little-girl-smiling-emotion-of-pretty-girl-cartoon-character-vector.jpg?ver=6";
function userBox() {
  return (
    <div className={styles.chat_box}>
      <img className={styles.chat_header_image} src={image} />
      Test
    </div>
  );
}

export default userBox;
