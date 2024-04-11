import Settings from '../Components/Pages/Settings/Settings'
import Overview from '../Components/Pages/Overview/Overview'
import Employee from '../Components/Pages/Employee/Employee'
import Payroll from '../Components/Pages/Payroll/Payroll'
import Attendance from '../Components/Pages/Attendance/Attendance'
import Help from '../Components/Pages/Help/Help'
import Communication from '../Components/Pages/Communication/Communication'
import Transactions from '../Components/Pages/Transactions/Transactions'

const routes = [
  {
    elements: [
      {
        path: '/dashboard',
        component: Overview,
      },
    ],
  },
  {
    elements: [
      {
        path: '/settings',
        component: Settings,
      },
    ],
  },
  {
    elements: [
      {
        path: '/employee',
        component: Employee,
      },
    ],
  },
  {
    elements: [
      {
        path: '/payroll',
        component: Payroll,
      },
    ],
  },
  {
    elements: [
      {
        path: '/attendance',
        component: Attendance,
      },
    ],
  },
  {
    elements: [
      {
        path: '/help',
        component: Help,
      },
    ],
  },
  {
    elements: [
      {
        path: '/communication',
        component: Communication,
      },
    ],
  },
  {
    elements: [
      {
        path: '/payroll/transactions',
        component: Transactions,
      },
    ],
  },
]

export default routes
