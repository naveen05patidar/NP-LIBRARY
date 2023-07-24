import axios from "axios";
import React, { useState } from "react";
import Header from "../Header";

const AddData = () => {
    const [data, setData] = useState(null);
    const [name, setName] = useState(null);
    const [file, setFile] = useState(null);
    const [exDate, setExDate] = useState("No Expire");
    const [docType, setDocType] = useState();



   
    console.log(docType);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        
        formData.append('docType', docType);
        formData.append('name', name);
        formData.append('exDate', exDate);
        formData.append('file', file);

        

       await axios.post('http://localhost:5000/pan',formData)

       .then((res)=>{
        console.log('data saved');
        alert('data saved');
       }).catch((err)=>{
        console.log(err);
       })
        console.log(formData);
    }

    return (
        <div>
            <Header></Header>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Select Document Type</label>
                            <select onChange={(e) => setData(e.target.value)}>
                                <option hidden>Select Documents</option>
                                <option value={"aadhar"}>Aadhar Card</option>
                                <option value={"pan"}>Pan</option>
                                <option value={"rc"}>RC</option>
                                <option value={"dl"}>Driving License</option>
                                <option value={"passport"}>Passport</option>
                            </select>
                        </div>
                        <div>
                        {
                                data === "aadhar" ? <div>
                                    <div><label>Aadhar name*</label>
                                        <input type="text" onChange={(e) => {setName(e.target.value); setDocType("Aadhar Card")}} placeholder="Inter Aadhar Name "></input>
                                    </div>
                                    <div>
                                        <label>Upload file*</label>
                                        <input type="file" onChange={e => setFile(e.target.files[0])}></input>
                                    </div>
                                    <div>
                                        <button name="submit">Submit</button>
                                    </div>
                                </div> : ""
                            }
                            {
                                data === "pan" ? <div>
                                    <div><label>Pan name*</label>
                                        <input type="text" onChange={(e) => {setName(e.target.value); setDocType("Aadhar Card")}} placeholder="Inter Pan Name "></input>
                                    </div>
                                    <div>
                                        <label>Upload file*</label>
                                        <input type="file" onChange={e => setFile(e.target.files[0])}></input>
                                    </div>
                                    <div>
                                        <button name="submit">Submit</button>
                                    </div>
                                </div> : ""
                            }
                        </div>
                        <div>
                            {
                                data === "rc" ? <div>
                                    <div><label>RC name*</label>
                                        <input type="text" onChange={(e) => {setName(e.target.value); setDocType("Aadhar Card")}} placeholder="Inter RC Name "></input>
                                    </div>
                                    <div>
                                        <label>Upload file*</label>
                                        <input type="file" onChange={e => setFile(e.target.files[0])}></input>
                                    </div>
                                    <div>
                                        <label>Expiry Date*</label>
                                        <input type="date" onChange={(e) => setExDate(e.target.value)}></input>
                                    </div>
                                    <div>
                                        <button name="submit">Submit</button>
                                    </div>
                                </div> : ""
                            }
                        </div>
                        <div>
                            {
                                data === "dl" ? <div>
                                    <div><label>Driving license name*</label>
                                        <input type="text" onChange={(e) => {setName(e.target.value); setDocType("Aadhar Card")}} placeholder="Inter Driving license Name "></input>
                                    </div>
                                    <div>
                                        <label>Upload file*</label>
                                        <input type="file" onChange={e => setFile(e.target.files[0])} ></input>
                                    </div>
                                    <div>
                                        <label>Expiry Date*</label>
                                        <input type="date" onChange={(e) => setExDate(e.target.value)} ></input>
                                    </div>
                                    <div>
                                        <button name="submit">Submit</button>
                                    </div>
                                </div> : ""
                            }
                        </div>
                        <div>
                            {
                                data === "passport" ? <div>
                                    <div><label>Passport name*</label>
                                        <input type="text" onChange={(e) => {setName(e.target.value); setDocType("Aadhar Card")}} placeholder="Inter Passport Name "></input>
                                    </div>
                                    <div>
                                        <label>Upload file*</label>
                                        <input type="file" onChange={e => setFile(e.target.files[0])} ></input>
                                    </div>
                                    <div>
                                        <label>Expiry Date*</label>
                                        <input type="date" onChange={(e) => setExDate(e.target.value)} ></input>
                                    </div>
                                    <div>
                                        <button name="submit">Submit</button>
                                    </div>
                                </div> : ""
                            }
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddData;
