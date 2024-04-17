const CreateTokenUser =(user)=>{
     
    return {name:user.firstname,id:user._id,role:user.role};
}
module.exports = CreateTokenUser;