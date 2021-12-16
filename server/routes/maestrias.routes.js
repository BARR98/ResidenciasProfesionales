
const e = require('express');
const express =  require('express');
const router  = express.Router();

//INCLUIR EL CONTROLADOR 
const maestrias = require('../controllers/maestriascontroller');
//Definir la ruta principal de la aplicacion 

//OBTENER TODOS LOS maestrias
router.get('/', maestrias.getMaestrias);


//Crear un maestria
router.post('/',maestrias.createMaestria);

//obtener maestria
router.get('/:id',maestrias.getMaestria);

//actualizar maestria
router.put('/:id',maestrias.updateMaestria);

//eliminar maestria
router.delete('/:id',maestrias.deleteMaestria);

//exportar modulos
module.exports = router;