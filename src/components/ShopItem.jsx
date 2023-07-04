import PropTypes from 'prop-types'

export const ShopItem = (props) => {
  return (
    <div className="shop_item" key={props.key}>
      <img src={props.item.img}/>
      <div className="shop_item-name">{props.item.name}</div>
      <div className="shop_item-color">{props.item.color}</div>
      <div className="shop_item-price">${props.item.price}</div>
      <div className="shop_item-btn">add to cart</div>
    </div>
  )
}

ShopItem.propTypes = {
  key: PropTypes.string,
  item: PropTypes.array,
}