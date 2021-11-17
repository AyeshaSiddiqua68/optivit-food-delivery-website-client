import React, { useEffect, useState } from "react";
import axios from "axios";

//Manage all orders
const ManageAllOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [confirmed, setConfirmed] = useState(0);
    useEffect(() => {
        axios
            .get("http://localhost:5000/orders")
            .then((res) => {
                setMyOrders(res.data);
            });
    }, [confirmed]);

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
    function confirmation(id) {
        axios
            .patch(`http://localhost:5000/confirmation/${id}`)
            .then((res) => {
                if (res.data === 1) {
                    setConfirmed(res.data);
                    alert("Order confirmed successfully!");
                } else {
                    alert("Already Confirmed!");
                }
            });
    }

    return (
        <>
            <div className="bg-light" style={{ minHeight: "100vh" }}>
                <div className="mt-5 pt-5">
                    <h1 className="text-center text-primary fw-bold mb-4">Manage All Orders</h1>
                    <div style={{ width: "100vw", overflow: "auto" }}>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Food Picture</th>
                                    <th scope="col">Food Price</th>
                                    <th scope="col">Buyer's Photo</th>
                                    <th scope="col">Buyer's Name</th>
                                    <th scope="col">Buyer's Phone</th>
                                    <th scope="col">Buyer's Email</th>
                                    <th scope="col">Order Status</th>
                                    <th scope="col">Confirm Order</th>
                                    <th scope="col">Cancel Order</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myOrders?.map((service) => {
                                    const {
                                        _id, img, profile, name, email, phone, price,
                                        status,
                                    } = service;
                                    return (
                                        <tr>
                                            <td><img src={img} width="50" alt="" /></td>
                                            <td>{price}</td>
                                            <td>
                                                <img width="50px" src={profile} alt="" />
                                            </td>
                                            <td><p className="m-0 mt-2"> {name}</p></td>
                                            <td>{phone}</td>
                                            <td>{email}</td>
                                            <td className="text-primary">{status}</td>
                                            <td>
                                                <button
                                                    onClick={() => confirmation(_id)}
                                                    className="btn btn-primary"
                                                >
                                                    Confirm
                                                </button>
                                            </td>
                                            <td>
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

export default ManageAllOrders;