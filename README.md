## 프로젝트 실행 방법: 
프로젝트를 clone 받은 후 'yarn add' 'yarn start' 합니다.

## 프로젝트 구조 설명: 
총 페이지는 home, detailScreen 2개입니다. </br>
src > components 안에 pokemonCard 컴포넌트를 만들어서 home 페이지에서 사용했습니다.

## 리팩토링 리스트
1. 첫 렌더링 시 리스트가 1번 포켓몬이 아니라 16번부터 시작함
2. 중복 코드 미처리(연산 및 axios 관련)
3. 요청 너무 오래걸림 (병렬X)
4. any 다수 -> 타입스크립트 미숙
5. ref 사용가능한 부분에서 DOM 직접 조작(document.getElementById)
