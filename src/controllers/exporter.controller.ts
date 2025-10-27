import { Router } from "express";
import { ExporterService } from "../services/exporter.service";
import { Request, Response } from "express";
import { Book } from "../models/book.model";
import User from "../models/user.model";
import BookRental from "../models/bookRental.model";

export const exporterController = Router();


// Mock-up static arrays (to be replaced by services get methods)
const books : Book[] = 
[
    {
        "id"    : 1,
        "title" : "1984",
        "author": "George Orwell",
        "year"  : 1949,
        "genre" : "Dystopie"
    },
    {
        "id"    : 2,
        "title" : "Le Seigneur des Anneaux",
        "author": "J.R.R. Tolkien",
        "year"  : 1954,
        "genre" : "Fantasy"
    },
    {
        "id"    : 3,
        "title" : "L'Étranger",
        "author": "Albert Camus",
        "year"  : 1942,
        "genre" : "Philosophie"
    },
    {
        "id"    : 4,
        "title" : "Orgueil et Préjugés",
        "author": "Jane Austen",
        "year"  : 1813,
        "genre" : "Romance"
    },
    {
        "id"    : 5,
        "title" : "Le Petit Prince",
        "author": "Antoine de Saint-Exupéry",
        "year"  : 1943,
        "genre" : "Conte"
    },
    {
        "id"    : 6,
        "title" : "Dune",
        "author": "Frank Herbert",
        "year"  : 1965,
        "genre" : "Science-fiction"
    },
    {
        "id"    : 7,
        "title" : "Les Misérables",
        "author": "Victor Hugo",
        "year"  : 1862,
        "genre" : "Drame historique"
    },
    {
        "id"    : 8,
        "title" : "Harry Potter à l'école des sorciers",
        "author": "J.K. Rowling",
        "year"  : 1997,
        "genre" : "Fantasy"
    },
    {
        "id"    : 9,
        "title" : "Le Meilleur des Mondes",
        "author": "Aldous Huxley",
        "year"  : 1932,
        "genre" : "Science-fiction"
    },
    {
        "id"    : 10,
        "title" : "Crime et Châtiment",
        "author": "Fiodor Dostoïevski",
        "year"  : 1866,
        "genre" : "Drame psychologique"
    }
];
const rentals: BookRental[] = [
  {
    id: 1,
    userId: 1,
    bookId: 2,
    startDate: new Date("2025-01-10"),
    endDate: new Date("2025-01-24"),
  },
  {
    id: 2,
    userId: 1,
    bookId: 1,
    startDate: new Date("2025-02-15"),
    endDate: new Date("2025-03-01"),
  },
  {
    id: 3,
    userId: 2,
    bookId: 3,
    startDate: new Date("2025-03-05"),
    endDate: new Date("2025-03-20"),
  },
  {
    id: 4,
    userId: 3,
    bookId: 1,
    startDate: new Date("2025-04-01"),
    endDate: new Date("2025-04-15"),
  },
  {
    id: 5,
    userId: 2,
    bookId: 4,
    startDate: new Date("2025-05-10"),
    endDate: new Date("2025-05-25"),
  },
];
const users: User[] = [
  {
    id: 1,
    name: "Alice Dupont",
    email: "alice.dupont@example.com",
    rentals: rentals.filter(r => r.userId === 1),
  },
  {
    id: 2,
    name: "Bruno Martin",
    email: "bruno.martin@example.com",
    rentals: rentals.filter(r => r.userId === 2),
  },
  {
    id: 3,
    name: "Claire Bernard",
    email: "claire.bernard@example.com",
    rentals: rentals.filter(r => r.userId === 3),
  },
];

exporterController.get('/books', (_req : Request, res : Response) => {
    console.log("[GET] /export/books");
    
    // books has to be replaced by BookService.get
    const booksList = ExporterService.get<Book>(books); 
    if(booksList === "") return res.sendStatus(404);
    return res.send(booksList).status(200);
})

exporterController.get('/users', (_req : Request, res : Response) => {
    console.log("[GET] /export/users");
    
    // users has to be replaced by UserService.get
    const usersList = ExporterService.get<User>(users); 
    if(usersList === "") return res.sendStatus(404);
    return res.send(usersList).status(200);
})

exporterController.get('/rentals', (_req : Request, res : Response) => {
    console.log("[GET] /export/rentals");
    
    // rentals has to be replaced by BookRentalService.get
    const rentalsList = ExporterService.get<BookRental>(rentals); 
    if(rentalsList === "") return res.sendStatus(404);
    return res.send(rentalsList).status(200);
})