import BookRental from "./bookRental.model"

interface User{
    id : number,
    name : string,
    email : string,
    rentals : BookRental[]
}

export default User;