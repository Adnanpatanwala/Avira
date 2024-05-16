import React, { createContext, useContext, useReducer } from 'react'

const Address = createContext();
const initialState = {
    firstname:'',
    lastname:'',
    address1:'',
    address2:'',
    state:'',
    pincode:'',
    city:'',
    country:'',
}
const reducer = (state,action)=>{
    if(action.type==='ADD_ADDRESS'){
        const {name,value} = action.payload;
        return {...state,[name]:value};
    }
    throw new Error(`No action ${action.type} type found`);
}
const AddressContext = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState);

    const handleChange=(e,name)=>{
        const value = e.target.value;
        dispatch({type:"ADD_ADDRESS",payload:{name,value}})
    }


  return ( 
    <Address.Provider value={{
        ...state,
        handleChange
    }}>
        {children}
    </Address.Provider>
  )
}

export const useAddressContext = ()=>{
    return useContext(Address);
}

export default AddressContext
