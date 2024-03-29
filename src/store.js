import {createSlice ,configureStore} from "@reduxjs/toolkit";


const state={
    balance:0,
    fullName:"",
    mobile:null,
};
const userSlice =createSlice({
    name:"user",
    initialState: state,
    reducers:{
        updateMobile:(state,action)=>{
            state.mobile=action.payload
        },
        updateName:(state,action)=>{
            state.fullName=action.payload
        },
        withdraw:(state,action)=>{
            state.balance=state.balance-action.payload
        },
        deposit:(state,action)=>{
            state.balance=state.balance+ +action.payload
        },
        reset:(state)=>{
            state.fullName="";
            state.mobile=null;
            state.balance=0;

        },
    }

});
console.log(userSlice);

const store=configureStore({
    reducer:{
        user:userSlice.reducer
    }
})
export default store;
export const  {updateMobile,updateName,withdraw,deposit,reset} =
userSlice.actions;

