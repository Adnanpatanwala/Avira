import {UPDATE_FILTER,LOAD_PRODUCTS,FILTER_PRODUCTS} from '../actions'

export const reducer = (state,action)=>{
    if(action.type==UPDATE_FILTER){ 
        const {name,value} = action.payload;
        return {...state,filter:{...state.filter,[name]:value}};
    }
    if(action.type===LOAD_PRODUCTS){ 
        let price = action.payload.map((item)=>item.price);
        let min = Math.min(...price);
        let max = Math.max(...price);
        return {...state,filterproduct:[...action.payload],all_products:[...action.payload],filter:{...state.filter,max_price:max,min_price:min,price:max}};
    }
    if(action.type===FILTER_PRODUCTS){
        const {color,category,size, price} = state.filter;
        let temp = [...action.payload];
        if(color!=='All'){
            temp = temp.filter((item)=>item.colors.find((a)=>a===color));
        }
        return {...state,filterproduct:[...temp]};
    }
    throw new Error(`not action of ${action.type} type found`);
}