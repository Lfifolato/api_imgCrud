import Env from '@ioc:Adonis/Core/Env'
import { v2 as cloudinary } from 'cloudinary'

const configure = cloudinary.config({
  cloud_name: Env.get('CLOUD_NAME'),
  api_key: Env.get('API_KEY'),
  api_secret: Env.get('API_SECRET'),
  secure: true,
})

export default configure
