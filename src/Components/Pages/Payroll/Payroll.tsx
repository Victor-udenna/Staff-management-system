import PayrollStyle from "./PayrollStyle";
import Text from "../../atoms/Text/Text";
import SideBar from "../../Organism/SideBar/Sidebar";

const Payroll = () => {
  return (
    <PayrollStyle>
      <main className="container">
        <SideBar />
        <section className="payroll">
          <Text classname="" value={"Payroll"} />
        </section>
      </main>
    </PayrollStyle>
  );
};

export default Payroll;
