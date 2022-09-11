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

    return res.send('Added to DB')
}

module.exports = {
    getHomePage, getDetailPage, getCreateNewUser
}