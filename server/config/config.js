process.env.PORT = process.env.PORT || 3000;


//=======================================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//========================================================
//Vencimineto del Token
process.env.CADUCIDAD_TOKEN = (60 * 60 * 24 * 30);




//========================================================

// 
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';



//========================================================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;



//=====================================
//GOOGLE

process.env.CLIENT_ID = process.env.CLIENT_ID || '584282521735-5v5f69dmefinjm0jc6cqfjjeq1qgfgon.apps.googleusercontent.com';