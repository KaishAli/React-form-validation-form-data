import axios from 'axios';



export async function axiosMethod() {

    return await axios.get('https://jsonplaceholder.typicode.com/posts');
}
