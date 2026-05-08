let rechazosSeguidos = 0;
let reputacion = 100;

let paperActual = null;

const noticias = [

"📊 Excel cambia comas por puntos… el modelo colapsa",
"🧠 Investigador asegura que “se ve bien” → aprobado",
"📉 Se pierde la base de datos… se decide “recordarla”",
"☕ Café derramado mejora significativamente el ajuste",
"🐒 Mono presiona teclas… obtiene mejor CFI",
"📚 Paper de 300 páginas resumido en “todo ok”",
"💬 Revisor 2 pide “algo más”… sin especificar",
"🧪 Científico usa la misma muestra por quinta vez",
"📊 Gráfica bonita aumenta credibilidad en 80%",
"🧠 Autor olvida hipótesis… decide improvisar una",

"🎓 Estudiantes responden encuesta al azar… mejora la fiabilidad",
"🤖 IA redacta paper completo… revisor dice “muy humano”",
"📊 Estudiantes marcan todo “neutral” por paz mental",
"🤖 IA inventa referencias… todas parecen reales",
"🎓 Encuesta aplicada viernes 7pm… resultados caóticos",

"🤖 IA entiende perfectamente el modelo… decide ignorarlo",
"🎓 Estudiantes responden con total sinceridad… resultados inutilizables",
"📉 Datos inconsistentes… pero con mucha confianza",
"🤖 IA concluye con seguridad… sin evidencia",
"🎓 Muestra representativa… de una sola clase",

"📊 Participantes descubren la escala Likert… la usan como arte abstracto",
"🧠 Alfa de Cronbach alcanza 0.99… sospecha colectiva activada",
"📊 Todos responden “ni de acuerdo ni en desacuerdo”… paz mundial lograda",
"🧪 Validez de contenido evaluada por el primo del investigador",
"📉 Confiabilidad aceptable… teoría inexistente",

"🧠 73% de investigadores fingen entender el RMSEA",
"📉 Todo es correlación, afirma experto cansado",
"🧻 Nuevo índice: ‘CFI vibes’ reemplaza métricas reales",
"📢 Editor: ‘Confíen en su intuición’",
"🌀 Si el modelo ajusta pero nadie lo entiende… ¿ajusta?",

"📊 El RMSEA es un estado mental",
"🧠 El verdadero ajuste fueron los amigos que hicimos",
"🎓 Alumno responde todo en diagonal… consistencia perfecta",
"🤖 IA optimiza el modelo… elimina sentido teórico",
"📉 Resultados ambiguos… conclusiones firmes",

"📊 Gráfico sin etiquetas gana premio",
"🐀 Rata aparece en agradecimientos",
"🧠 Científico convence a todos con seguridad",
"📚 Cita circular detectada… nadie la cuestiona",
"📉 Modelo no converge… se ignora",

"🎓 Encuesta aplicada temprano… respuestas medio dormidas",
"🤖 IA genera resultados “demasiado buenos”",
"📊 Escala Likert usada como binaria",
"🧠 Ítems ambiguos… respuestas seguras",
"📉 Error sistemático… tradición respetada",

"🐒 Mono rechaza paper por aburrido",
"☕ Café considerado variable moderadora",
"🎓 Clase responde en silencio… sospechosamente coordinados",
"🤖 IA mejora redacción… borra significado",
"📊 Resultados claros… interpretación confusa"

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

  // CONTADOR DE RECHAZOS 
  
  if(decision === "rechazar"){
  rechazosSeguidos++;
}else{
  rechazosSeguidos = 0;
}

  // RECOMPENSAS
  
  if(decision === correcta){

  if(correcta === "excelente"){
    reputacion += 25;
  }

  else if(correcta === "aceptable"){
    reputacion += 15;
  }

  else if(correcta === "rechazar"){
    reputacion += 5;
  }

}else{

  // castigamos según el error

  if(correcta === "excelente"){
    reputacion -= 30;
  }

  else if(correcta === "aceptable"){
    reputacion -= 20;
  }

  else if(correcta === "rechazar"){
    reputacion -= 25;
  }

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

  if(rechazosSeguidos >= 5){

  reputacion -= 20;

  document.getElementById("ticker").innerText =
    "⚠ Sesgo editorial detectado";

  rechazosSeguidos = 0;

}
  mostrarPaper();

}

mostrarPaper();
