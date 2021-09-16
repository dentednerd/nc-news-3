# Northcoders News Three

[![Netlify Status](https://api.netlify.com/api/v1/badges/032226d1-6e7b-46eb-aeb3-0ecbb5028370/deploy-status)](https://app.netlify.com/sites/dentednerds-northcoders-news/deploys)

dentednerd's Northcoders News v3 is a social news aggregation, web content rating, and discussion website, featuring stories arranged by topic. Each story can be up- or down-voted, and users can comment and vote upon each story. This project is created from a sprint on the Northcoders bootcamp.

[dentednerds-northcoders-news.netlify.app/](https://dentednerds-northcoders-news.netlify.app/)

API: [live](https://nc-news-sql-dentednerd.herokuapp.com/api), [repo](https://github.com/dentednerd/nc-news-sql-dentednerd)

[The prophecy is fulfilled.](https://www.joeyimlay.dev/posts/northcoders-news-revisited/)

## requirements

- Node v14.17.3

## installation

```sh
git clone https://github.com/dentednerd/nc-news-3.git
cd nc-news-3
yarn
yarn start
```

## notes

- components reorganised into Atomic Design structure
- used Stitches again
- used mycolor.space to generate the colour palette

## todo

- [x] do some dayjs magic in HomeHeader to change greeting based on time of day
- [ ] BACKEND: implement pagination on comments
- [ ] FRONTEND: implement pagination on comments
- [ ] BACKEND: implement sorting on comments
- [ ] FRONTEND: implement sorting on comments
