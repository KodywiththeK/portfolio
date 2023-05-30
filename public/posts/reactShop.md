- 프로젝트 기간: 2023.02.07 - 02.15

## 기술 스택

- React
- Typescript
- Redux(Redux-toolkit, thunk)
- StyledComponent
- Vite

## 프로젝트 소개

- React를 사용하여 e-commercial 웹 사이트를 개발했습니다.
- Fake Store API를 이용하여 상품정보를 JSON파일로 받아왔습니다.
- Redux를 상태관리 라이브러리로 사용하여 다크모드, 장바구니, 통합검색 등을 관리했습니다.
- styled component를 사용해 모든 디자인과 사용자 UI를 직접 기획하고 구현했습니다.
- Netlify를 통해 배포했습니다

## github

https://github.com/KodywiththeK/React-Ts-shoppingMall

## 배포 링크

[Amazon Korea](https://gilded-choux-cce60b.netlify.app/)

## 주요 기능

### 1. 메인페이지

![title](https://invented-song-ea3.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F58d2b172-ee82-473c-b23b-ed64f2b2796b%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-05-18_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_2.05.43.png?id=3844ce6b-21b5-4051-bc00-9894a50d2b39&table=block&spaceId=18a88457-e512-4cdc-adbf-d1fdfb29ae1d&width=2000&userId=&cache=v2)   

- 카테고리별 가장 인기많은 상품 모아보기
- 테마 변경
- 상품 검색 및 키워드 자동 완성
- 간편한 장바구니 관리

### 2. 상품 목록 페이지

![title](https://invented-song-ea3.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6dacb0e9-30bb-476d-81dc-7d9d3bc1fdf6%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-05-18_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_2.08.00.png?id=d034bbd9-d1fa-4d49-b48b-381c9fba0e02&table=block&spaceId=18a88457-e512-4cdc-adbf-d1fdfb29ae1d&width=2000&userId=&cache=v2)

- 상품 정렬 및 필터링

### 3. 상품 상세 페이지

![title](https://invented-song-ea3.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2e976403-abda-4fd9-aaaf-825fd066050b%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-05-18_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_2.08.42.png?id=b887d5a8-9b60-49b7-ac03-948f632d48ae&table=block&spaceId=18a88457-e512-4cdc-adbf-d1fdfb29ae1d&width=2000&userId=&cache=v2)   

- 장바구니 추가, 삭제
- 장바구니로 이동

### 4. 장바구니 페이지

![title](https://invented-song-ea3.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbb69da82-7958-480a-8e6f-4b7df092d263%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-05-18_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_2.09.29.png?id=885d6a4c-6582-4b78-b2aa-810d64822aaa&table=block&spaceId=18a88457-e512-4cdc-adbf-d1fdfb29ae1d&width=2000&userId=&cache=v2)   

- 상품 개수 변경 및 삭제
- 모두 구매하기

## 개발 내용

### Styled Component

- CSS module, SCSS만을 사용하다가, 처음 CSS-in-JS 방식을 접했습니다. 기존에 경험했던 방식에 비해 유지보수 및 컴포넌트 관리가 용이하다는 것을 느꼈습니다.
- 한 컴포넌트에 작성되는 코드의 길이가 길어져 가독성이 떨어지는 단점이 있었습니다. (TSX + CSS + JS)

### FakeStore API & Redux-Toolkit 사용

- FakeStore API에서 받은 Product 데이터를 Redux를 이용해 전역 상태 관리를 하였습니다.
- 전역데이터가 필요한 컴포넌트에서 useSelecter 함수를 통해 데이터를 가지고 와서 사용하였습니다.
    
    ```tsx
    const dispatch = useAppDispatch()
    const product = useSelector((state:RootState) => state.mallState.data).filter(item => item.rating.rate > props.starRate)
    const categorizedData = makeResult(product)
    const categorized = useSelector((state:RootState) => state.mallState.categorized)
    const cartList = useSelector((state:RootState) => state.mallState.cart)
    const SearchingData = useSelector((state:RootState) => state.mallState.searchingData)
    ```
    
- 비동기처리는 Thunk를 활용했습니다.
    
    ```tsx
    export const fetchProduct = createAsyncThunk(
      'product/fetchProduct',
      async () => {
        const response = await fetchAPI()
        console.log(response)
        return response
      }
    )
    
    export const shoppingSlice = createSlice({
      name: 'product',
      initialState,
      reducers: {
        addToCart: (state, action:PayloadAction<productType>) => {
          const newCart = [...state.cart, action.payload];
          saveCart(newCart)
          return {
            ...state, cart: newCart
          }
        },
    		//	...(생략)
      },
      extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled,(state, action: PayloadAction<productType[]>) => {
          state.data = action.payload
        })
        builder.addCase(fetchProduct.pending, (state) => {
          state.fetchState = true
        })
        builder.addCase(fetchProduct.rejected, (state) => {
          state.fetchState = false
        })
      }
    })
    ```
    

### 로컬스토리지를 활용한 데이터 상태 보존

- 장바구니, 테마, 필터(on & off) 상태를 보존하기 위해, 상태를 전역관리 해줄뿐 아니라, 로컬스토리지로 관리해, 새로고침이나 서비스 재접속시에도 기존 설정 상태가 보존되도록 했습니다.
    
    ```tsx
    // 테마 모드
    export const saveTheme = (theme: boolean) => {
      localStorage.setItem('theme', JSON.stringify(theme))
    }
    
    export const loadTheme = () => {
      const themeJson = localStorage.getItem('theme')
      if(!themeJson) {
        return []
      }
      try {
        return JSON.parse(themeJson)
      } catch (e) {
        console.error(e)
        return []
      }
    }
    ```
    

## 배운점과 개선사항

### 디자인 기획

- 여러가지 레퍼런스를 참고해, 어떤 UI로 쇼핑몰을 만들어야할지 고민을 많이했다.
- 하지만 너무 체계가 없었던 탓에, 처음 구조를 잡기까지 시간이 많이 걸렸던 것 같다.
- 다음에는 와이어프레임 작성부터, 조금 더 체계적으로 접근해보려한다.

### Redux를 처음 사용해보다

- 전역 상태 관리 도구인 Redux-Toolkit을 사용하여 데이터 관리를 하였습니다.
- 확실히 모든 전역데이터를 한곳에서 관리할 수 있고 디버깅이 용이하다는 장점이 있었지만, Reducer를 만들기위한 많은 줄의 코드가 필요했다.
- 전역관리를 실제 적용해본 첫 경험이라 유익했고, Redux의 장단점을 조금이나마 느낄 수 있었다. 다음 프로젝트에는 리코일을 활용해 조금 더 리액트스럽다(?)는 전역관리를 경험해보고싶다.