import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="" />
          </Link>
        </div>
        <div className="product-image">
          <img src="images/watch.jpg" alt="product" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">Kids HeadPhone bukl 10</h5>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            value="3"
            edit={false}
          />
          <p className="price">$100</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="add" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
