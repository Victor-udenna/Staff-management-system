import SideBar from "../../Organism/SideBar/Sidebar";
import Text from "../../atoms/Text/Text";
import AttendanceStyle from "./AttendanceStyle";

const Attendance = () => {
  return (
    <AttendanceStyle>
      <main className="container">
        <SideBar />
        <section className="attendance">
          <Text classname="" value={"Attendance"} />
        </section>
      </main>
    </AttendanceStyle>
  );
};

export default Attendance;
