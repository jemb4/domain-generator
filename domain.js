//constantes
let pronoun = ['the','our'];
let adj = ['great', 'big'];
let noun = ['jogger','racoon'];

//lector de selección
const selectElement = document.querySelector('#domainSelected');

selectElement.addEventListener('change', (event) => {
  const domainId = document.querySelector('#domainGenerated');

  function fooDomain(){ //función que da todos los posibles conjuntos de dominios
    let res = "";
    let pronoun = ['the','our'];
    let adj = ['great', 'big'];
    let noun = ['jogger','racoon'];
    let dom = `${event.target.value}` ;
    
    console.log(event.target.value)

    if (dom == "none"){
      return "Select a domain to get started"
  }
    else
      { for(let j in adj){
          for(let i in pronoun){
            for (let k in noun){
              res += pronoun[i] + adj[j] + noun[k] + dom + "<br>"
              
            }
          }
        }}
 
    return res
  };
  
  let result = fooDomain() 
  domainId.innerHTML = result
});

