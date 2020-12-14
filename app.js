const llamadaAPI = async () => {
    const resultadoLlamada = await fetch('https://gnews.io/api/v4/search?q=health&max=4&lang=es&token=5a056159c1ba625a59dd263d281799f7');
    const resultadoJson = await resultadoLlamada.json();
    
    var i;
    for (i = 0; i < resultadoJson['articles'].length; i++) {
        
        if(resultadoJson['totalArticles']!=0)
        {
            const imagen = resultadoJson['articles'][i]["image"];
            const titulo = resultadoJson['articles'][i]["title"];
            const descripcion = resultadoJson['articles'][i]["source"]["name"];
            const fecha = resultadoJson['articles'][i]["publishedAt"].substring(0,10);
            const url = resultadoJson['articles'][i]["url"];

            document.getElementById('imagenRespuesta'+i).src = imagen;
            document.getElementById('tituloRespuesta'+i).innerHTML = '<a href="'+url+'" target="_blank">'+titulo+'</a>'; 
            document.getElementById('descripcionRespuesta'+i).innerHTML = descripcion;
            document.getElementById('fechaRespuesta'+i).innerHTML = fecha;
        } else
        {
            document.getElementById('imagenRespuesta'+i).src = "Error";
            document.getElementById('tituloRespuesta'+i).innerHTML = "Error"; 
            document.getElementById('descripcionRespuesta'+i).innerHTML = "Error";
            document.getElementById('fechaRespuesta'+i).innerHTML = "Error";
        }
    }
}

llamadaAPI();