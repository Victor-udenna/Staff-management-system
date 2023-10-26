import OverviewStyle from "./OverviewStyle";
import SideBar from "../../Organism/SideBar/Sidebar";
import DashboardHeader from "../../Organism/DashboardHeader/DashboardHeader";

const Overview = () => {
  return (
    <OverviewStyle>
      <main className="Dashboard_container">
        <SideBar />
        <section className="overview">
        <DashboardHeader/>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde iste
            voluptate laboriosam ab, molestiae nulla dolor optio deserunt quos
            culpa inventore maiores fugiat ullam totam tempora recusandae id
            animi quam quibusdam labore! Iusto odit minima inventore sint! Sint,
            quos iste!
          </div>
        </section>
      </main>
    </OverviewStyle>
  );
};

export default Overview;
