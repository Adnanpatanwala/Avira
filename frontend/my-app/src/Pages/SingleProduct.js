import React, { useEffect } from "react";
import { useGlobalProductContex } from "../Context/ProductContex";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import SinglePageContent from "../Components/SinglePageContent";
 

const SingleProduct = () => {
  const { SingleProductFetch, isloading, singleProduct } = useGlobalProductContex();
  const { id } = useParams();
  useEffect(() => {
    SingleProductFetch(id);
  },[]);

  if (isloading) {
    return (
      <div className="backloader">
        <Loading />
      </div>
    );
  }
   
 
    return (
      <SinglePageContent singleProduct={singleProduct}/>
    );
  }


export default SingleProduct;
 