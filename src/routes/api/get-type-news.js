module.exports = (router,newsapi) => {
    return router.get('/get-type/:type',async(req,res)=>{
        const type = req.params.type;
        newsapi.v2.topHeadlines({
            category: `${type}`,
            language: 'en',
          }).then(response => {
            res.send(response.articles);
          });
    })
}