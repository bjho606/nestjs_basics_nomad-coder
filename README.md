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
- 데코레이터는 꾸며주는 함수나 클래스와 반드시 붙어있어야한다. (데코레이터와 함수 사이에 공백이 있으면 안됨)

### 1. Module
- 한 가지 역할을 수행하는 어플리케이션의 단위
- nest.js 어플리케이션은 여러 Module 로 이루어져 있다.
- 하나의 모듈당 한개씩의 Controller + Service

### 2. Controller
- url을 가져오고 함수를 매핑하여 실행 -> 반환하는 부분
- node.js에서 'router' + 'controller' 에 해당하는 부분
- 'Decorator'를 사용해 routing 수행

### 3. Service
- 실제 함수의 기능이 들어가는 부분
- controller 와 service를 분리
- node.js에서 'provider' + 'service' 에 해당하는 부분

### [Refactoring]
- 하나의 'app' 모듈만 있고, 여러 기능을 수행할 각각의 모듈을 import 하도록 구성<br>
=> 모듈 단위로 어플리케이션 구성하기
    > nest g mo <br>
    > 'module name'

<br>

---
## NestJS의 편리성
- nestjs 는 자동으로 여러가지 기능을 수행해준다.
- cli 명령어로 \> nest 라고 치면 간편하게 작업을 수행할 수 있는 여러 선택사항들을 보여준다.
- ex) \> nest g co -> 자동으로 controller를 생성해준다.

### ※ Dependency Injection
- nestjs가 모듈에 필요한 dependency들을 알아서 import 해주는 것
- (modulename).module.ts 에 추가만 해주면 된다.

### DTO (Data Transfer Object)
- 데이터의 타입을 미리 설정하여 객체 정보들을 만들어 놓을 수 있다.

### Pipe
- node.js(또는 express) 에서의 middleware와 같은 기능을 수행하는 것
- dto와 함께 사용하여 유효성 검사 등과 같은 여러 기능을 추가할 수도 있다.
    > npm i class-validator class-transformer @nestjs/mapped-types
- 여러 옵션을 통해 다양한 validation 상황을 추가할 수 있고, nestjs에서 자동으로 해당 경우들에 따라 처리해준다.
    ex)
    - `> whitelist: true` : decorator 에서 처리되지 않는 데이터는 무시시킨다.
    - `> forbidNonWhitelisted: true` : decorator 에서 처리되지 않는 데이터를 보낼 경우 오류를 발생시킨다.
    - `> transform: true` : url에서 보내는 값은 기본적으로 모두 string 타입이지만, 개발자가 따로 타입 변경 처리를 해주지 않아도 자동으로 알맞은 타입으로 변경해준다.

### Express on NestJS - Not Recommended
- nestjs 는 express 위에서 돌아가기 때문에 (express에서 사용하는) request, response 객체들도 사용할 수 있다.
- `> @Req() req, @Res() res`
- BUT, 이와 같이 express 객체를 직접 사용하는 것은 좋지 않다! => nestjs가 'express' 뿐만 아니라 'fastify' 라는 프레임워크 위에서도 동작하기 때문<br>
-> 하나의 프레임워크 객체를 사용해버리면, refactoring 할 때 문제가 발생할 수 있음!

<br>

---
## Testing
- Unit Test -> E2E(End-to-End) Test
- NestJS 에서는 jest가 .spec.ts 파일들을 찾아볼 수 있도록 설정되어 있음

    ※ Jest
    - javascript 테스팅 프레임워크
    - javascript를 아주 쉽게 테스팅하는 npm 패키지

    ※ .spec.ts
    - 테스트를 포함하는 파일
    - 테스트를 진행하고 싶은 파일이 있을 때, '같은 이름'+'.spec.ts' 의 이름을 가진 파일을 만들면 된다.

### 1. Unit Test
- 모든 function을 따로 테스트하는 것
- 서비스에서 분리된 유닛을 테스트
- '파일이름'.spec.ts 에서 하나의 기능(함수)단위로 예상값과 실제값을 비교하는 테스트 구문을 작성한다.
> npm run test:cov
- 전체 프로그램에서 몇 퍼센트가 테스트 커버되었는지 알려줌
> npm run test:watch
- 변경사항이 있을 때마다 테스팅 정도가 어느정도 되는지 알려줌

### 2. E2E Test
- 기능별로 모든 시스템을 테스트하는 것
- test 폴더의 'app.e2e-spec.ts' 폴더에서 테스크 구문들을 작성한다.<br>
이때, test용으로 만드는 app도, 실제 서버에 사용될 app 모듈과 같은 환경으로 구성해줘야한다. (ex. pipe 추가)
> npm run test:e2e