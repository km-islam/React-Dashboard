import React from "react";
import "../styles/product.css";
import { Link } from "react-router-dom";
import ChartData from "./ChartData";
import { productData } from "./dummyData";
import { Publish } from "@material-ui/icons";

const Product = () => {
  return (
    <div className="product">
      <div className="eachUserTitle">
        <h1>Edit User</h1>
        <Link to="/newproduct" className="createUserBtn">
          Create
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <ChartData
            data={productData}
            dataKey="Sales"
            title="Sales Performance"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="/assets/images/product_1.jpg" alt="product" />
            <p>Apple Airpods</p>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <p>id:</p>
              <span>123</span>
            </div>
            <div className="productInfoItem">
              <p>sales:</p>
              <span>3123</span>
            </div>
            <div className="productInfoItem">
              <p>active:</p>
              <span>yes</span>
            </div>
            <div className="productInfoItem">
              <p>In Stock:</p>
              <span>No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpods" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src="/assets/images/product_1.jpg" alt="product" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" />
            </div>
            <button className="productBtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
