module.exports = {
  reactStrictMode: true,
  //Acept localhost backend picture
  images: {
    domains: [
      'localhost',
      'i.scdn.co',
      'shrouded-hollows-25451.herokuapp.com',
      'res.cloudinary.com',
    ],
  },
  env: {
    BACKEND_URL: 'https://shrouded-hollows-25451.herokuapp.com',
  },
};
