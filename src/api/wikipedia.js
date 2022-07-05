import axios from 'axios'
const linkmaybe = 'https://en.wikipedia.org/w/api.php'

export default axios.create({
    baseURL: linkmaybe,
    params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json'
    }
})