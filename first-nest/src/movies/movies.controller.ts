import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')       // <- This part controls the 'entry point' of the url! (ex. localhost:3000/movies)
export class MoviesController {
    
    @Get()
    getAll(){
        return "This will return all movies";
    }    
    
    @Get('search')
    search(@Query('year') searchingYear: string){
        return `We are searching for a movie made after ${searchingYear} `;
    }

    @Get('/:id')
    getMovieById(@Param('id') movieId: string){
        return `This will return one movie with the id: ${movieId}`;
    }    

    @Post()
    create(@Body() movieData){
        console.log(movieData);
        // return "This will create a movie";
        return movieData
    }    

    @Delete('/:id')
    remove(@Param('id') movieId: string){
        return `This will delete a movie with the id: ${movieId}`;
    }    

    @Patch('/:id')
    update(@Param('id') movieId: string, @Body() updateData){
        // return `This will patch a movie with the id: ${movieId}`;
        return {
            updatedMovie:movieId,
            ...updateData,
        };    
    }    
}
