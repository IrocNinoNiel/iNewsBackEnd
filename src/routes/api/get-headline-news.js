module.exports = (router,newsapi) => {
    return router.get('/get-headline',async(req,res)=>{
        newsapi.v2.topHeadlines({
            category: 'general',
            language: 'en',
            country: 'us',
            pageSize:20
          }).then(response => {
            
            const filtered = response.articles.filter(item => item.content)
                                            .filter(item => item.urlToImage);        
            res.send(filtered);
          });
    })
}