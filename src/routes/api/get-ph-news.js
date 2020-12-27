module.exports = (router,newsapi) => {
    return router.get('/get-ph',async(req,res)=>{
        newsapi.v2.topHeadlines({
            category: 'general',
            country: 'ph',
            pageSize:20
          }).then(response => {
            response.articles.forEach(element => {
                console.log(element.source.name);
            });
            res.send(response.articles);
          });
    })
}