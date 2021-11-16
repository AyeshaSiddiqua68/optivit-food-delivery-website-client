// import React, { useEffect, useState } from 'react';
// import Service from '../Service/Service';
// //home page services part
// const Services = () => {
//     const [services, setServices] = useState([])
//     useEffect(() => {
//         fetch('https://stormy-savannah-30546.herokuapp.com/foods')
//             .then(res => res.json())
//             .then(data => setServices(data))
//     }, [])
//     return (
//         <div id="services" className=" container ">
//             <h1 className="my-5 section-title">Popular Menu</h1>
//             <div className='row'>
//                 {
//                     services.map(service => <Service key={service.id}
//                         service={service}></Service>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Services;