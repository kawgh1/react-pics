// all the code related to configuring axios for use in calling unsplash api
import axios from 'axios'

// create an instance of the axios client with preset default properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID TxEHhTfNK3GkOTUMi0uK5u5mKrDKZv9KRQ-xydovOLk'
    }
});