const users=require('../users.json')
function getUser(req,res){
    try{
        res.json(users);

    }
    catch(err){
        console.log(err)

    }

}
module.exports={
    getUser
}