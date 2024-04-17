export const uniqueValues = (product,type)=>{
    let temp = product.map((item)=>item[type]);
    if(type==="size"){
        temp = temp.flat();
    }
    if(type==="colors"){
        temp = temp.flat();
    }
    if(type==="category"){
        temp = temp.flat();
    }
    return temp = ['All',...new Set(temp)];
  }