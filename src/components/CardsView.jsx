import PropTypes from 'prop-types'
import { ShopCard } from './ShopCard'

export const CardsView = (props) => {
  const cards = props.cards.map((card, index) => {
    return (
        <ShopCard key={index} card={card}></ShopCard>
    )
  })
  return (
    <div className="cards_items">{cards}</div>
  )
}

CardsView.propTypes = {
  cards: PropTypes.array
}