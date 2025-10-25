import Book from "../models/book.model";

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

export { isBook }; 
