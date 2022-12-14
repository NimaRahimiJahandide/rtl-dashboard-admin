import React, { useEffect, useState } from "react";
import DeleteModal from "./../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "./../EditModal/EditModal";
import Errorbox from "../Errorbox/Errorbox";
import { AiOutlineDollarCircle } from "react-icons/ai";

import "./ProductsTable.css";

export default function ProductsTable({ allProducts, getAllProducts }) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [productID, setProductID] = useState(null);
  const [mainProductInfos, setMainProductInfos] = useState({});
  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewSale, setProductNewSale] = useState("");
  const [productNewColors, setProductNewColors] = useState("");

  const deleteModalCancelAction = () => {
    setIsShowModal(false);
  };

  const deleteModalSubmitAction = () => {
    console.log(productID);
    fetch(`http://localhost:8000/api/products/${productID}/`, {
      method: "Delete",
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowModal(false);
        getAllProducts();
      });
  };

  const closeDetailsModal = () => {
    setIsShowDetailModal(false);
  };

  const updateProductInfos = (event) => {
    event.preventDefault();

    const productNewInfos = {
      title: productNewTitle,
      price: productNewPrice,
      count: productNewCount,
      img: productNewImg,
      popularity: productNewPopularity,
      sale: productNewSale,
      colors: productNewColors,
    };

    fetch(`http://localhost:8000/api/products/${productID}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productNewInfos)
    })
      .then((res) => res.json)
      .then((result) => {
        console.log(result);
        getAllProducts();
      });

    setIsShowEditModal(false);
  };

  return (
    <>
      {allProducts.length ? (
        <table className="products-table">
          <thead>
            <tr className="products-table-heading-tr">
              <th className="product-heading-th">??????</th>
              <th className="product-heading-th">??????</th>
              <th className="product-heading-th">????????</th>
              <th className="product-heading-th">????????????</th>
            </tr>
          </thead>
          {allProducts.map((product) => (
            <tbody key={product.id}>
              <tr className="products-table-tr">
                <td className="product-table-td">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="products-table-img"
                  />
                </td>
                <td className="product-table-td">{product.title}</td>
                <td className="product-table-td">{product.price} ??????????</td>
                <td className="product-table-td">{product.count}</td>
                <td className="product-table-td">
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDetailModal(true);
                      setMainProductInfos(product);
                    }}
                  >
                    ????????????
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowModal(true);
                      setProductID(product.id);
                    }}
                  >
                    ??????
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowEditModal(true);
                      setProductID(product.id);
                      setProductNewTitle(product.title);
                      setProductNewPrice(product.price);
                      setProductNewCount(product.count);
                      setProductNewImg(product.img);
                      setProductNewPopularity(product.popularity);
                      setProductNewSale(product.sale);
                      setProductNewColors(product.colors);
                    }}
                  >
                    ????????????
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : (
        <Errorbox msg="?????? ???????????? ???????? ??????" />
      )}

      {isShowModal && (
        <DeleteModal
          submit={deleteModalSubmitAction}
          cancel={deleteModalCancelAction}
          title="?????? ???? ??????  ?????????????? ??????????"
        />
      )}
      {isShowDetailModal && (
        <DetailsModal onHide={closeDetailsModal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>??????????????</th>
                <th>????????</th>
                <th>??????????????</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>%{mainProductInfos.popularity}</td>
                <td>{mainProductInfos.sale}</td>
                <td>{mainProductInfos.colors}</td>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
      )}
      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateProductInfos}
        >
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="?????????? ???????? ????  ???????? ????????"
              className="edit-product-input"
              value={productNewTitle}
              onChange={(event) => setProductNewTitle(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="???????? ???????? ????  ???????? ????????"
              className="edit-product-input"
              value={productNewPrice}
              onChange={(event) => setProductNewPrice(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="???????????? ???????? ????  ???????? ????????"
              className="edit-product-input"
              value={productNewCount}
              onChange={(event) => setProductNewCount(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="???????? ???????? ???????? ????  ???????? ????????"
              className="edit-product-input"
              value={productNewImg}
              onChange={(event) => setProductNewImg(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="?????????? ?????????????? ???????? ????  ???????? ????????"
              className="edit-product-input"
              value={productNewPopularity}
              onChange={(event) => setProductNewPopularity(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="?????????? ???????? ???????? ????  ???????? ????????"
              className="edit-product-input"
              value={productNewSale}
              onChange={(event) => setProductNewSale(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="?????????? ?????? ???????? ???????? ????  ???????? ????????"
              className="edit-product-input"
              value={productNewColors}
              onChange={(event) => setProductNewColors(event.target.value)}
            />
          </div>
        </EditModal>
      )}
    </>
  );
}
