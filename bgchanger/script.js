let body = document.querySelector("body");
let buttons =document.querySelectorAll("button")
        const bgchange = () =>{
          buttons.forEach(button => {
                button.addEventListener('click', (e) =>{
                    if(e.target.id ==="red"){
                        body.style.backgroundColor="red";
                    }
                    if(e.target.id ==="gray"){
                        body.style.backgroundColor="gray";
                    }
                    if(e.target.id ==="green"){
                        body.style.backgroundColor="green";
                    }
                    if(e.target.id ==="blue"){
                        body.style.backgroundColor="blue";
                    }
                    if(e.target.id ==="pink"){
                        body.style.backgroundColor="pink";
                    }
                    if(e.target.id ==="crimson"){
                        body.style.backgroundColor="crimson";
                    }
                    if(e.target.id ==="brown"){
                        body.style.backgroundColor="brown";
                    }
                    if(e.target.id ==="yellow"){
                        body.style.backgroundColor="yellow";
                    }
                })
            })
        }