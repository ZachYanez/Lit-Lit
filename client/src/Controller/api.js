import axios from 'axios';


export default {

        getVolume: function () {
            axios
            .get("https://www.googleapis.com/books/v1/volumes?q=flow+intitle&key=AIzaSyAgin7ixM-dGkGL4fUI-MODz5cg6__2c7Q"
            )
        }


}