import SideBar from '../../Organism/SideBar/Sidebar'
import { FiChevronRight } from "react-icons/fi";
import TransactionStyle from './TransactionsStyle'

const Transactions = () => {
  return (
    <TransactionStyle>
      <main className="container">
        <SideBar />
        <section className="transactions">
          <div className='header_container'>
            <span className="header_text">Payroll</span>
            <FiChevronRight size={'24'} />
            <span className="header_text">Transactions</span>
          </div>
        </section>
      </main>
    </TransactionStyle>
  )
}

export default Transactions
