import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


const MyOrders = () => {
  const { allAuthInfo } = useAuth();
  const { user } = allAuthInfo;
  const { email } = user;
  
  const [myOrders, setMyOrders] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/myorders/${email}`)
      .then((res) => {
        setMyOrders(res.data);
      });
  }, [email]);

  function cancel(id) {
    const confirmation = window.confirm("Are you sure to delete?");
    if (confirmation) {
      axios
        .delete(`http://localhost:5000/deletion/${id}`)
        .then((res) => {
          if (res.data === 1) {
            const remaining = myOrders.filter((order) => order._id !== id);
            setMyOrders(remaining);
            alert("Successfully Deleted!");
          } else {
            alert("Something went wrong!");
          }
        });
    }
  }

  return (
    <>
      <div
        className=""
        style={{
          minHeight: "100vh",
          color: "white !important",
        }}
      >
        
        <div className="mt-5 pt-5">
          <h1 className="text-center text-white mb-3">My Orders</h1>
          <div style={{ width: "100vw", overflow: "auto" }}>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Picture</th>
                  <th scope="col">Details</th>
                  <th scope="col">Price</th>
                  <th scope="col">Buyer</th>
                  <th scope="col">Status</th>
                  
                  <th scope="col">Cancel Order</th>
                </tr>
              </thead>
              <tbody>
                {myOrders?.map((service) => {
                  const { _id, name, price, status, img, description } = service;
                  return (
                    <tr>
                      <td className="td"><img src={img} width="60" alt="" /></td>
                      <td className="td">{description.slice(0,100)}</td>
                      <td className="td">{price}</td>
                      <td className="td">{name}</td>
                      <td className="text-primary">{status}</td>
                      <td className="td">
                        <button
                          onClick={() => cancel(_id)}
                          className="btn btn-danger"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default MyOrders;