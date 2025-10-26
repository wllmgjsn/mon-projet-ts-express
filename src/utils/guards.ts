import Book from "../models/book.model";
import BookRental from "../models/bookRental.model";
import User from "../models/user.model";

function isBook(obj: any): obj is Book {
  return (
    obj &&
    typeof obj.id === "number" &&
    typeof obj.title === "string" &&
    typeof obj.author === "string" &&
    typeof obj.year === "number" &&
    typeof obj.genre === "string"
  );
}

function isUser(obj: any): obj is User {
  return (
    obj &&
    typeof obj.id === "number" &&
    typeof obj.name === "string" &&
    typeof obj.email === "string" &&
    Array.isArray(obj.rentals) &&
    obj.rentals.every(isBookRental)
  );
}

function isBookRental(obj: any): obj is BookRental {
  return (
    obj &&
    typeof obj.id === "number" &&
    typeof obj.userId === "number" &&
    typeof obj.bookId === "number" &&
    !isNaN(Date.parse(obj.startDate)) &&
    !isNaN(Date.parse(obj.endDate))
  );
}


export { isBook, isUser, isBookRental }; 
