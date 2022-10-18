# NestJS
## How To Install
> \> npm i -g @nestjs/cli<br>
> (from your directory) \> nest new [project-name]

## How To Start
> \> cd [created nest directory]<br>
> \> npm run start:dev

<br>

---
## NestJS란
> node.js (& express) 위에서 움직이는 프레임워크 => node.js에 백엔드를 구성할 수 있게 해줌
- '프레임워크'라는 성질 덕분/때문에 특정 규칙들을 지켜서 개발을 해줘야하지만, 그 덕에 빠르고 안전한 구조와 아키텍처를 설계할 수 있다.

`main -> app module -> controller -> service`

### ※ Decorator
- 클래스에 함수 기능을 추가할 수 있게 해주는 것
- 데코레이터는 꾸며주는 함수나 클래스와 반드시 붙어있어야한다. (데코레이터와 함수 사이에 공백이 있으면 안됨)

### 1. Module
- 한 가지 역할을 수행하는 어플리케이션의 단위
1) Controller
    - url을 가져오고 함수를 매핑하여 실행 -> 반환하는 부분
    - node.js에서 'router' + 'controller' 에 해당하는 부분
2) Service
    - 실제 함수의 기능이 들어가는 부분
    - controller 와 service를 분리
    - node.js에서 'provider' + 'service' 에 해당하는 부분

<br>

---
## NestJS의 편리성
- nestjs 는 자동으로 여러가지 기능을 수행해준다.
- cli 명령어로 \> nest 라고 치면 간편하게 작업을 수행할 수 있는 여러 선택사항들을 보여준다.
- ex) \> nest g co -> 자동으로 controller를 생성해준다.