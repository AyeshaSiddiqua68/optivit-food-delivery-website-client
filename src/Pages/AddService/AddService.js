// import React from 'react';
//  import axios from 'axios';
// import './AddService.css'
// import { useForm } from "react-hook-form";
// import useFirebase from '../../hooks/useFirebase';

// const AddService = () => {
//     const { user } = useFirebase();
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();

//     const onSubmit = data => {
//         axios.post('http://localhost:5000/foods',data)
//         .then(res=>{
//             if(res.data.insertetId){
//                 alert('Added Successfully')
//             }
//         })
//     };
//     return (
//         <div className="container  p-5">
//             <h1 className="mt-5 text-center fw-bold">Add a brand new item!</h1>
//             <div className="login-box form-background m-auto mt-5 w-100">
//                 <div className="order-box border border d-flex align-items-center justify-content-center">
//                     <div className="login-form">
//                         <form onSubmit={handleSubmit(onSubmit)}>

//                             <input
//                                 {...register("name", { required: true, maxLength: 20 })}
//                                 className="w-100 p-2 m-2"
//                                 placeholder="Name"
//                             />
//                             <br />
//                             <input
//                                 {...register("price", { required: true })}
//                                 className="w-100 p-2 m-2"
//                                 placeholder="Price"
//                             />
//                             <br />
//                             <input
//                                 {...register("description")}
//                                 className="w-100 p-2 m-2"
//                                 placeholder="Description"
//                             />
//                             <br />
//                             <input
//                                 {...register("image", { required: true })}
//                                 className="w-100 p-2 m-2"
//                                 placeholder="Image Link"
//                             />


//                             {errors.exampleRequired && <span>This field is required</span>}

//                             <input type="submit" value="Submit" className="btn-read-more w-50" />
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddService;