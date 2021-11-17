import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
  const history = useHistory();
  

  const onSubmit = (data) => {
    // data.rating = 0;
    // data.totalReview = 0;
    axios
      .post("http://localhost:5000/addService", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert(" A new service added successfully !");
          history.push("/home");
        } else {
          alert("something went wrong!Try again later!");
        }
      });
    reset();
  };
  return (
    <>
      <div
        className="d-flex bg-light justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div style={{ maxWidth: "700px" }} className="mt-5 w-100 mx-auto">
          <h1 className="text-center text-primary fw-bold w-100 mb-3">Add a brand new food item</h1>
          <div >
            <form className="d-block  w-100" onSubmit={handleSubmit(onSubmit)}>
              <label className="d-block mb-4" htmlFor="title">
                <h5 className="fw-bold">Write your new item's title</h5>
                <input
                  required
                  className="form-control w-100 d-block"
                  id="title"
                  placeholder="Food title here"
                  {...register("name")}
                />
              </label>

              <label className="d-block mb-4" htmlFor="price">
                <h5 className="fw-bold">Select a price for your new item</h5>
                <input
                  required
                  type="number"
                  className="form-control w-100 d-block"
                  id="price"
                  placeholder="Food price here"
                  {...register("price")}
                />
              </label>

              <label className="d-block mb-4" htmlFor="img">
                <h5 className="fw-bold">Drop your new item's picture</h5>
                <input
                  required
                  type="img"
                  className="form-control w-100 d-block"
                  id="photo"
                  placeholder="Food picture here"
                  {...register("img")}
                />
              </label>

              <label className="d-block mb-4" htmlFor="desc">
                <h5 className="fw-bold">Write your new item's short description</h5>
                <textarea
                  className="form-control w-100 d-block"
                  id="desc"
                  placeholder="Food description here"
                  {...register("description")}
                ></textarea>
              </label>

              <input
                required
                className="btn rounded mb-3 btn-primary border-0 rounded-0 w-100 d-block"
                type="submit"
                value="Add Now"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddService;
