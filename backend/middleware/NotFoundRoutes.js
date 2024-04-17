const notFound= async(req,res)=>{
    res.status(404).json('route doesn\'t exist');
}
module.exports = notFound;