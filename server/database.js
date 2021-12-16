const mongoose =  require('mongoose');

//configuracion de los parametros de la base de datos
url = 'mongodb://localhost/residencias';
dbparams = {
    
    useNewUrlParser: true ,
    
    useUnifiedTopology: true
};

mongoose.connect(url,dbparams)
    .then(db => console.log('BD esta conectada'))
    .catch(err => console.log(err));
module.exports = mongoose;  