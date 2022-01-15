const express = require('express');
var app = express();

// app.get('/asd',(req, res)=>{
//   res.send('holitas del mar asd');
// });
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
// app.set('porti',4000);
app.use(express.static('public'));

// app.listen(app.get('port'),()=>{
//   console.log('servidor ',app.get('port'));
// });

// app.get('/',(req,res)=>res.render('prod/page/indes.html'));
// app.get('/:handle',(req,res)=>{
//   res.render('${req.params.handle}')
// })


// app.listen(app.get('port'),function(){
//   console.log('servidor escuchando %d' ,app-get('port'))
// })