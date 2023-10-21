import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isInCart: true
    }
    this.state={
      count:0
    }
  }
  handleAddToCartButton = () => {
    this.setState({
      isInCart: !this.state.isInCart
    })
  }
  increment = () =>{
    this.setState({
      count: this.state.count+1
    })
  }
  decrement = () =>{
    this.setState({
      count: this.state.count-1
    })
  }
  render() {
    return (
      <div>
        <div>
          {
            this.state.isInCart ? (<button onClick={this.handleAddToCartButton}>Add To Cart </button>) :
              (<button onClick={this.handleAddToCartButton}>Remove from cart</button>)
          }
        </div>
        <div>
          <button>CART :- {this.state.count}</button>
          <button onClick={this.increment}>Add To Cart</button>
          <button onClick={this.decrement}>Remove From Cart</button>
        </div>
      </div>
    )
  }
}

export default App