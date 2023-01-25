# fe-console-todo
​
### 실행 방법
​
node ./src/grade.js
​
### 수행 내용
​
- Class Todo 생성
- Input 모듈 생성
- main 함수 작성
- 예외처리
​
### TODO
​
- 코드 리팩토링
​
### 예외 처리 항목
​
- 첫 명령어가 show, add, delete, update로 시작하지 않을 경우 에러 메시지 출력
- Show Type이 all, todo, doing, done이 아닐 경우 에러 메시지 출력
- Update Status가 todo, doing, done이 아닐 경우 에러 메시지 출력
- Add Tags가 배열 형식이 아니거나 따옴표가 일치하지 않을 경우 에러 메시지 출력
- 각 명령어 사이가 $가 아닐 경우 에러 메시지 출력
- 삭제 또는 수정할 때 입력 ID가 존재하지 않을 경우 에러 메시지 출력
- 새로운 TODO를 생성할 때 기존 ID와 중복할 경우 새로운 ID 할당