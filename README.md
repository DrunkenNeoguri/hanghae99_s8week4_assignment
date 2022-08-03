# 과제 파일 구조 안내

src  
├── app  
│ ├── store.jsx  
│ └── slice  
│       └── bucketSlice.jsx  
│  
├── component  
│ ├── common  
│ │     └── Header.jsx  
│ └── features  
│       └── Form.jsx  
│       └── List.jsx  
│       └──  Todo.jsx  
│
├── layout  
│     └── Layout.jsx  
│  
├── pages  
│     ├── Detail.jsx  
│     └── Home.jsx  
│  
├── App.css  
├── App.js  
├── index.css  
├── index.js  
└── logo.svg

## app

- react 외부의 library를 관리하는 폴더입니다.
- Redux를 관리하는 store는 app에, slice를 관리하는 bucketSlice.jsx는 slice 폴더에 추가했습니다.

## component

- 컴포넌트들을 관리하는 폴더입니다.

### common

- 컴포넌트 중에 화면에 공통적으로 쓰이는 컴포넌트들이 배치됩니다.
- Header 같은 UI 컴포넌트들이 주로 이쪽에 배치됩니다.

### features

- 각 화면에 동작하는 특정한 기능들을 담당하는 컴포넌트들이 배치됩니다.

## Layout

- 페이지의 구성을 담당하는 layout.jsx를 해당 폴더에서 관리하고 있습니다.

## pages

- 사용자가 접하게 되는 큰 틀, 즉 페이지를 관리하는 폴더입니다.
- 자잘한 기능들을 담당하는 컴포넌트와 달리, 페이지 자체를 담당하는 컴포넌트들이 배치됩니다.

## app.js

- react에서 관리하는 route들을 해당 파일에서 관리합니다.
- 화면의 관리는 layout과 pages에서 하되, app 내에 연결되는 사항들을 해당 파일에서 연결되도록 했습니다.
