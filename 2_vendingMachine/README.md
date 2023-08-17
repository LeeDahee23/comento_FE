# 2주차 과제 - 웹사이트 화면 구성
## 🥫자판기

### 🖥구현 화면
<img width="361" alt="vendingMachine" src="https://github.com/LeeDahee23/comento_FE/assets/82389864/3d0d2d2c-0f9c-4c62-9e93-c85609c0b1b6">

### 🙋‍♀️질문
1. 폴더 경로(assets)
   - 하나의 repository에 각 과제를 정리하고 싶어서 폴더 구조를 조금 수정하였습니다. 1주차 피드백을 참고하여 images, html, css를 assets 폴더 안에 넣었습니다. 이렇게 하는 게 맞나요? 😅

2. 이미지 관련
    - 이미지는 무료로 다운로드, 수정이 가능한 unsplash 사이트를 이용했습니다. 제가 원하는 제품의 정면 사진이 많이 없어서 이래저래 수정하느라 화질이 별로 좋지 않네요 ..ㅎㅎ
배경이 없이 제품 사진만 있는 것을 원해서 배경 제거를 했습니다.

    - [문제점] 제품의 크기가 제각각이다 보니, 이미지의 width와 height의 비율이 다 달랐습니다. 또 제가 수작업으로 배경을 제거하고 resizing 해서 파일의 크기 자체도 제각각이었습니다.
제품 사진의 비율을 유지하고 싶어서 width만 지정했는데, 특정 이미지(음료수)는 파일 자체의 width가 작고 height가 큰 사진이라 그런지 다른 제품에 비해 크게 보여서 깔끔하지 않았습니다.

    - [시도1, 실패] 제품 이미지에 scale—half라는 선택자를 추가하고, transform: scale(0.5)를 시도했는데 이미지의 위치가 이상하게 바뀌었습니다 ..😇
      ```html
      <img class="menu__img scale--half" src="images/drink_1.png" alt="drink_coke">
      ```
      ```css
      .menu__img {
        width: 150px;
        position: absolute;
        bottom: 0;
      }
      
      .scale--half{
        transform: scale(0.5);
      }
      ```


    - [시도2, 해결] transform 속성이 position에 영향을 미치는 것 같아서 일단 width를 절반인 70px로 직접 지정해줬습니다.
      ```html
      <img class="menu__img scale--half" src="images/drink_1.png" alt="drink_coke">
      ```
      ```css
      .menu__img {
        width: 150px;
        position: absolute;
        bottom: 0;
      }
      
      .scale--half{
        width: 70px;
      }
      ```
    - [📌질문] 현업에서도 비율이 제각각인 이미지를 다룰 텐데, 어떻게 하면 비율을 깔끔하게 맞출 수 있나요? 파일의 크기 자체를 비슷하게 맞추는 게 방법일 것 같은데 맞는지 궁금합니다.


3. 요소를 바닥에서부터 쌓기(?)
    - 제품의 사진(.menu__img-div)과 가격 버튼(.menu__price-div)을 아래에서부터 쌓는 느낌으로 레이아웃을 설계했습니다. (오른쪽에 있는 것 처럼요!)
  
    - [시도1] 두 요소의 부모요소인 .menu에 display: flex, flex-direction: column-reverse를 시도해봤지만 reverse를 하니 1 → 2 → 3 순서가 아닌 3 → 2 → 1 순서로 쌓여서 설계와 다르게 구현되었습니다.
      원하는 건 왼쪽인데 오른쪽으로 구현되었습니다 😅
      [이미지 첨부]
      ```html
      <div class="menu">
          <div class="menu__img-div">
              <img class="menu__img scale--half" src="images/drink_1.png" alt="drink_coke">
          </div>
          <div class="menu__price-div">
              <button class="menu__price">2000원</button>
          </div>
      </div>
      ```
      ```css
      .menu{
      	display: flex;
      	flex-direction: column-reverse;
      }
      ```
    - 사진과 가격의 부모 요소에 css를 적용해서 해결하고 싶었지만 어떻게 해야 할 지 잘 몰라서..
    - [시도2, 해결] 결국 가격버튼(.menu__price-div)에 position: absolute로 가격 버튼을 바닥에 붙였습니다. 가격 버튼의 height, margin을 더해 차지하는 영역이 100px임을 구하고, 사진의 영역(.menu__img-div) 높이를 (전체 400px - 가격 영역 100px) = 300px이라고 하드코딩 했습니다 ..
      ```html
      <div class="menu">
          <div class="menu__img-div">
              <img class="menu__img" src="images/snack_3.png" alt="snack_3">
          </div>
          <div class="menu__price-div">
              <button class="menu__price">2000원</button>
          </div>
      </div>
      ```
      ```css
      .menu__img-div {
        height: 300px;
        position: relative;
        display: flex;
        justify-content: center;
      }
      .menu__price-div {
         width: 100%;
         position: absolute;
         bottom: 0;
      }
      ```
      
    - [질문] 어떻게 하면 하드코딩하지 않고 원하는 대로 위치를 지정할 수 있을까요..?🥺
    
4. html 반복적인 값
    - 초기에는 제품의 번호를 1번부터 12번까지 인덱싱을 했습니다.(현재 결과물에는 없어 예시 이미지를 첨부하겠습니다!) 저는 일일이 innertext 부분에 숫자를 기입했는데, 왠지 현업에서는 이렇게 반복되는 번호를 일일이 적지 않을 것 같은 느낌이 듭니다.🤔 혹시 현업에서는 이런 작업을 할 때 어떻게 하는지 궁금합니다. JS를 사용하나요?
    [이미지 첨부]
  
5. img 태그의 alt 속성 작성법
    - img 태그의 alt 속성은 스크린 리더가 해당 이미지가 어떤 내용인지 확인할 수 있는 대체 텍스트라고 알고 있습니다. 저는 각 메뉴 이미지에 대해 “종류_제품명” 형식으로 작성하려 했는데, 이름을 모르는 제품은 번호를 붙였습니다.(ex. snack_2, choco_1) 
alt 속성을 어떻게 하면 잘 작성할 수 있는지 궁금합니다!
