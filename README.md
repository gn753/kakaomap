# 개발세팅

## api

api 비동기 처리 위한곳

## components

컴포넌트들이 있는 곳

## redux

모든 redux처리는 여기서!

## pages

페이지 컴포넌트

## css

css는 scss를 사용하며 style.scss 하나에 모든css를 넣을 예정입니다.

## 제 프로젝트 설명

원래는 비동기 데이터를 api 폴더에 넣을 생각이었는데
어쩌다보니 mapSlice에 넣게 됐습니다.

### 사람인에서 지도로 필요한 정보

1. 지역 위치
2. 회사명
3. 채용공고URL
4. 연봉
5. 해당 직무

### Store

addressSlice,keywordSlice안의 내용

- getAddressAsync : 지역 위치 데이터 조회.
- getKeywordAsync: 회사 위치 조회
  사용법은 dispatch(getAddressAsync(지역명))
  사용법은 dispatch((getKeywordAsync(회사명,x좌표,y좌표))

1. getAddressAsync로 지역 위치 좌표를 불러옵니다.
2. getKeywordAsync(x,y,'회사명')에 인수로 1에서 얻은 좌표값 x,y와 회사명을 넣습니다.
