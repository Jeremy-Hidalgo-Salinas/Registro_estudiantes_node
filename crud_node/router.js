const express = require('express');
const router = express.Router();
const conexion = require('./database/db')

router.get('/', (req, res)=>{
    conexion.query('SELECT * FROM estudiantes e inner join carreras c on e.carrera = c.id_carrera ', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index', {results:results});
        }
    })
})


router.get('/create', (req, res) =>{
    res.render('create');
})

router.get('/edit/:id', (req, res) =>{
    const id = req.params.id;
    conexion.query('SELECT * FROM estudiantes e inner join carreras c on e.carrera = c.id_carrera WHERE id=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit', {estudiante:results[0]});
        }
    })
})

router.get('/delete/:id', (req, res) =>{
    const id = req.params.id;
    conexion.query('delete FROM estudiantes WHERE id=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    })
})

const crud = require('./controllers/crud'); //esto va a funcionar para llamar los metodos del crud
router.post('/save', crud.save); //hace referencia al crud.js - save
router.post('/update', crud.update); //hace referencia al crud.js - update



module.exports = router; //esto sirve para exportarlo

