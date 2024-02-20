import { useEffect, useState } from 'react'

const useEmployeeDataCount = (data: any) => {
  const [totalCount, setTotalCount] = useState(0)
  const [currentLimit, setCurrentLimit] = useState(0)
  const [isdisabled, setIsdisabled] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [pageLimit, setPagelimit] = useState(10)

  useEffect(() => {
    setToggle(!toggle)

    setTotalCount(data.length)
    const handleCount = () => {
      if (data.length <= 10) {
        setCurrentLimit(data.length)
        setIsdisabled(true)
      }
      if (data.length > 10) {
        setCurrentLimit(10)
        setIsdisabled(false)
      }

      if (totalCount === pageLimit || pageLimit < totalCount) {
        setIsdisabled(true)
        setCurrentLimit(totalCount)
      }
    }

    handleCount()
  }, [data, pageLimit])
  return { totalCount, currentLimit, isdisabled, pageLimit, setPagelimit }
}

export default useEmployeeDataCount
