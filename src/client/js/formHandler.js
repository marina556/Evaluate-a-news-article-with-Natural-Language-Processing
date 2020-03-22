function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // checkForName(formText)
    Client.checkForName(formText)
    console.log("::: Form Submitted :::")
 
    if(Client.checkForName(formText)){
        fetch('http://localhost:8080/test',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },      
            mode:'cors',
            body: JSON.stringify({url:formText}), 
        })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = res.polarity
            // .message
        })
    }else{
        if(formText == ''){
            alert('nothing to analyzing');
        }else{
            alert('you should enter valid url');
        }
    }
    
    }

export { handleSubmit }
