 
import {ADD_TO_CART,CALCULATE_ITEMS,add_to_WishList,add_to_Cart_to_WishList,add_address} from "../actions"

export const reducer =(state,action)=>{
    if(action.type==ADD_TO_CART){
        const {_id,amount,itemSize,mainColor,singleProduct} = action.payload;
        const temp = state.cart.find((item)=>{
            return item.id===_id+mainColor;
        }) 
        if(temp){ 
            const data = state.cart.map((item)=>{
                if(item.id===_id+mainColor){
                    let amt = item.amount+amount;
                    if(amt>singleProduct.inventory){
                        amt = singleProduct.inventory;
                    }
                    return {...item,amount:amt}
                }else  return {...item}
            })
            return  {...state,cart:data}
        }
        else{
            const newItem = {
                id:_id+mainColor,
                mainId : _id,
                amount:amount,
                size:itemSize,
                color:mainColor,
                desp:singleProduct.description,
                title:singleProduct.title,
                image:singleProduct.image?.[0],
                price:singleProduct.price
            }
            return {...state,cart:[...state.cart,newItem]};
        }
    }

    if(action.type===CALCULATE_ITEMS){
        let {totalItem,cartTotal} = state.cart.reduce(
            (total,item)=>{
              const {amount,price} = item;
              total.totalItem +=amount;
              total.cartTotal += amount*price;
              return total;
            },{
              totalItem:0,
              cartTotal:0,
            }
          ) 
          return {...state,totalItems:totalItem,totalAmount:cartTotal}
        }

        if(action.type==add_to_WishList){
            const data = action.payload;
            const temp = state.wishlist.find((item)=>item.id==action.payload.id)
            if(temp){
                const temp2 = state.wishlist.filter((item)=>item.id!==action.payload.id);
                return {...state,wishlist:temp2}
            } 
          return {...state,wishlist:[...state.wishlist,data]}
        }

        if(action.type==add_to_Cart_to_WishList){
              state.wishlist.map((item)=>{
                if(state.cart.includes(item.id)){
                    console.log(true);
                }else console.log(false);
              })
              return {...state}
        }

        if(action.type===add_address){
            return {...state,address:[action.payload]}
        }
        
    throw new Error(`no matching ${action.type} action type `)
}