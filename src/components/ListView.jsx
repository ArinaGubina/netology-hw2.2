import PropTypes from 'prop-types'
import { ShopItem } from './ShopItem'

export const ListView = (props) => {
  const items = props.items.map((item, index) => {
    return (
        <ShopItem key={index} item={item}></ShopItem>
    )
  })
  return (
    <div className="list_items">{items}</div>
  )
}

ListView.propTypes = {
  items: PropTypes.array
}