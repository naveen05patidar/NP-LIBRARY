import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header';

export default function ShowDocument() {
    const [cartData, setCartData] = useState([]);

    console.log(cartData);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await axios.get("http://localhost:5000/Route/find")

                if (response.data.success === true) {
                    setCartData(response.data.user)
                }
            } catch (error) {
                console.log(error);
            }

        }
        fetchData();
    }, [])
    const handleRemoveToCard = (id) => {
        axios.delete('http://localhost:5000/Route/delete/'+id)
            .then((res) => {
                console.log("user deleted");
               
                alert('data deleted')
                window.location.reload()
            }).catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
                        <Header></Header>

            <h1>Show Data </h1>
            <div>



                {cartData && cartData.map((item) => (
                    <div key={item._id} class="container-fluid">
                        <div class="row justify-content-center mb-0">
                            <div class="col-md-12 col-xl-10">
                                <div class="card shadow-0 border rounded-3 mt-5 mb-3">
                                    <div class="card-body">

                                        <div class="row">
                                            <div class="col-md-12 col-lg-3 mb-4 mb-lg-0">
                                                <div class="bg-image rounded hover-zoom hover-overlay">
                                                    <img src={`../../backend/uploads/${item.file}`} class="w-100" alt="Product" />
                                                    <a href="#!">
                                                        <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <h5>Category : {item.docType}</h5>
                                                <div class="d-flex flex-row">

                                                    <span>Name : {item.name}</span>
                                                </div>
                                                <div class="d-flex flex-row">

                                                    <span>Expiry Date : {item.exDate}</span>
                                                </div>

                                                <div class="d-flex flex-column mt-4">
                                                    <button class="btn btn-outline-primary btn-sm mt-2" onClick={() => handleRemoveToCard(item._id)}>Remove Data </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}


            </div>
        </div>
    );
}

// data && data.map((item)=>{
//     <div key={item.name} className="card" style={{width:"18rem"}}>
//    <img className="card-img-top" src={`'../../../../backend/uploads/'${item.file}`} alt="Card cap"/>
//    <div className="card-body">
//      <h5 className="card-title">{item.name}</h5>
//      <p className="card-text">{item.exDate}</p>
//      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
//      <button onClick={()=>handleClick(item.name)}>Delete</button>
//    </div>
//  </div>
// })