import PropTypes from 'prop-types'

export const ShopCard = (props) => {
  return (
    <div className="shop_card" key={props.key}>
      <div className="shop_card-name">{props.card.name}</div>
      <div className="shop_card-color">{props.card.color}</div>
      <img src={props.card.img}/>       
      <div className="shop_card-row">
        <div className="shop_card-price">${props.card.price}</div>
        <div className="shop_card-btn">add to cart</div>
      </div>        
    </div>
  )
}

ShopCard.propTypes = {
  key: PropTypes.string,
  card: PropTypes.array,
}