// Web bilingüe (español / inglés).
// - Si el visitante ya eligió idioma con el selector, se respeta (se guarda en este navegador).
// - Si no, se abre en español si el idioma principal de su navegador es español, y en inglés en cualquier otro caso.
// Cada texto traducible lleva data-i18n="clave" (o data-i18n-html si contiene etiquetas como <em>).
"use strict";
(() => {
  const T = {
    // --- Comunes ---
    "nav.proyectos": ["Proyectos", "Projects"],
    "nav.contacto": ["Contacto", "Contact"],
    "pie": ["© 2026 · Hugo Esteban Gómez Molina", "© 2026 · Hugo Esteban Gómez Molina"],

    // --- Portada ---
    "titulo": ["Hugo Esteban Gómez Molina · Programador", "Hugo Esteban Gómez Molina · Developer"],
    "meta": ["Portafolio de Hugo Esteban Gómez Molina, programador y creador de Nyx, un asistente de voz hecho a medida.",
             "Portfolio of Hugo Esteban Gómez Molina, developer and creator of Nyx, a custom-built voice assistant."],
    "eti": ["Programador · Creador de Nyx", "Developer · Creator of Nyx"],
    "h1": ["Le dices <em>«Nyx»</em> y la casa responde.", "Say <em>“Nyx”</em> and the house answers."],
    "intro": ["Construyo Nyx, un asistente de voz hecho a medida: controla el PC, la tele, la luz y el móvil, escucha en local y piensa en la nube. Python, Kotlin y JavaScript, y mucha prueba.",
              "I build Nyx, a custom voice assistant: it controls the PC, the TV, the lights and the phone, listens locally and thinks in the cloud. Python, Kotlin and JavaScript, and a lot of testing."],
    "claude": ["Lo he construido con ayuda de Claude Code: yo decidía qué hacer y cómo debía comportarse, y lo probaba en mis aparatos.",
               "I built it with help from Claude Code: I decided what to make and how it should behave, and tested it on my own devices."],
    "btn.proyectos": ["Ver proyectos", "See projects"],
    "btn.contacto": ["Contacto", "Contact"],
    "cifra.proyecto": ["proyecto, 15 módulos", "project, 15 modules"],
    "cifra.n.pruebas": ["1.200+", "1,200+"],
    "cifra.pruebas": ["pruebas automáticas", "automated tests"],
    "cifra.commits": ["commits", "commits"],
    "cifra.lenguajes": ["lenguajes", "languages"],
    "video": ["Vídeo de Nyx funcionando (próximamente)", "Video of Nyx in action (coming soon)"],
    "carta.eti": ["Menú", "Menu"],
    "carta.titulo": ["Proyectos de la casa", "House specialties"],
    "ver": ["Ver ficha", "View details"],
    "p1.n": ["Asistente de voz", "Voice assistant"],
    "p1.d": ["Palabra de activación en local, IA en la nube con respaldos y voz por streaming.", "Wake word detected locally, cloud AI with fallbacks and streaming voice."],
    "p2.n": ["Memoria", "Memory"],
    "p2.d": ["Recuerdos en notas Markdown; a la IA solo le llegan los que importan.", "Memories stored as Markdown notes; the AI only gets the ones that matter."],
    "p3.n": ["App del móvil «Nyx salud»", "“Nyx salud” phone app"],
    "p3.d": ["Kotlin + WebView, Health Connect, holograma 3D y chat.", "Kotlin + WebView, Health Connect, a 3D hologram and chat."],
    "p4.n": ["Zona del gym", "Gym zone"],
    "p4.d": ["Registro de entrenos, 1RM, progreso y rangos tipo videojuego.", "Workout log, 1RM, progress tracking and video-game-style ranks."],
    "p5.n": ["App del reloj", "Watch app"],
    "p5.d": ["Wear OS: voz, gestos de muñeca y un despertador que exige andar.", "Wear OS: voice, wrist gestures and an alarm that makes you walk."],
    "p6.n": ["Mando del Apple TV y la tele", "Apple TV and TV remote"],
    "p6.d": ["pyatv, SponsorBlock y el control oficial de Samsung, en red local.", "pyatv, SponsorBlock and Samsung’s official control, all on the local network."],
    "p7.n": ["Bot de Telegram", "Telegram bot"],
    "p7.d": ["Nyx desde fuera de casa, con lista blanca estricta.", "Nyx from outside the house, with a strict allowlist."],
    "p8.n": ["Alexa", "Alexa"],
    "p8.d": ["Controlar el Echo y escuchar «dile a Nyx…», sin compras nunca.", "Controlling the Echo and hearing “tell Nyx…”, and never making purchases."],
    "p9.n": ["Ventana de letras", "Lyrics window"],
    "p9.d": ["Letras sincronizadas con Spotify en una ventana gótica.", "Lyrics synced with Spotify in a gothic floating window."],
    "p10.n": ["Barra de luz por radio", "Radio-controlled light bar"],
    "p10.d": ["ESP32 + nRF24 imitando un mando de radio, con CRC16 propio.", "ESP32 + nRF24 mimicking a radio remote, with a custom CRC16."],
    "p11.n": ["Extensión de Chrome", "Chrome extension"],
    "p11.d": ["Mandar la pestaña al PC o a la tele, con firma HMAC.", "Send the current tab to the PC or the TV, signed with HMAC."],
    "p12.n": ["Conexión segura", "Secure connection"],
    "p12.d": ["HMAC, antirrepetición y reto-respuesta entre los aparatos y el PC.", "HMAC, replay protection and challenge-response between the devices and the PC."],
    "p13.n": ["Casa y día a día", "Home and daily life"],
    "p13.d": ["Bombilla por UDP, termómetro Bluetooth, alarmas en SQLite y más.", "UDP smart bulb, Bluetooth thermometer, SQLite alarms and more."],
    "p14.n": ["Control del PC y «la luna»", "PC control and “the moon”"],
    "p14.d": ["Modo Stream, vigilante, indicador flotante y fondo animado.", "Stream Mode, watchdog, floating indicator and animated wallpaper."],
    "p15.n": ["Gestos con la cámara", "Camera gestures"],
    "p15.d": ["En desarrollo. MediaPipe y reglas geométricas.", "In progress. MediaPipe and geometric rules."],
    "contacto.titulo": ["Hablemos.", "Let’s talk."],
    "contacto.texto": ["¿Tienes una idea, una oferta o una pregunta sobre Nyx? Escríbeme.", "Have an idea, an offer or a question about Nyx? Write to me."],
    "contacto.btn": ["Enviar un correo", "Send an email"],

    // --- Fichas (por ahora con texto de ejemplo) ---
    "f.volver": ["← Volver al menú", "← Back to the menu"],
    "f.img": ["Imagen o vídeo del proyecto", "Project image or video"],
    "f.que": ["Qué es", "What it is"],
    "f.que.t": ["Texto de ejemplo. Dos o tres frases explicando el proyecto: qué problema resuelve y para quién.", "Sample text. Two or three sentences explaining the project: what problem it solves and for whom."],
    "f.como": ["Cómo funciona", "How it works"],
    "f.como.1": ["Punto de ejemplo sobre una parte del funcionamiento.", "Sample point about one part of how it works."],
    "f.como.2": ["Otro punto de ejemplo sobre la tecnología usada.", "Another sample point about the technology used."],
    "f.como.3": ["Un tercer punto con algún detalle interesante.", "A third point with an interesting detail."],
    "f.aprendi": ["Lo que aprendí", "What I learned"],
    "f.aprendi.t": ["Texto de ejemplo sobre los retos y lo aprendido construyéndolo.", "Sample text about the challenges and what I learned building it."],
    "f.codigo": ["Ver código", "View code"],
    "f.demo": ["Ver demo", "View demo"],
    "f.resumen": ["Una línea de ejemplo sobre qué hace este proyecto.", "A sample line about what this project does."],
    "f.tag.etiqueta": ["Etiqueta", "Tag"],
    "f.tag.ejemplo": ["Ejemplo", "Example"],
    "f.tag.ia": ["IA", "AI"],
    "f.tag.voz": ["Voz", "Voice"],
    "f.nyx.resumen": ["Asistente de voz que controla el PC y responde en tiempo real.", "Voice assistant that controls the PC and answers in real time."],
    "f.dos": ["Proyecto dos", "Project two"],
    "f.tres": ["Proyecto tres", "Project three"],
    "f.sig.dos": ["Proyecto dos →", "Project two →"],
    "f.sig.tres": ["Proyecto tres →", "Project three →"],
    "f.ant.nyx": ["← Nyx", "← Nyx"],
    "f.ant.dos": ["← Proyecto dos", "← Project two"],
    "f.t.nyx": ["Nyx · Hugo Esteban Gómez Molina", "Nyx · Hugo Esteban Gómez Molina"],
    "f.t.dos": ["Proyecto dos · Hugo Esteban Gómez Molina", "Project two · Hugo Esteban Gómez Molina"],
    "f.t.tres": ["Proyecto tres · Hugo Esteban Gómez Molina", "Project three · Hugo Esteban Gómez Molina"],
  };

  const CLAVE = "idioma";
  const guardado = () => { try { const v = localStorage.getItem(CLAVE); return v === "es" || v === "en" ? v : null; } catch (e) { return null; } };
  const guardar = v => { try { localStorage.setItem(CLAVE, v); } catch (e) { /* sin almacenamiento: no se recuerda, pero funciona */ } };
  const delNavegador = () => {
    const principal = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    return /^es\b/i.test(principal) ? "es" : "en";
  };

  function aplicar(idioma) {
    const i = idioma === "es" ? 0 : 1;
    document.documentElement.lang = idioma;
    document.querySelectorAll("[data-i18n]").forEach(el => { const t = T[el.dataset.i18n]; if (t) el.textContent = t[i]; });
    document.querySelectorAll("[data-i18n-html]").forEach(el => { const t = T[el.dataset.i18nHtml]; if (t) el.innerHTML = t[i]; });
    const meta = document.querySelector('meta[name="description"][data-i18n-meta]');
    if (meta && T[meta.dataset.i18nMeta]) meta.content = T[meta.dataset.i18nMeta][i];
    document.querySelectorAll("[data-idioma]").forEach(b => {
      const otro = idioma === "es" ? "en" : "es";
      b.textContent = otro === "en" ? "English" : "Español";
      b.lang = otro;
      b.dataset.idioma = otro;
    });
  }

  aplicar(guardado() || delNavegador());
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-idioma]");
    if (!b) return;
    const nuevo = b.dataset.idioma;
    guardar(nuevo);
    aplicar(nuevo);
  });
})();
