import axios from 'axios'


function getCarts() {
    const carts = axios.get(
        "http://127.0.0.1:8000/api/films/"
    )
    .then(resp => {
        console.log(resp.data)
    }) 
}

getCarts()
