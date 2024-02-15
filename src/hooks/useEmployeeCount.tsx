import { useState, useEffect } from 'react'

type UserData = {
  createdById: string
  email: string
  employment_type: string
  first_name: string
  id: string
  is_active: boolean
  job_title: string
  last_name: string
  location: string
  phone_number: string
  status: string
}

const useEmployeeCount = (data: any) => {
  const [totalemployee, setTotalEmployee] = useState(0)
  const [activeemployee, setActiveEmployee] = useState(0)
  const [inactiveemployee, setInactiveEmployee] = useState(0)
  const [pendingemployee, setPendingEmployee] = useState(0)

  useEffect(() => {
    setTotalEmployee(data.length)

    const filterActiveEmployee = data.filter(
      (employee: UserData) => employee.status == 'active'
    )

    setActiveEmployee(filterActiveEmployee.length)

    const filterPendingEmployee = data.filter(
      (employee: UserData) => employee.status == 'pending'
    )

    setPendingEmployee(filterPendingEmployee.length)

    const filterInactiveEmployee = data.filter(
      (employee: UserData) => employee.status == 'inactive'
    )

    setInactiveEmployee(filterInactiveEmployee.length)
  }, [data])

  return { totalemployee, activeemployee, inactiveemployee, pendingemployee }
}

export default useEmployeeCount
