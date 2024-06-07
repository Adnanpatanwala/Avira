import axios from 'axios';
import React, { Children, createContext, useContext, useEffect, useState } from 'react'

const OrderCont = createContext();
const OrderContext = ({children}) => {

    const [order,setOrder] = useState([]);
    const [orderLoading,setOrderLoading] = useState(true);
    
    const [singleOrder,singleSetOrder] = useState([]);
    const [singleOrderLoading,singleSetOrderLoading] = useState(true);


    const getSingleOrder = async(id) =>{
        try {
            singleSetOrderLoading(true);
            const data = await axios.post(`${process.env.REACT_APP_DOMAINURL}/api/v1/order/singleorder`,{
                id:id
            },{
                headers: {
                    'Content-Type': 'application/json',
                  }, 
                  withCredentials:true,
            })
            if(data){
                singleSetOrder(data?.data);
                singleSetOrderLoading(false);
                  
            }
            
        } catch (error) {
            // singleSetOrderLoading(false); 
            alert(error)
            console.log(error);
        }
    }

    const getOrder = async()=>{
        try {
            const data = await axios.get(`${process.env.REACT_APP_DOMAINURL}/api/v1/order`,{
                headers: {
                    'Content-Type': 'application/json',
                  }, 
                  withCredentials:true,
            });
            if(data){
                setOrderLoading(false);
                setOrder(data?.data) 
            }
        } catch (error) {
            setOrderLoading(false);
            console.log(error);
        }
    } 

  return ( 
    <OrderCont.Provider value={{
        order,
        orderLoading,
        getOrder,
        getSingleOrder,
        singleOrder,
        singleOrderLoading
    }}>
        {children}
    </OrderCont.Provider>
  )
}

export default OrderContext


export const useOrderContext = ()=>{
    return useContext(OrderCont);
}