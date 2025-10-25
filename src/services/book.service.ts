import fs from 'fs'
import path from 'path';
import Book from '../models/book.model';
import { isBook } from '../utils/guards';

class BookService {
    
    private static dataPath = path.join(__dirname, '..', 'data', 'books.json');
        
    public static get() : Book[] {
        let data;

        try {
            data = fs.readFileSync(this.dataPath, "utf-8");
            data = JSON.parse(data);
        } catch (error) {
            console.log(error);
        }

        if(!data) return [];
        
        const res : Book[] = [];
        
        for(const b of data){
            if(isBook(b)){
                const book : Book = {...b};
                res.push(book);
            }
        }

        return res;
    }
}

export { BookService }