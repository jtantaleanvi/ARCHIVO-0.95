const popups = [

"SPSS dejó de responder",
"⚠ Error metodológico inesperado",
"🤖 IA detectó emociones humanas",
"📊 Excel eliminó una columna importante",
"🧠 Revisor 2 ha despertado"

];
let paperID = 1;
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
"📊 Resultados claros… interpretación confusa",

"🧫 Rata de laboratorio escapa y ahora es coautora",
"☕ Científico derrama café sobre datos… decide ‘improvisar’",
"📊 Excel decide redondear todo a 0",
"📚 Científicos descubren que no saben qué están midiendo",
"🐒 Mono aprueba modelo con mejor ajuste que humanos",

"🎲 Estudio acepta papers al azar… mejora impacto",
"💬 Revisor comenta: ‘No me gusta el título’ → rechazo",
"📝 Paper rechazado por usar ‘demasiados números’",
"📢 Editor: ‘Confíen en su intuición’",
"🌀 El modelo ajusta… espiritualmente",

"📊 Investigador elimina outliers… desaparece la muestra",
"🤖 IA propone marco teórico basado en horóscopos",
"🎓 Estudiante cita Wikipedia… en APA",
"📉 La desviación estándar también es emocional",
"📚 Se pierde el marco teórico en una actualización de Word",

"🧠 Investigador usa ChatGPT… ChatGPT pide vacaciones",
"🐀 Sujeto experimental muerde al investigador principal",
"📊 Participantes responden según vibra del día",
"🤖 IA recomienda eliminar la ética para acelerar resultados",
"🎓 Profesor descubre memes en los anexos",

"📉 El modelo tiene excelente ajuste y pésima explicación",
"📚 Artículo publicado por accidente… gana premio",
"🧠 Investigador habla del RMSEA como si fuera astrología",
"🐒 Mono logra publicar antes que doctorando",
"📊 Tabla desaparece misteriosamente antes de la revisión",

"🤖 IA detecta plagio… de sí misma",
"🎓 Estudiantes responden encuesta en 8 segundos",
"📉 Correlación significativa entre estrés y existencia",
"📚 Marco teórico compuesto enteramente de PDFs piratas",
"🧠 Revisor 2 despierta y rechaza 14 papers",

"☕ Café reemplaza variable independiente",
"📊 Participantes responden todo con 5 por rebeldía",
"🤖 IA sugiere ‘inventar un poquito’ los datos",
"🎓 Encuesta aplicada durante examen final… caos absoluto",
"📉 Investigador olvida guardar y alcanza iluminación",

"📚 Paper usa Comic Sans… comité entra en crisis",
"🧠 Científico intenta explicar AFC usando Dragon Ball",
"🐀 Rata obtiene mayor índice h que el laboratorio",
"📊 SPSS deja de responder y redefine el destino",
"🤖 IA redacta discusión filosóficamente incoherente",

"🎓 Alumno usa ChatGPT para responder encuesta",
"📉 Resultados no significativos… pero muy bonitos",
"📚 Paper aceptado porque nadie quiso leerlo",
"🧠 Modelo teórico sostenido únicamente por esperanza",
"📊 Excel convierte fechas en tragedia estadística",

"🤖 IA propone eliminar participantes ‘menos estéticos’",
"🎓 Participantes creen que Likert es cantante",
"📉 Error estándar alcanza niveles metafísicos",
"📚 Científico cita fuente inexistente con total seguridad",
"🧠 Hipótesis formulada después de ver resultados",

"🐒 Mono completa revisión por pares exitosamente",
"📊 Todos los caminos llevan a correlación",
"🤖 IA detecta sarcasmo… rechaza humanidad",
"🎓 Muestra compuesta exclusivamente por amigos",
"📉 Modelo explica 3% de la varianza y 100% del sufrimiento",

"📚 Revisor comenta únicamente: ‘meh’",
"🧠 Investigador asegura que el alfa ‘se siente confiable’",
"🐀 Rata destruye servidor y mejora metodología",
"📊 Participantes usan encuesta para desahogarse emocionalmente",
"🤖 IA reemplaza conclusión por poema existencial",

"🎓 Estudiantes responden mientras ven TikTok",
"📉 Error de tipeo crea nueva teoría psicológica",
"📚 Se descubre que nadie leyó la introducción",
"🧠 Científico olvida qué estaba investigando",
"📊 Variable dependiente se independiza",

"🤖 IA genera discusión usando frases motivacionales",
"🎓 Encuesta aplicada en grupo… pensamiento colectivo activado",
"📉 Datos normales estadísticamente, aterradores emocionalmente",
"📚 Paper contiene una sola cita: ‘confía en mí’",
"🧠 Investigador interpreta resultados según estado de ánimo",

"📊 Participantes responden aleatoriamente… patrón emerge",
"🤖 IA crea modelo imposible… ajusta perfecto",
"🎓 Profesor amenaza con participación obligatoria ‘voluntaria’",
"📉 Resultados inconclusos publicados con orgullo",
"📚 Comité aprueba paper porque ‘ya era tarde’",

"🧠 Alfa de Cronbach usado como argumento filosófico",
"📊 Escala Likert provoca crisis existencial",
"📉 Error muestral alcanza dimensiones bíblicas",
"🤖 IA concluye: ‘los humanos fueron el sesgo’",
"🎓 Estudiantes usan misma respuesta para todas las preguntas",

"📚 Marco teórico armado cinco minutos antes",
"🧠 Revisor 2 detecta felicidad… procede a rechazar",
"📊 Gráfico 3D usado para ocultar malas noticias",
"🤖 IA recomienda publicar y huir",
"🎓 Participantes responden según hambre",

"📉 La media ya no representa a nadie",
"📚 Paper entra en revisión eterna",
"🧠 Investigador cambia hipótesis ‘por estética’",
"📊 Outlier resulta ser el investigador",
"🤖 IA redacta limitaciones ofensivamente honestas",

"🎓 Clase completa responde igual por telepatía académica",
"📉 Resultados no replicables… pero inspiradores",
"📚 Científico descubre nueva variable accidentalmente",
"🧠 Estadístico abandona proyecto para criar cabras",
"📊 La tabla 4 contiene secretos prohibidos"

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

  document.getElementById("paper-id").innerText =
    "EXPEDIENTE #" + String(paperID).padStart(3,'0');

  paperID++;

  console.log(paperID);

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

  if(Math.random() < 0.25){
    
  mostrarPaper();

}

mostrarPaper();


function mostrarPopup(){

  let mensaje =
    popups[Math.floor(Math.random()*popups.length)];

  document.getElementById("popup-text").innerText =
    mensaje;

  document.getElementById("popup").style.display =
    "block";

}

function cerrarPopup(){

  document.getElementById("popup").style.display =
    "none";

}


