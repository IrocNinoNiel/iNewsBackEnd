module.exports = (router,newsapi) => {
    return router.get('/get-headline',async(req,res)=>{
        newsapi.v2.topHeadlines({
            category: 'general',
            language: 'en',
            country: 'us',
            pageSize:20
          }).then(response => {
            response.articles.forEach(element => {
                console.log(element.source.name);
            });
            res.send(response.articles);
          });
    })
}