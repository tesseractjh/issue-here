# 🔍️ Issue Here
Github Repository Issue들을 모아서 볼 수 있는 서비스


# 실행 방법
## 1. 설치
```bash
$ npm install
```

## 2. 환경 변수 설정
루트 디렉토리에 .env 파일을 생성하고 중괄호 자리에 [Github Token](https://github.com/settings/tokens)을 입력해야 합니다.
```bash
VITE_GITHUB_API_TOKEN = {Github Token}
```

## 3. 실행
```bash
$ npm run dev
```

## 실행 시 유의 사항
Github API는 시간당 5,000개의 요청을 허용합니다. 5,000개를 초과하면 다른 Github Token으로 교체해야 합니다.

# 구현 기능
요구사항에 명시된 기능은 ✅, 요구사항에 명시되지 않았으나 추가로 구현한 기능은 ☑️로 표시하였습니다.

- ✅ Repository 검색 기능
- ✅ Repository 등록 및 삭제 기능
  - ✅ 4개를 초과하여 등록하려고 하면 alert로 경고
  - ✅ 등록된 Repository는 LocalStorage에 저장
- ✅ Issue 조회 기능
  - ✅ 등록된 모든 Repository의 Issue 조회
  - ☑️ 등록된 Repository 중 일부만 선택하여 조회
  - ☑️ Issue의 open/closed 여부로 필터링하여 조회
  - ☑️ Issue의 정렬 기준을 선택하여 조회
  - ☑️ Issue의 정렬 순서를 선택하여 조회
