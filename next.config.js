module.exports = {
  reactStrictMode: true,
  //Acept localhost backend picture
  images: {
    domains: ['localhost', 'i.scdn.co'],
  },
  env: {
    BACKEND_URL: 'http://localhost:1337',
  },
};
