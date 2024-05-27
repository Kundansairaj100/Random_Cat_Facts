let button = document.querySelector("#but");
let text = document.querySelector(".text-box");
i=0
const getFacts = async()=>{
    if(i==5)
        {
            i=0;
        }
    i+=1;
    const URL = "https://cat-fact.herokuapp.com/facts";
    let response =  await fetch(URL);
    let data = await response.json();
    text.innerText = data[i].text;
    console.log(data[0].text);
}
button.addEventListener("click",getFacts);

