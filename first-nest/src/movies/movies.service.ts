import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getMovieById(id:number):Movie {
        // return this.movies.find(movie => movie.id === parseInt(id));
        // const movie = this.movies.find(movie => movie.id === +id);      // id 타입을 string -> int 로 바꾸는 법
        const movie = this.movies.find(movie => movie.id === id);
        // [add validation]
        if (!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`)   // nestjs 에서 제공하는 에러 메시지 형식
        }
        
        return movie;
    }

    remove(id:number):boolean {
        this.getMovieById(id);

        // this.movies = this.movies.filter(movie => movie.id !== +id);
        this.movies = this.movies.filter(movie => movie.id !== id);
        return true;
    }

    create(movieData: CreateMovieDto){
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData, 
        })
    }

    update(id:number, updateData: UpdateMovieDto){
        const movie = this.getMovieById(id);

        this.remove(id);
        this.movies.push({...movie, ...updateData});
    }
}
