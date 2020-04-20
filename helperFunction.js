const renderResponse = (res) => {

    // handles if res is falsey
    if(!res){
        console.log(res.status)
    }

    // in case res comes back as a blank array
    if(!res.length){
        // responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>"
        alert('try another word')
    }

  // looping through the response and maxxing out at 10
    for(let i = 0; i < Math.min(res.length, 10); i++){
        var node = document.createElement("LI");                 
        node.classList.add('list')
        var textnode = document.createTextNode(res[i].word);         
        node.appendChild(textnode);                              
        document.getElementById("wordsContainer").appendChild(node);        
    }




};