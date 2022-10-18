import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDto {
    // Decorator를 통해 Validation을 추가할 수 있다.
    @IsString()
    readonly title: string;
    
    @IsNumber()
    readonly year: number;
    
    @IsOptional()
    @IsString({ each:true })
    readonly genres: string[];
}