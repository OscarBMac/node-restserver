process.env.PORT = process.env.PORT || 3000;


//=======================================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';



//========================================================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:123A56@ds125673.mlab.com:25673/cafe';
}
process.env.URLDB = urlDB;