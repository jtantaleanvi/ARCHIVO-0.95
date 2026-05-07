let reputacion = 100;

let paperActual = null;

const noticias = [
  "🧠 Nadie entiende el modelo, pero todos asienten",
  "🤖 IA aprueba todo con confianza",
  "📊 Excel ha decidido tu destino",
  "🎓 Estudiantes responden al azar otra vez",
  "📉 Todo es correlación, afirma experto cansado"
];

function generarPaper(){

  return {

    CFI:(Math.random()).toFixed(2),
    TLI:(Math.random()).toFixed(2),
    RMSEA:(Math.random()).toFixed(2),
    SRMR:(Math.random()).toFixed(2)

  };

}

function mostrarPaper(){

  paperActual = generarPaper();

  document.getElementById("values").innerHTML = `
  
  CFI: ${paperActual.CFI}<br>
  TLI: ${paperActual.TLI}<br>
  RMSEA: ${paperActual.RMSEA}<br>
  SRMR: ${paperActual.SRMR}
  
  `;

}

function evaluarModelo(m){

  if(
    m.CFI > 0.95 &&
    m.TLI > 0.95 &&
    m.RMSEA < 0.05 &&
    m.SRMR < 0.05
  ){
    return "excelente";
  }

  if(
    m.CFI > 0.90 &&
    m.TLI > 0.90 &&
    m.RMSEA < 0.08 &&
    m.SRMR < 0.08
  ){
    return "aceptable";
  }

  return "rechazar";

}

function clasificar(decision){

  let correcta = evaluarModelo(paperActual);

  if(decision === correcta){

    reputacion += 10;

  }else{

    reputacion -= 15;

  }

  document.getElementById("rep").innerText = reputacion;

  let noticia =
    noticias[Math.floor(Math.random()*noticias.length)];

  document.getElementById("ticker").innerText =
    noticia;

  if(reputacion <= 0){

    alert("💀 ARCHIVO-0.95 TE HA EXPULSADO");

    location.reload();

  }

  mostrarPaper();

}

mostrarPaper();
