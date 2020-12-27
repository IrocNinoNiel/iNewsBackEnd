const express = require('express');
const NewsAPI = require('newsapi');

const router = express.Router();

const newsapi = new NewsAPI('bcb56c7ba76d4160b86cff2033240438');

const makeGetHeadlineNews = require('./get-headline-news');
const makeGetSearchNews = require('./get-search-news');
const makeGetTypeNews = require('./get-type-news');
const makeGetPhNews = require('./get-ph-news');

const getHeadlineNews = makeGetHeadlineNews(router,newsapi);
const getSearchNews = makeGetSearchNews(router,newsapi);
const getTypeNews = makeGetTypeNews(router,newsapi);
const getPhNews = makeGetPhNews(router,newsapi);

module.exports = {
    getHeadlineNews,
    getSearchNews,
    getTypeNews,
    getPhNews
}