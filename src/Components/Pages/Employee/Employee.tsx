import DashboardHeader from "../../Organism/DashboardHeader/DashboardHeader";
import SideBar from "../../Organism/SideBar/Sidebar";
import Text from "../../atoms/Text/Text";
import EmployeeStyle from "./EmployeeStyle";

const Employee = () => {
  return (
    <EmployeeStyle>
      <main className="container">
        <SideBar />
        <section className="employee">
          <DashboardHeader/>
          <Text classname="" value={"Employee"} />
        </section>
      </main>
    </EmployeeStyle>
  );
};

export default Employee;
