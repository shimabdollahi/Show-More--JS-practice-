let boxes= document.getElementsByClassName("box");
for(let box of boxes){
    let pElement=box.getElementsByTagName("p")[0];
    if(pElement.scrollHeight > 200){
        let orginalText=pElement.innerText;
        pElement.setAttribute("data-orginal-text" , orginalText);

        pElement.innerText=(pElement.innerText.substring(0,500))+ "...";
          
        let btn=document.createElement("button");
        btn.innerText="Show more...";
        pElement.after(btn);
        btn.onclick=toggle.bind(this,[pElement]);
    }
}
function toggle(args,event){
    let btn= event.target;
    let pElement=args[0];
    
    if(btn.innerText=="Show more..."){
        btn.innerText="Show less";
        pElement.innerText=pElement.getAttribute("data-orginal-text");
    }else{
        btn.innerText="Show more...";
        pElement.innerText=(pElement.innerText.substring(0,500))+ "...";
    }
}