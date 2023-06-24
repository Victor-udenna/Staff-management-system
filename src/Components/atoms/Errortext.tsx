type error = {
 value: string
}

const Errortext = ({value}: error) => {
  return (
    <p>{value}</p>
  )
}

export default Errortext