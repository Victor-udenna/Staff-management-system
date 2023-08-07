import SideBar from "../../Organism/SideBar/Sidebar";
import Text from "../../atoms/Text/Text";
import AttendanceStyle from "./AttendanceStyle";


const Attendance = () => {
  return (
<AttendanceStyle>
<main className="container">
      <SideBar/>
      <section className="attendance">
        <Text classname=""  value={"attendance   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptatum unde dignissimos minima? Mollitia, et quibusdam! Voluptatum doloremque perspiciatis obcaecati corrupti ut magni id suscipit sed distinctio placeat quo consequuntur quos soluta, omnis fugit dolorem culpa optio eligendi! Similique, amet!"}/>
      </section>
    </main>
</AttendanceStyle>
  )
}

export default Attendance