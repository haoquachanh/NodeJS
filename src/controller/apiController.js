import pool from "../configs/connectDB";

let getAllUsers = async (req,res) => {
    return res.status(200).json({message: 'Kon bo cuo'})
}

let createNewUser = async (req,res) => {
    
    let {firstName,lastName,email,address}=req.body;
    console.log(firstName)
    if (!firstName||!lastName||!email||!address)
    {
        return res.status(404).json({message:'missing require params'})
    }
    await pool.execute(`insert into users(firstName, lastName, email, address) values(?,?,?,?)`,[firstName, lastName, email, address])
    return res.status(200).json({message: 'OK'})
}

module.exports = {
    getAllUsers,
     createNewUser
} 