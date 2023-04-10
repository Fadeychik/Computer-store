import React, { Component } from 'react'

export class Categoreis extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoreis: [
                {
                    key: "all",
                    name: "Всё"
                },
                {
                    key: "tables",
                    name: "Столы"
                },
                {
                    key: "chairs",
                    name: "Стулья"
                },
                {
                    key: "mouse",
                    name: "Компьтерные мышки"
                },
                {
                    key: "carpet",
                    name: "Коврики"
                },
                {
                    key: "speakers",
                    name: "Колонки"
                }
            ]
        }
    }
  render() {
    return (
      <div className='categoreis'>
        {this.state.categoreis.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categoreis