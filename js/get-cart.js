import axios from 'axios'


function getCarts() {
    const carts = axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    )
    .then(resp => {
        console.log(resp.data)
    }) 
}

getCarts()
