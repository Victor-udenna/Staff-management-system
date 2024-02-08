import Image from '../../atoms/Image/Image'
import Text from '../../atoms/Text/Text'
import EmptyStateStyle from './EmptyStateStyle'
import emptyStateImg from '../../../assets/empty-state-img.svg'

type Emptystate = {
title: string
desc: string
}

const EmptyState = ({title, desc} : Emptystate) => {
  return (
    <EmptyStateStyle>
      <section className="empty__state">
        <Text classname="empty__state__header" value={title} />
        <Image
          alt="empty state image"
          className="empty__state__img"
          image={emptyStateImg}
        />
        <Text
          classname="empty__state__decs"
          value={desc}
        />
      </section>
    </EmptyStateStyle>
  )
}

export default EmptyState
