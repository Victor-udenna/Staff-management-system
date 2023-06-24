type Img = {
    alt: string
    onclick ?: React.MouseEventHandler<HTMLImageElement> | undefined
    image: any
    className: string
}

const Image = ({alt, onclick, image, className}: Img) => {
  return (
    <img alt={alt} onClick={onclick} src={image} className={className} />
  )
}

export default Image