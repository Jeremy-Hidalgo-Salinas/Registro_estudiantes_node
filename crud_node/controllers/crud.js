const conexion = require('../database/db');

exports.save = (req, res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const carrera = req.body.carrera;
    
    conexion.query('INSERT INTO estudiantes SET ?', {nombre:nombre, apellido:apellido, carrera:carrera}, (error,results)=>{

        if (error){
            console.log(error);
        }else{
            res.redirect('/');
        }

    })
}

exports.update = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const carrera = req.body.carrera;
    

    conexion.query('UPDATE estudiantes SET ? WHERE id = ?', [{nombre:nombre, apellido:apellido, carrera:carrera}, id], (error,results)=>{

        if (error){
            console.log(error);
        }else{
            res.redirect('/');
        }

    })
}

exports.delete = (req, res)=>{
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('INSERT INTO users SET ?', {user:user, rol:rol}, (error,results)=>{

        if (error){
            console.log(error);
        }else{
            res.redirect('/');
        }

    })
}