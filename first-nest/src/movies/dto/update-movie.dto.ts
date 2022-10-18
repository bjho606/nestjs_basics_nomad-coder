import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";

// nestjs 에서 제공하는 mapped-types 를 통해 DTO를 변환시키는 것을 도와줌
export class UpdateMovieDto extends PartialType(CreateMovieDto) {
    // CreateMovieDTO 와 똑같지만, 모든 항목이 필수적으로 입력되지 않아도 된다는 차이점만 있음
}