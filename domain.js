//constantes
let pronoun = ['the','our'];
let adj = ['great', 'big'];
let noun = ['jogger','racoon'];
let hack = false;


// Hacer función que se active con el botón:

let btnHack = document.getElementById('btn-hack')

function btnChange(){ //función que cambia el estado del botón

  if(hack){
    hack = false
  }

  else{
    hack = true
  }

}

btnHack.addEventListener('click', btnChange)


//lector de selección
const selectElement = document.querySelector('#domainSelected');

selectElement.addEventListener('change', (event) => {
  const domainId = document.querySelector('#domainGenerated');

  function fooDomain(){                   //función que da todos los posibles conjuntos de dominios
    let resultDomain = "";
    let dom = `${event.target.value}` ;

    if (dom == "none"){                           //mira si se seleccionó el dominio
      return "Select a domain to get started"
  }

    else if (dom !== "none" && hack == false)     //si hack no está activo pone todo en minus
      { for(let j in adj){
          for(let i in pronoun){
            for (let k in noun){

              resultDomain += pronoun[i] + adj[j] + noun[k] + dom + "<br>"
              
            }
          }
        }}

        else                                    //si hack  está activo pone la primera letra de adj y noun en mayus
        {for(let j in adj){
          for(let i in pronoun){
            for (let k in noun){

              resultDomain += pronoun[i] + capitalize(adj[j]) + capitalize(noun[k]) + dom + "<br>"
              
            }
          }
        }}
 
    return resultDomain
  };
  
  let result = fooDomain() 
  domainId.innerHTML = result
});


//funcion mayusculas:

function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}
