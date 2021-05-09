# 인프런에서 공부한 것 여기에 남김

```
npm install -g @vue/cli
vue create vue-news-ts

npm -v
//6.4.1
npm install -g npm

npm -v
//7.12.0

npm run serve
// Error: Cannot find module 'vue-loader-v16/package.json'
npm uninstall vue-loader-v16

// 재설치를 해보라는 글을 보고 실행함
npm i vue-loader-v16
npm i --save-dev vue-loader-v16
```

흠 처음에 npm 버전이 낮아서 기본설정이 이상하게 된 것으로 추정
폴더 지우고 다시 시작

```
vue create vue-news-ts
cd vue-news-ts
npm run serve
```

이제 잘됨
