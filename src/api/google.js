import axios from 'axios'
import 'dotenv/config'

const key = process.env.GOOGLE_API_KEY;

export default axios.create({
    method: 'post',
    baseURL: 'https://translation.googleapis.com/language/translate/v2',
    format: 'text',
    key
})