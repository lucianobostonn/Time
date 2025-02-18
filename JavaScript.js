        var timeTXT = window.document.getElementById("content")
        var imagem = window.document.getElementById("opa")
        var agora = new Date()
        var time = agora.getHours()
        timeTXT.innerText = `Agora são ${time} horas.`

        var dia = "img/Manhã.webp"
        var tarde = "img/Tarde.webp"
        var noite = "img/noite.png"
        
        if(time >= 6 && time < 12)
        {
            document.body.style.backgroundColor = "#2e6ea3"
            imagem.src = dia
            
        }
        else if(time < 18)
        {
            document.body.style.backgroundColor = "#bd7a5a"
            imagem.src = tarde
        }
        else{
            document.body.style.backgroundColor = "#464646"
            imagem.src = noite
        }