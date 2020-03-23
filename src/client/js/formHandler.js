function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value
    
    if(Client.checkForName(formText)){
        console.log("::: Form Submitted :::")

        fetch('http://localhost:8080/apitest',{
            method:'POST',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json',
            },      
            body: JSON.stringify({text:formText}), 
        })
        .then(res => res.json())
        .then(function(res) {
            // console.log(res); 

            document.querySelector('section.url-results #polarity').innerHTML = res.polarity
            document.querySelector('section.url-results #subjectivity').innerHTML = res.subjectivity
            document.querySelector('section.url-results #polarity_confidence').innerHTML = res.polarity_confidence
            document.querySelector('section.url-results #subjectivity_confidence').innerHTML = res.subjectivity_confidence
            document.querySelector('section.url-results #excerpt').innerHTML = res.text
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
