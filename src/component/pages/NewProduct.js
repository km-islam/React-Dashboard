import React from "react";
import "../styles/newProduct.css";

const NewProduct = () => {
  return (
    <div className="newproduct">
      <h1>New User</h1>
      <form className="newproductForm">
        <div className="newproductItem">
          <label>Image</label>
          <input type="file" className="newProductImgUpload" />
        </div>
        <div className="newproductItem">
          <label>Product Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="newproductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="newproductItem">
          <label>Active</label>
          <select id="active" name="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newproductButton">
          <button className="newproductBtn">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
