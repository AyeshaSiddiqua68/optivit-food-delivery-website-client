import React, { useState } from 'react';
import Foods from '../Foods/Foods';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import AllCustomers from './AllCustomers/AllCustomers';
import './AdminDashboard.css'

const AdminDashboard = () => {
    const[manage, setManage]=useState("allCustomers");
    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3">
                            <div className="admin-area p-1">
                                <h5>Dashboard</h5>
                                <div className="all-menu mt-4">
                                    <li onClick={()=> setManage("allCustomers")}
                                    className="admin-menup-3">
                                        All Customers 
                                    </li>
                                    <li onClick={()=> setManage("placeOrder")}
                                    className="admin-menup-3">
                                       Place Order
                                    </li>
                                    <li onClick={()=> setManage("control")}
                                    className="admin-menup-3">
                                       Manage Foods
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center">
                            <div className="right-section">
                             {manage === "placeOrder" && <PlaceOrder></PlaceOrder>}
                             {manage === "control"&& <Foods></Foods>}
                             {manage==="allCustomers"&& <AllCustomers></AllCustomers>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;