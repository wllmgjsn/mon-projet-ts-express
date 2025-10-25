import { Router } from "express";
import { BookService } from "../services/book.service";
import { Request, Response } from "express";

export const booksController = Router();

booksController.get('/', (_req : Request, res : Response) => {
    console.log("[GET] /books")
    const books = BookService.get();
    if(books.length == 0) return res.sendStatus(404);   
    return res.json(books);
})
