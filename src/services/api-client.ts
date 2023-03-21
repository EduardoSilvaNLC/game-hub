import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'293c8a1015854d55a4dc2d7bc5c6da83'
    }
})