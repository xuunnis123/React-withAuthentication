//keys.js - figure out what set of credentials to return
//
// module.exports = {
//   googleClientID:
//     '704924389488-8i5etm55r9qife033gtbvsu0h1ievnhc.apps.googleusercontent.com',
//   googleClientSecret: 'In0P7h2q1Jp4nTNYvFlnCLyx',
//   mongoURI:'mongodb+srv://demo1:HM1cPvcgtymMRymJ@emaily-exvpm.mongodb.net/test?retryWrites=true&w=majority',
//   cookieKey:'redacted',

  //mongodb+srv://myuser:<password>@cluster0-xnujx.mongodb.net/admin?retryWrites=true&w=majority
// };
if(process.env.NODE_ENV === 'production'){
  //we are in production - return the prod set of keys
  module.exports=require('./prod');
}else{
  //we are in developement -return the dev keys!!
  module.exports=require('./dev');

}
