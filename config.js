const config = {
  mongoDB: {
    username: process.env.MONGODB_USER || 'amaneiro7',
    password: process.env.MONGODB_PASS || 'OL2zAEMYH5PJON36',
    host: process.env.MONGODB_HOST || 'cluster0.trucfof.mongodb.net',
    uri: process.env.MONGODB_URI || 'mongodb+srv://amaneiro7:OL2zAEMYH5PJON36@cluster0.trucfof.mongodb.net/'
  },
  port: process.env.PORT || 3000
}

export default config
