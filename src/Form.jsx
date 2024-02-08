import { useState} from "react";
import {updateMobile,updateName,withdraw,deposit,reset} from "./store";
import { useDispatch } from "react-redux";

   export default function Form(){
    const [amount,setAmount] =useState(""); 
       const [fullName,setFullName] =useState("");
       const [mobile,setMobile]= useState(""); 
       
       let dispatch=useDispatch();

      

       
    return(
       
    <>
    <div className=" container">
        <h2>Account Form</h2>
        <div className="row">
            <div className="col-5">
            <input type="number" className="form-control" placeholder="Enter amount"
            value={amount}
            onChange={(e)=>{
                let data= e. target.value;
                setAmount(data);

            }}
            />
            </div>
            <button className="btn btn-danger col-1 mx-2"
            onClick={()=>{
                dispatch(withdraw(amount));
                setAmount("");
            }}

              
              >withdraw</button>
              
                
            <button className="btn btn-primary col-1 "
            onClick={()=>{
                dispatch(deposit(amount));
                setAmount("");
            }}
           
            >deposite</button>
            
        </div>
        <div className="row mt-2">
            <div className="col-5">
            <input type="text" className="form-control" placeholder="Enter name"
            value={fullName}
            onChange={(e)=>{
                let data=e.target.value;
                setFullName(data);
            }}/>
            </div>
            <button className="btn btn-primary col-1 mx-2"
            onClick={()=>{
                dispatch(updateName(fullName));
                setFullName("");
            }}
            
            >update</button>
            
            
        </div>
        <div className="row mt-2">
            <div className="col-5">
            <input type="number" className="form-control" placeholder="Enter mobile"
            value={mobile}
            onChange={(e)=>{
                let data=e.target.value;
                setMobile(data);
            }}/>
            </div>
            <button className="btn btn-primary col-1 mx-2"

             onClick={()=>{
                dispatch(updateMobile(mobile));
                setMobile("");

                 
            }}
            
            >update</button>
            
            
        </div>
        <div className="mt-2">
            <button
            className="btn btn-danger col-1"
            onClick={()=>{
                dispatch(reset());
            }}
            >
                reset
            </button>
        </div>
        
            
            
            
    </div>
    </>
    );

}