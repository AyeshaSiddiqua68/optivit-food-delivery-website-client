import React from 'react';
import './PlaceOrder.css'
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';

const PlaceOrder = () => {
    const { user } = useFirebase();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch("http://localhost:5000/placeOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        console.log(data);
    };
    return (
        <div>
            <h1 className="mt-5 text-center">Place an order</h1>
            <div className="login-box m-auto mt-5 w-25">
                <div className="order-box border border d-flex align-items-center justify-content-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input
                                {...register("name", { required: true, maxLength: 20 })}
                                className="w-100 p-2 m-2"
                                placeholder="Name"
                            />
                            <br />
                            {/* <input
                                {...register("email", { required: true })}
                                className="w-100 p-2 m-2"
                                placeholder="Email"
                            />
                            <br /> */}
                            <input
                                {...register("description")}
                                className="w-100 p-2 m-2"
                                placeholder="Description"
                            />
                            <br />
                            <input
                                {...register("image", { required: true })}
                                className="w-100 p-2 m-2"
                                placeholder="Image Link"
                            />


                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add" className="btn btn-info w-50" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;