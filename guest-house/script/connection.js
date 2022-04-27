const mongoose = require('mongoose')

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ignou_assignment', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',function(err){
  console.log('Error', err);
})

// Server
// app.listen(8000,function(){
//   console.log('Server is Up')
// })

module.exports.mongoose= mongoose;
