import './App.css'

// import {Toolbar} from './components/Toolbar'
// import {ProjectList} from './components/ProjectList'

import { IconSwitch } from './components/IconSwitch'
import { useState } from 'react'
import { ListView } from './components/ListView'
import { CardsView } from './components/CardsView';

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

function App() {
  const [icon, setIcon] = useState("view_list");
  return (
    <>
      <IconSwitch icon={icon} onSwitch={ () => {icon === "view_list"? setIcon("view_module") : setIcon("view_list")} }/>
      {icon === "view_module" && <ListView items={products} />}
      {icon === "view_list" && <CardsView cards={products} />}
    </>     
  )
}

export default App
