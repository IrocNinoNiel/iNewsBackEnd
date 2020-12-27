module.exports = (ObjectId) => {
    return function checkComment({postid,authorid, author,replytoid,text}){
        const error = []
        if(!postid){
            error.push({msg:'Comment must have a Post ID.'})
        }
    
        if(!authorid){
            error.push({msg:'Comment must have a Author ID'})
        }
    
        if(!author){
            error.push({msg:'Comment must have an author'})
        }
    
        if(!text){
            error.push({msg:'Comment must have text'})
        }
    
        if(error.length == 0 ){

            if(!ObjectId.isValid(postid)){
                error.push({msg:"Comment Post id is Invalid"})
            }

            if(!ObjectId.isValid(authorid)){
                error.push({msg:"Comment Author id is Invalid"})
            }
            
            if(replytoid != null){
                if(!ObjectId.isValid(replytoid)){
                    error.push({msg:"Comment Reply id is Invalid"})
                }
            }

            if(author.length < 2){
                error.push({msg:"Comment author's name must be longer than 2 characters."})
            }
        }
    
        return error;
    }
}