

document.querySelector("#btn").addEventListener('click',(e)=>{
    e.preventDefault
    //step1:
    var xhr=new XMLHttpRequest()
    var val=document.getElementById("d21").value

    var url=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyD261Twd19U36EDafJ5j8N1A5Nj47634Os&part=snippet&q=${val}&maxResults=50`
    
    //step2:        
    xhr.open("GET",url,false)

    //step3:
    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)
            console.log(response)

            let template =''
            for(let i=0;i<response.items.length;i++){
                template=template + `
                    <div class="d10" style="height:200px;width:300px;margin:100px 50px">
                    <a href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}" target="_blank">
                       <img src="${response.items[i].snippet.thumbnails.high.url}" style="width:300px"/>
                    </a>   
                       <h5>${response.items[i].snippet.title}</h5>
                       <p style="color: gray">${response.items[i].snippet.description}</p>
                    </div>
                `
            }

            document.getElementById("d3").innerHTML=template;
        }
    }
        
    

    //step4:
    xhr.send()
    
})