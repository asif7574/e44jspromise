// 4. Write a function "getCountryData" that fetches data from the public API " https://restcountries.com/v3.1/all ". Parse the JSON response and log the data to the console. Additionally, use DOM manipulation to display the data on the web page. Make sure to handle any errors that might occur during the fetch operation and display an appropriate error message in the div if the fetch fails. (deploy the webpage on github)

function getcountries(){
    
    // for clearing all contents in next click
    document.getElementById('container').innerHTML=''   
    
    fetch('https://restcountries.com/v3.1/all')
    .then((res)=>{
        return res.json()
    })
    .then((result)=>{
        console.log(result);
        result.forEach((cnty)=>{
            const cntybox=document.createElement('div')
            cntybox.className='box'
            const heading=document.createElement('h3')
            heading.innerHTML=cnty.name.common
    
            const image=document.createElement('img')
            image.className='imgtag'
            image.src=cnty.flags.png
    
            cntybox.appendChild(heading)
            cntybox.appendChild(image)
    
            document.getElementById('container').appendChild(cntybox)
        })
    })
    .catch(err=>{
        console.log(err);
    })
    }

