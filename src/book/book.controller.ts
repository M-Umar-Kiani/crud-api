import { Controller, Get, Post, Put, Delete, Body } from "@nestjs/common";
import {BookService} from "./book.service"
import { Book } from "./data/book.dto";

@Controller("book")
export class BookController{
    
    constructor(private bookService : BookService){

    }

    @Put("/updateBook")
    updateBook(@Body() book : Book) : string{
        return this.bookService.updateBookService();
    } 

    @Get("/getAllBooks")
    getAllBooks() : Book[]{
        return this.bookService.findAllBooks();
    }



}