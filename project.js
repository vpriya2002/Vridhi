document.getElementById("okk").onclick=function(){
    let price=300
    if(document.getElementById("no").checked){
        alert("You choose non gifting continue with your payment");
       document.getElementById("paper").innerHTML="The Total price is 300"
    }
    else if(document.getElementById("yes").checked)
        alert("You choose  gifting choose your options to continue");
    }
    document.getElementById("ok").onclick=function(){
    
        if(document.getElementById("wrapper").checked && document.getElementById("letter").checked){
            alert("You choose gift wrapping and letter continue with your message");
            document.getElementById("paper").innerHTML="The Total price is 400"
        }
        else if(document.getElementById("wrapper").checked){
            alert("You choose  gift wrapping continue with payment");
            document.getElementById("paper").innerHTML="The Total price is 350"
        }
            else{
            alert("You choose the letter continue with writing the message");
            document.getElementById("paper").innerHTML="The Total price is 350"
            }
        }
        