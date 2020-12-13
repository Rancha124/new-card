import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="product">
        <div class="product__photo">
          <img
            src="https://i.pinimg.com/originals/87/33/59/8733594e8813886a0587bb3366123236.jpg"
            alt="img still loading"
          />
        </div>
        <div className="product__info">
          <div className="title">
            <h1>Great Nature</h1>
            <span>COD: 999</span>
          </div>
          <div className="price">
            R$ <span>1.23</span>
          </div>
          <div className="variant">
            <h3>SELECT A COLOR</h3>
            <ul className="align__images">
              <li>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
                  alt="green apple"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png"
                  alt="yellow apple"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png"
                  alt="orange apple"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png"
                  alt="red apple"
                />
              </li>
            </ul>
          </div>
          <div className="description">
            <h3>BENEFITS</h3>
            <ul>
              <li>Good for health</li>
              <li>May be good for Instagram posts</li>
              <li>May be good for mental health</li>
              <li>They're linked to a lowest risk of heart disease</li>
            </ul>
          </div>
          <button className="add__cart">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default App;
