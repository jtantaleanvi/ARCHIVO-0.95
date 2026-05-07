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

  let tipo = Math.random();

  // 🔴 PAPER MALO
  if(tipo < 0.6){

    return {

      tipo:"rechazar",

      CFI:(Math.random()*0.89).toFixed(2),
      TLI:(Math.random()*0.89).toFixed(2),

      RMSEA:(0.09 + Math.random()*0.3).toFixed(2),
      SRMR:(0.09 + Math.random()*0.3).toFixed(2)

    };

  }

  // 🟡 PAPER ACEPTABLE
  if(tipo < 0.9){

    return {

      tipo:"aceptable",

      CFI:(0.90 + Math.random()*0.05).toFixed(2),
      TLI:(0.90 + Math.random()*0.05).toFixed(2),

      RMSEA:(0.05 + Math.random()*0.03).toFixed(2),
      SRMR:(0.05 + Math.random()*0.03).toFixed(2)

    };

  }

  // 🟣 PAPER EXCELENTE
  return {

    tipo:"excelente",

    CFI:(0.95 + Math.random()*0.04).toFixed(2),
    TLI:(0.95 + Math.random()*0.04).toFixed(2),

    RMSEA:(Math.random()*0.04).toFixed(2),
    SRMR:(Math.random()*0.04).toFixed(2)

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
