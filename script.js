        const pageBody = document.getElementById("pageBody");
        const textInput = document.getElementById("textInput");
        const btn = document.querySelector(".btn")
        const container = document.querySelector('.container')
        const p = document.querySelector("p")
        
        let typingTimer;
        btn.onclick=function(){
        if(textInput.value== "" || isNaN(textInput.value) || textInput.value >40){
            textInput.value = "plese enter a valid number ";
            textInput.style.color = "red"
            textInput.classList.add("shake");
            btn.classList.add("shake");
            p.classList.add("shake")
            setTimeout(() => {
                textInput.classList.remove("shake");
                btn.classList.remove("shake");
                p.classList.remove("shake")
                textInput.value="";
                textInput.style.color = "black"
            }, 2000);
        }else{
                window.localStorage.setItem('number', textInput.value);
            window.location.href = "input.html"
        }
        }

        textInput.addEventListener("focus", function() {
            pageBody.classList.remove("open"); 
        });

















