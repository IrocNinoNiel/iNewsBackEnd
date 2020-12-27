module.exports = (router,newsapi) => {
    return router.get('/get-search/:search',async(req,res)=>{
        const search = req.params.search;
        newsapi.v2.everything({
            q: `${search}`,
            language: 'en',
            sortBy: 'relevancy',
            page: 2
          }).then(response => {
            res.send(response.articles);
          });
    })
}