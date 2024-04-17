import {ProductFetching,Loading,ProductError,SingleProductFetching,add_to_WishList} from "../actions";

export const reducer =(state,action)=>{
    if(action.type==Loading){
        return {...state,isloading:true};
    }
    if(action.type==ProductFetching){
        return {...state,product:[...action.payload],isloading:false};
    }
    if(action.type==ProductError){
        return {...state,error:action.payload,isloading:false};
    }
    if(action.type==SingleProductFetching){

        console.log(state);
        return {...state,singleProduct:{...action.payload.data},isloading:false};
    }

     
    throw new Error(`no matching ${action.type} action type `)
}