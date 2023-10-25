import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isInCart: true
    }
    this.state = {
      count: 0,
    }
  }


  handleAddToCartButton = () => {
    this.setState({
      isInCart: ! this.state.isInCart
    })
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }



  render() {
    return (
      <div>


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#!">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#!">All Products</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                    <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn btn-outline-dark" type="submit">
                  <i className="bi-cart-fill me-1"></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill"> {this.state.count} </span>
                </button>
              </form>
            </div>
          </div>
        </nav>
        {/* <!-- Header--> */}
        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Shop in style</h1>
              <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
          </div>
        </header>
        {/* <!-- Section--> */}
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div className="col mb-5">
                <div className="card h-100">
                  {/* <!-- Product image--> */}
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">Fancy Product</h5>
                      {/* <!-- Product price--> */}
                      $40.00 - $80.00
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">


                    <div className="text-center">
                      {
                        this.state.isInCart ? (<button onClick={() => {
                          this.increment()
                          this.handleAddToCartButton()
                        }} className="btn btn-outline-dark mt-auto">Add to cart</button>) :
                          (<button onClick={() => {
                            this.decrement()
                            this.handleAddToCartButton()
                          }} className="btn btn-outline-dark mt-auto">Remove from cart</button>)
                      }
                    </div>


                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  {/* <!-- Sale badge--> */}
                  <div className="badge bg-dark text-white position-absolute" >Sale</div>
                  {/* <!-- Product image--> */}
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">Special Item</h5>
                      {/* <!-- Product reviews--> */}
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      {/* <!-- Product price--> */}
                      <span className="text-muted text-decoration-line-through">$20.00</span>
                      $18.00
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">

                  

                    <div className="text-center">
                      {
                        <button onClick={this.increment} className="btn btn-outline-dark mt-auto">Add to cart</button>
                      }
                    </div>


                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  {/* <!-- Sale badge--> */}
                  <div className="badge bg-dark text-white position-absolute" >Sale</div>
                  {/* <!-- Product image--> */}
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">Sale Item</h5>
                      {/* <!-- Product price--> */}
                      <span className="text-muted text-decoration-line-through">$50.00</span>
                      $25.00
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">


                    <div className="text-center">
                      {
                        <button onClick={this.increment} className="btn btn-outline-dark mt-auto">Add to cart</button>
                      }
                    </div>


                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  {/* <!-- Product image--> */}
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">Popular Item</h5>
                      {/* <!-- Product reviews--> */}
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      {/* <!-- Product price--> */}
                      $40.00
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">


                    <div className="text-center">
                      {
                        <button onClick={this.increment} className="btn btn-outline-dark mt-auto">Add to cart</button>
                      }
                    </div>


                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  {/* <!-- Sale badge--> */}
                  <div className="badge bg-dark text-white position-absolute">Sale</div>
                  {/* <!-- Product image--> */}
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">Sale Item</h5>
                      {/* <!-- Product price--> */}
                      <span className="text-muted text-decoration-line-through">$50.00</span>
                      $25.00
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">


                    <div className="text-center">
                      {
                        <button onClick={this.increment} className="btn btn-outline-dark mt-auto">Add to cart</button>
                      }
                    </div>


                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  {/* <!-- Product image--> */}
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">Fancy Product</h5>
                      {/* <!-- Product price--> */}
                      $120.00 - $280.00
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">


                    <div className="text-center">
                      {
                        <button onClick={this.increment} className="btn btn-outline-dark mt-auto">Add to cart</button>
                      }
                    </div>


                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  {/* <!-- Sale badge--> */}
                  <div className="badge bg-dark text-white position-absolute">Sale</div>
                  {/* <!-- Product image--> */}
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">Special Item</h5>
                      {/* <!-- Product reviews--> */}
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      {/* <!-- Product price--> */}
                      <span className="text-muted text-decoration-line-through">$20.00</span>
                      $18.00
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">


                    <div className="text-center">
                      {
                        <button onClick={this.increment} className="btn btn-outline-dark mt-auto">Add to cart</button>
                      }
                    </div>


                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  {/* <!-- Product image--> */}
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">Popular Item</h5>
                      {/* <!-- Product reviews--> */}
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      {/* <!-- Product price--> */}
                      $40.00
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">


                    <div className="text-center">
                      {
                        <button onClick={this.increment} className="btn btn-outline-dark mt-auto">Add to cart</button>
                      }
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



      </div>
    )
  }
}

export default App