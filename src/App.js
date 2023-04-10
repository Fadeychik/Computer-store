import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categoreis from "./components/Categoreis";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стол деревянный",
          img: "table1.jpg",
          desc: "Деревянный компьютерный стол (большой)",
          category: "tables",
          price: "15000"
        },
        {
          id: 2,
          title: "Стол игровой",
          img: "table3.jpg",
          desc: "Геймерский стол черно-красный",
          category: "tables",
          price: "17000"
        },
        {
          id: 3,
          title: "Колонки",
          img: "musical_speakers1.jpg",
          desc: "Компьтерные музыкальные колонки",
          category: "speakers",
          price: "5000"
        },
        {
          id: 4,
          title: "Игровое кресло",
          img: "chair1.jpg",
          desc: "Компьютерное игровое кресло",
          category: "chairs",
          price: "12000"
        },
        {
          id: 5,
          title: "Игровая мышка",
          img: "mouse2.jpg",
          desc: "Компьютерная игровая мышь",
          category: "mouse",
          price: "4500"
        },
        {
          id: 6,
          title: "Игровой коврик",
          img: "rug1.jpg",
          desc: "Игровой коврик для мыши (М4А4 'ВОЙ')",
          category: "carpet",
          price: "2000"
        }            
      ],
      showFullItem: false,
      fillItem: {}
    }

    
    this.state.currentItems = this.state.items
    this.chooseCategory = this.chooseCategory.bind(this)
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  }
  render (){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categoreis chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />

      </div>
    );

  }


  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }


  chooseCategory(category) {
    if(category === "all") {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }




  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }





  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item] })
  }

}

export default App;
