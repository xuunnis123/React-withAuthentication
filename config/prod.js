//prod.js -production keys there
module.exports = {
  googleClientID:process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI:process.env.MONGO_URI,
  cookieKey:process.env.COOKIE_KEY

  //mongodb+srv://myuser:password@cluster0-xnujx.mongodb.net/admin?retryWrites=true&w=majority
};
