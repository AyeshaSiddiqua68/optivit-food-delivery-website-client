import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const AddCustomer = () => {
    const { user } = useFirebase();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        // data.status=user?.email;
        fetch("http://localhost:5000/addCustomer",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>console.log(result));
        console.log(data);
    };
    return (
        <div>
            <h1 className="text-center text-info mt-5">Please register here!</h1>
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
                            <input
                                {...register("email", { required: true })}
                                className="w-100 p-2 m-2"
                                placeholder="Email"
                            />
                            <br />
                            <input
                                {...register("date", { required: true })}
                                className="w-100 p-2 m-2"
                                placeholder="Date"
                                defaultValue={new Date()}
                            />
                            <br />
                            <input
                                {...register("address", { required: true })}
                                className="w-100 p-2 m-2"
                                placeholder="Address"
                            />
                            <br />
                            <input
                                {...register("description", { required: true })}
                                className="w-100 p-2 m-2"
                                placeholder="Description"
                            />
                            <br />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input type="submit" className="btn btn-info w-50" />

                            <p className="mb-2 m-2">
                                already have an account?{" "}
                                <Link to="/login">
                                    <span className="text-danger">
                                        create account
                                    </span>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCustomer;