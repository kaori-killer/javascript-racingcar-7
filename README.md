# 자동차 경주

## 핵심  기능

- 자동차는 전진 혹은 멈춤이 가능하다.

## 기억할 것

- 작은 단위부터 하자. (단, 핵심에 가까운)
- 코드 양이 적을 때 리펙터링 하자.

## 기능 목록

### 1대의 자동차

- [x] 자동차는 처음에 위치 0에 있다.
- [x] 자동차의 현재 위치를 확인한다.
- [x] 0 에서 9 사이의 무작위 값을 구한다.
- [x] 무작위 값이 4 이상이면 전진하고 아니면 멈춘다.
- [x] 자동차는 위치를 1 증가할 수 있다.
- [x] 자동차가 전진하면 자동차의 위치는 1 증가한다.
- [x] 주어진 횟수만큼 시도한다.
- [ ] 자동차는 이름을 가진다.

### N대의 자동차

미션 진행하면서 생각해보겠습니다.

### 입력

- [ ] 자동차 이름은 쉼표(,)를 기준으로 구분한다.
- [ ] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.

### 출력

- [ ] 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [ ] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다.
- [ ] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

### 예외처리

- [ ] 자동차 이름은 5자 이하만 가능하다.
- [ ] 우승자는 한 명 이상일 수 있다.
- [ ] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 동작 흐름

- [ ] [입력] 자동차의 이름을 입력 받는다. - '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
  - [ ] 이름은 쉼표(,) 기준으로 구분한다.
  - [ ] [예외] 이름은 1명이상 있어야 한다.
- [ ] [입력] 시도할 횟수를 입력 받는다.
  - [ ] [예외] 시도할 횟수는 양의 정수만 입력 가능하다.
- [ ] [출력] 실행 결과 문구를 출력한다. - '실행 결과'
- [ ] 각 자동차는 무작위 값이 4 이상이면 전진해서 위치가 1 증가하고 아니면 멈춰서 제자리에 있는다.
- [ ] 위에 문장을 시도할 횟수만큼 반복한다.
  - [ ] [출력] 반복하면서 자동차 이름과 위치를 함께 출력한다. - '{자동차 이름} : {위치만큼 '-' 표시}'
- [ ] 가장이 큰 위치의 값을 찾아낸다.
- [ ] 가장 큰 위치의 값을 가진 자동차들을 찾아낸다.
- [ ] [출력] 가장 큰 위치의 값을 가진 자동차들을 출력한다. - '최종 우승자: {자동차 이름}, {자동차 이름}'
