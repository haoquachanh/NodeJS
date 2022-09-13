import pool from "../configs/connectDB";

// let getHomePage = (req,res)=> {
//     let data=[];
//     connection.query(
//         'SELECT * FROM `users` ',
//         function(err, results, fields){
//             // console.log('>>>> check data')
      
//             data = results.map((row)=> {return row})
//             // 
//             return res.render('index.ejs', {usersData: data})
//         }
//     )
    
// }

let getHomePage = async (req,res)=>{

    const [rows,fields]=await pool.execute(`SELECT * FROM users`)
    return res.render('index.ejs', {usersData: rows})
}

let getDetailPage = async (req,res)=>{
    let id = req.params.userId;
    console.log(id)
    let [user]= await pool.execute(`select * from users where id = ?`,[id])
    console.log(user)
    return res.send('a')
}

let getCreateNewUser = async (req,res)=>{
    console.log('>> req: ', req.body)
    let {firstName,lastName,email,address}=req.body;
    await pool.execute(`insert into users(firstName, lastName, email, address) values(?,?,?,?)`,[firstName, lastName, email, address])

    return res.redirect('/')
}

let deleteUser = async(req,res) => {
    // res.send(`ok ?? === ${req.body.userId}`)
    let userId=req.body.userId;
    await pool.execute('delete from users where id=?',[userId])
    return res.redirect('/');
}

let editUser=async(req,res)=>{
    // res.send(`ok ? = ${req.params.iduser}`)
    let idd=req.params.iduser;
    
    // console.log(req.params.iduser)
    // console.log(idd)/
    let [user]= await pool.execute('select * from users where id=?',[idd])

    return res.render('update.ejs',{data: user[0]})  
}

let postUpdateUser=async(req,res)=>{
    let {firstName,lastName,email,address,id} = req.body
    // console.log(req.body)
    await pool.execute('update users set firstName = ?, lastName=?, email=?, address=? where id=?',[firstName,lastName,email,address,id])
    res.redirect('/')
}
module.exports = {
    getHomePage, getDetailPage, getCreateNewUser,deleteUser,editUser,postUpdateUser
}