// 실제 database의 모델을 담는 부분 -> 이 (데이터)모델을 export 하게 된다.
export class Movie {
    id: number;
    title: string;
    year: number;
    genres: string[];
}