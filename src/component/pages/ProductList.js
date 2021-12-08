import React, { useState } from "react";
import "../styles/productList.css";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "./dummyData";

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "Product Name",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img src={params.row.img} alt="avatar" className="productListImg" />
            {params.row.productName}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 300,
      editable: true,
    },
    {
      field: "status",
      headerName: "status",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListEdit">
            <Link to={"/product/" + params.row.id}>
              <button className="userListEditBtn">Edit</button>
            </Link>
            <DeleteOutline onClick={() => handleDelete(params.row.id)} />
          </div>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={7}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
