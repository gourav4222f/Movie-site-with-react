import axios from "axios";




const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmYxNzY1M2JiZTczZTc4NzQ1MzIxMjc3ZGQ1MDE2YiIsIm5iZiI6MTcyOTU5MTUwMS40MTI4MTksInN1YiI6IjY3MTc3NzIzMDljNDk4ZmQyOWI3ZWUxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7XwWTA7TDWPGaN_p3PZ59NEWd5FlhGmKimDJt8p_vT4'
    }
})

export default instance;