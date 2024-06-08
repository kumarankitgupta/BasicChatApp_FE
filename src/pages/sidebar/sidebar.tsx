import SearchSection from "./searchBox/searchSection";
import UserBox from "./usersBox/userBox";
const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
function sidebar() {
  return (
    <>
      <SearchSection />
      <div
        style={{
          overflowY: "scroll",
          height: "94%",
        }}
      >
        {arr.map(() => {
          return <UserBox />;
        })}
      </div>
    </>
  );
}

export default sidebar;
