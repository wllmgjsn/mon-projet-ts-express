interface Book{
    id: number,
    title: string,
    author: string,
    year: number,
    genre: string
}

interface FilterBook{
    title?: string,
    author?: string,
    year?: number,
    genre?:string
}

type NewBook = Omit<Book, "id">

export type {Book, NewBook, FilterBook};