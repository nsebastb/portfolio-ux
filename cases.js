/* Contenido de los casos de estudio · ES / EN
   Los datos y cifras provienen del portfolio original; no se añadieron métricas nuevas. */
window.CASES = [
{
  id:"clarito", kind:"red", type:{es:"Voz en vivo · Retail",en:"Live voice · Retail"},
  sector:{es:"Retail telco · tienda",en:"Telco retail · store"}, year:"2026",
  title:{es:"Clarito, asesor de voz en tienda",en:"Clarito, an in-store voice advisor"},
  short:{es:"Un personaje que conversa por voz y muestra la conversación en texto.",en:"A character that talks by voice and shows the conversation as text."},
  line:{es:"«Hola, soy Clarito. Pulsa el botón para hablar conmigo.»",en:"“Hi, I’m Clarito. Press the button to talk to me.”"},
  lead:{es:"Un agente de voz con cuerpo y personalidad propia, pensado para la experiencia de una tienda de telecomunicaciones: el cliente pulsa un botón y conversa con él, sin menús ni formularios.",
        en:"A voice agent with its own body and personality, designed for a telecom store experience: the customer presses one button and talks to it, no menus or forms."},
  role:{es:"Diseño conversacional, personaje y experiencia web",en:"Conversation design, character and web experience"},
  stats:[["1",{es:"Botón para empezar a conversar",en:"Button to start talking"}],["Voz",{es:"Conversación en tiempo real",en:"Real-time conversation"}],["Texto",{es:"Transcripción visible en pantalla",en:"Visible on-screen transcript"}],["En vivo",{es:"Demo pública que puedes probar",en:"Public demo you can try"}]],
  challenge:{es:"En tienda, el cliente quiere orientación rápida y sin presión. Un chatbot de texto se siente frío; un vendedor no siempre está disponible.",en:"In store, customers want quick guidance without pressure. A text chatbot feels cold; a salesperson isn’t always available."},
  quote:{es:"Si la IA tiene cara y voz, conversar con ella debe sentirse tan natural como hablar con alguien de la tienda.",en:"If the AI has a face and a voice, talking to it should feel as natural as talking to someone in the store."},
  answer:{es:"Diseñé a Clarito como un personaje cercano: una mascota que saluda, escucha y responde por voz, con la conversación también en texto para quien prefiera leer.",en:"I designed Clarito as an approachable character: a mascot that greets, listens and answers by voice, with the conversation also shown as text for those who prefer reading."},
  steps:[
    [{es:"Personaje",en:"Character"},{es:"Una mascota con identidad propia que hace la IA cercana.",en:"A mascot with its own identity that makes the AI approachable."},"persona"],
    [{es:"Entrada en un gesto",en:"One-gesture entry"},{es:"Un solo botón: «Hablar con Clarito».",en:"A single button: “Talk to Clarito”."},"UI"],
    [{es:"Conversación por voz",en:"Voice conversation"},{es:"Agente conversacional de voz en tiempo real.",en:"Real-time conversational voice agent."},"ElevenLabs"],
    [{es:"Transcripción",en:"Transcript"},{es:"La conversación queda visible en texto, accesible para todos.",en:"The conversation stays visible as text, accessible to everyone."},"a11y"]
  ],
  live:true,
  tilesTitle:{es:"Decisiones de diseño",en:"Design decisions"},
  tiles:[
    [{es:"Un personaje, no un widget",en:"A character, not a widget"},{es:"La mascota da cara a la IA y baja la barrera para empezar a hablar.",en:"The mascot gives the AI a face and lowers the barrier to start talking."}],
    [{es:"Voz + texto",en:"Voice + text"},{es:"Hablar es lo natural; leer la transcripción da control y accesibilidad.",en:"Speaking is natural; reading the transcript gives control and accessibility."}],
    [{es:"Contexto de tienda",en:"Store context"},{es:"El entorno visual sitúa al cliente donde ocurre la decisión de compra.",en:"The visual setting places the customer where the buying decision happens."}]
  ]
},
{
  id:"telco", kind:"voice", type:{es:"Agente de voz",en:"Voice agent"},
  sector:{es:"Telecomunicaciones",en:"Telecommunications"}, year:"2026",
  title:{es:"Atención y ventas por voz",en:"Voice customer care & sales"},
  short:{es:"Un asesor que recomienda, valida y prepara el cierre sin sonar a robot.",en:"An advisor that recommends, validates and sets up the close without sounding robotic."},
  line:{es:"«De informar a empatizar.»",en:"“From informing to empathising.”"},
  lead:{es:"Un asesor comercial de voz para un operador de telecomunicaciones que recomienda, valida y prepara el cierre.",en:"A voice sales advisor for a telecom operator that recommends, validates and prepares the close."},
  role:{es:"Diseño conversacional + build (ElevenLabs, n8n)",en:"Conversation design + build (ElevenLabs, n8n)"},
  stats:[["24/7",{es:"Atención comercial por voz",en:"Voice sales coverage"}],["<100 ms",{es:"Respuesta de voz natural",en:"Natural voice response"}],["1",{es:"Asesor que escala sin saturarse",en:"Advisor that scales without overload"}],["6",{es:"Estados emocionales diseñados",en:"Designed emotional states"}]],
  challenge:{es:"En atención telefónica los bots suenan planos y los asesores se saturan con preguntas repetitivas. El cliente llega con dudas y, sin guía, posterga la compra.",en:"On the phone, bots sound flat and human advisors get swamped by repetitive questions. Customers arrive with doubts and, without guidance, postpone the purchase."},
  quote:{es:"En una llamada, la confianza no depende solo de lo que dices, sino de cómo lo dices.",en:"On a call, trust depends not only on what you say, but on how you say it."},
  answer:{es:"El reto: convertir una atención operativa en una experiencia guiada, humana y a escala.",en:"The challenge: turn an operational service into a guided, human experience at scale."},
  steps:[
    [{es:"Escucha activa",en:"Active listening"},{es:"Capta la necesidad en lenguaje natural, sin menús ni tonos.",en:"Captures the need in natural language, no menus or tones."},"intención"],
    [{es:"Recomienda",en:"Recommends"},{es:"Sugiere el plan según consumo y presupuesto, con lenguaje simple.",en:"Suggests a plan based on usage and budget, in plain language."},"consultar_plan"],
    [{es:"Valida",en:"Validates"},{es:"Confirma cobertura y datos del cliente antes de avanzar.",en:"Confirms coverage and customer data before moving on."},"n8n"],
    [{es:"Prepara el cierre",en:"Sets up the close"},{es:"Registra la intención de compra y agenda el siguiente paso.",en:"Logs purchase intent and schedules the next step."},"registrar_gestion"],
    [{es:"Cierra con calidez",en:"Warm close"},{es:"Despedida breve y NPS de la experiencia.",en:"Short goodbye and experience NPS."},"NPS"]
  ],
  videos:[["assets/telco.mp4","assets/telco-poster.jpg"]],
  emo:[
    [{es:"Saludo inicial",en:"Greeting"},{es:"Amable, energía moderada",en:"Friendly, moderate energy"},{es:"¡Hola! Soy tu asesor por hoy…",en:"Hi! I’m your advisor today…"}],
    [{es:"Cliente confundido",en:"Confused customer"},{es:"Paciente, paso a paso",en:"Patient, step by step"},{es:"Tranqui, lo vemos paso a paso.",en:"No worries, let’s go step by step."}],
    [{es:"Precio atractivo",en:"Great price"},{es:"Entusiasmo breve",en:"Brief enthusiasm"},{es:"Está buenazo para lo que ofrece.",en:"That’s a great deal for what you get."}],
    [{es:"Cliente molesto",en:"Upset customer"},{es:"Calma, contención",en:"Calm, containment"},{es:"Te entiendo. Lo revisamos juntos.",en:"I understand. Let’s check it together."}],
    [{es:"Intención de compra",en:"Purchase intent"},{es:"Seguridad, cierre",en:"Confidence, closing"},{es:"Perfecto, voy a registrar tus datos.",en:"Perfect, I’ll register your details."}],
    [{es:"Despedida",en:"Goodbye"},{es:"Cálido, breve",en:"Warm, brief"},{es:"Gracias por conversar conmigo.",en:"Thanks for talking with me."}]
  ],
  tilesTitle:{es:"Por qué importa",en:"Why it matters"},
  tiles:[
    [{es:"Confianza en la llamada",en:"Trust on the call"},{es:"El tono diseñado sostiene la conversación y reduce el abandono.",en:"The designed tone sustains the conversation and reduces drop-off."}],
    [{es:"Escala sin saturar",en:"Scale without overload"},{es:"Un asesor de voz cubre picos que antes colapsaban al equipo.",en:"A voice advisor covers peaks that used to overwhelm the team."}],
    [{es:"Experiencia guiada",en:"Guided experience"},{es:"De responder dudas a acompañar la decisión de compra.",en:"From answering questions to supporting the buying decision."}]
  ]
},
{
  id:"pago", kind:"voice", type:{es:"Agente de voz",en:"Voice agent"},
  sector:{es:"Banca · cobranzas",en:"Banking · collections"}, year:"2026",
  title:{es:"Cobranza que cierra acuerdos",en:"Collections that close agreements"},
  short:{es:"Un agente que escucha, empatiza y negocia. Un flujo para cuatro cobranzas.",en:"An agent that listens, empathises and negotiates. One flow for four collection types."},
  line:{es:"«De perseguir deudas a cerrar acuerdos.»",en:"“From chasing debt to closing agreements.”"},
  lead:{es:"Un agente de voz de cobranza y renegociación para banca, que escucha, empatiza y negocia.",en:"A collections and debt-renegotiation voice agent for banking that listens, empathises and negotiates."},
  role:{es:"UX del journey + build del agente (ElevenLabs, n8n)",en:"Journey UX + agent build (ElevenLabs, n8n)"},
  stats:[["4→1",{es:"Cuatro cobranzas, un solo flujo",en:"Four collection types, one flow"}],["24/7",{es:"Cobranza empática y a escala",en:"Empathetic collections at scale"}],["<100 ms",{es:"Voz natural en tiempo real",en:"Natural real-time voice"}],["NPS",{es:"Medido en cada cierre",en:"Measured at every close"}]],
  challenge:{es:"La cobranza vivía en cuatro flujos cerrados (preventiva, recordatorio, vencida y castigo). Pocas llamadas terminaban en promesa de pago y el cliente en mora se sentía presionado, no ayudado.",en:"Collections lived in four rigid flows (preventive, reminder, overdue and write-off). Few calls ended in a payment promise, and customers in arrears felt pressured, not helped."},
  quote:{es:"Renegociar una deuda es una conversación, no un menú.",en:"Renegotiating debt is a conversation, not a menu."},
  answer:{es:"Diseñé un solo flujo conversacional para las cuatro cobranzas: solo cambia la deuda que presenta y las ofertas que puede hacer.",en:"I designed a single conversational flow for all four: only the debt presented and the offers available change."},
  steps:[
    [{es:"Identifica",en:"Identifies"},{es:"Valida al titular antes de hablar de la deuda.",en:"Verifies the account holder before discussing the debt."},"validar_identidad"],
    [{es:"Presenta",en:"Presents"},{es:"Producto, monto y días de mora, con claridad.",en:"Product, amount and days overdue, clearly."},""],
    [{es:"Negocia",en:"Negotiates"},{es:"Escalera de ofertas: hoy, cuotas, descuento.",en:"Offer ladder: today, instalments, discount."},"ofertas"],
    [{es:"Registra",en:"Records"},{es:"Compromiso de pago guardado en vivo.",en:"Payment commitment saved live."},"registrar_gestion"],
    [{es:"Cierra",en:"Closes"},{es:"Motivo de no pago y NPS de la experiencia.",en:"Reason for non-payment and experience NPS."},"NPS"]
  ],
  videos:[["assets/pago-1.mp4","assets/pago-1-poster.jpg"],["assets/pago-2.mp4","assets/pago-2-poster.jpg"]],
  tilesTitle:{es:"Por qué importa",en:"Why it matters"},
  tiles:[
    [{es:"Una conversación, no un menú",en:"A conversation, not a menu"},{es:"La renegociación se siente como ayuda, no como presión.",en:"Renegotiation feels like help, not pressure."}],
    [{es:"Cada llamada, un dato",en:"Every call, a data point"},{es:"Motivo de no pago y NPS capturados para mejorar la estrategia.",en:"Non-payment reason and NPS captured to improve strategy."}],
    [{es:"Empatía a escala",en:"Empathy at scale"},{es:"Cuatro cobranzas atendidas 24/7 con un solo diseño.",en:"Four collection types handled 24/7 with one design."}]
  ]
},
{
  id:"energy", kind:"voice", type:{es:"Agente de voz",en:"Voice agent"},
  sector:{es:"Energía · atención comercial",en:"Energy · customer service"}, year:"2026",
  title:{es:"Atención comercial eléctrica",en:"Electricity customer service"},
  short:{es:"Luma resuelve cinco gestiones en la misma llamada, sin menús ni colas.",en:"Luma resolves five requests in the same call, with no menus or queues."},
  line:{es:"«De menús y colas a resolver en la llamada.»",en:"“From menus and queues to solving it on the call.”"},
  lead:{es:"Luma, el agente de voz para una empresa eléctrica, entiende la intención, valida el suministro y ejecuta la gestión.",en:"Luma, the voice agent for an electricity company, understands intent, validates the supply account and carries out the request."},
  role:{es:"Diseño del flujo + build del agente (ElevenLabs, n8n)",en:"Flow design + agent build (ElevenLabs, n8n)"},
  stats:[["5",{es:"Gestiones en una sola llamada",en:"Requests in a single call"}],["0",{es:"Menús de IVR",en:"IVR menus"}],["24/7",{es:"Autoservicio por voz",en:"Voice self-service"}],["1",{es:"Derivación segura ante riesgo",en:"Safe handoff when at risk"}]],
  challenge:{es:"El sector atiende por IVR y colas: el cliente espera, repite y lo transfieren. Se contiene volumen, pero la gestión sigue sin resolverse dentro de la llamada.",en:"The sector relies on IVRs and queues: customers wait, repeat themselves and get transferred. Volume is contained, but the request still isn’t solved within the call."},
  quote:{es:"Un solo flujo para cinco gestiones: cambia lo que resuelve, no el método.",en:"One flow for five requests: what it solves changes, not the method."},
  answer:{es:"Diseñé un único flujo conversacional para las cinco gestiones comerciales; la emergencia o el reclamo va directo a un asesor humano.",en:"I designed a single conversational flow for the five service requests; emergencies or complaints go straight to a human advisor."},
  steps:[
    [{es:"Escucha",en:"Listens"},{es:"Capta la intención en lenguaje natural, sin menús.",en:"Captures intent in natural language, no menus."},"intención"],
    [{es:"Identifica",en:"Identifies"},{es:"Valida el suministro con el N.º de cliente.",en:"Validates the supply with the customer number."},"consultar_cliente"],
    [{es:"Resuelve",en:"Resolves"},{es:"Ejecuta una de las cinco gestiones con sus herramientas.",en:"Runs one of the five requests with its tools."},"n8n"],
    [{es:"Confirma",en:"Confirms"},{es:"Solo datos de la fuente oficial; DNI si es cambio de titular.",en:"Only data from the official source; ID if it’s a change of holder."},"validación"],
    [{es:"Cierra",en:"Closes"},{es:"NPS y «¿necesitas algo más?».",en:"NPS and “anything else?”."},"NPS"]
  ],
  videos:[["assets/energy.mp4","assets/energy-poster.jpg"]],
  emo:[
    [{es:"Saludo inicial",en:"Greeting"},{es:"Cálida, ágil",en:"Warm, quick"},{es:"Hola, soy Luma, de NTT Energy. ¿En qué te ayudo hoy?",en:"Hi, I’m Luma from NTT Energy. How can I help today?"}],
    [{es:"Cliente confundido",en:"Confused customer"},{es:"Paciente, una pregunta",en:"Patient, one question"},{es:"¿Quieres saber cuánto debes, o una copia del recibo?",en:"Do you want to know what you owe, or a copy of the bill?"}],
    [{es:"Cambio de titular",en:"Change of holder"},{es:"Pedagógica, seguridad",en:"Explanatory, secure"},{es:"Es un trámite importante: valido tu identidad paso a paso.",en:"It’s an important process: I’ll verify your identity step by step."}],
    [{es:"Insiste en el monto",en:"Disputes the amount"},{es:"Contención, sin discutir",en:"Containment, no arguing"},{es:"Entiendo. Si crees que hay un error, te comunico con un asesor.",en:"I understand. If you think there’s an error, I’ll connect you with an advisor."}],
    [{es:"Emergencia",en:"Emergency"},{es:"Empática, deriva ya",en:"Empathetic, hand off now"},{es:"Un momento, te comunico con un ejecutivo.",en:"One moment, I’m connecting you with an agent."}],
    [{es:"Despedida",en:"Goodbye"},{es:"Cálida, cierre claro",en:"Warm, clear close"},{es:"Gracias por llamar a NTT Energy.",en:"Thanks for calling NTT Energy."}]
  ],
  tilesTitle:{es:"Qué resuelve el agente",en:"What the agent resolves"},
  tiles:[
    [{es:"Cortes y averías",en:"Outages"},{es:"Identifica el suministro y consulta el caso: si no existe lo crea, si existe informa su estado.",en:"Identifies the supply and checks the case: creates it if new, reports status if it exists."}],
    [{es:"Consultas de cuenta",en:"Account queries"},{es:"Monto y vencimiento, consumo y próxima lectura, o canales oficiales de pago.",en:"Amount and due date, usage and next reading, or official payment channels."}],
    [{es:"Pagos",en:"Payments"},{es:"Informa el importe y guía a la app, la web o el banco.",en:"States the amount and guides to the app, website or bank."}],
    [{es:"Copia de recibo",en:"Bill copy"},{es:"Confirma periodo y correo, y dispara <code>enviar_copia_recibo</code>.",en:"Confirms period and email, then triggers <code>enviar_copia_recibo</code>."}],
    [{es:"Cambio de titular",en:"Change of holder"},{es:"Valida DNI, captura al nuevo titular y registra con <code>registrar_cambio_titular</code>.",en:"Validates ID, captures the new holder and records it with <code>registrar_cambio_titular</code>."}],
    [{es:"Riesgo crítico",en:"Critical risk"},{es:"Detecta el peligro en el triaje, prioriza la seguridad y transfiere a un especialista.",en:"Detects danger during triage, prioritises safety and transfers to a specialist."}]
  ]
},
{
  id:"salud", kind:"voice", type:{es:"Agente de voz",en:"Voice agent"},
  sector:{es:"Salud · atención al paciente",en:"Healthcare · patient care"}, year:"2026",
  title:{es:"Línea de atención al paciente",en:"Patient service line"},
  short:{es:"Identifica, pide consentimiento y ejecuta, con la seguridad en lógica dura.",en:"Identifies, asks for consent and acts, with safety in hard logic."},
  line:{es:"«De recepcionar a agendar.»",en:"“From answering calls to booking.”"},
  lead:{es:"Un agente de voz para salud que identifica al paciente, pide consentimiento y ejecuta la gestión, con la seguridad en lógica dura, trazable nodo a nodo.",en:"A healthcare voice agent that identifies the patient, asks for consent and completes the request, with safety in hard logic, traceable node by node."},
  role:{es:"Flujo determinístico + prompts (ElevenLabs, n8n)",en:"Deterministic flow + prompts (ElevenLabs, n8n)"},
  stats:[["7",{es:"Rutas de servicio",en:"Service routes"}],["24/7",{es:"Atención al paciente",en:"Patient care"}],["2",{es:"Pasos de seguridad previos",en:"Prior safety steps"}],["100%",{es:"Trazable nodo a nodo",en:"Traceable node by node"}]],
  challenge:{es:"El objetivo: entender la intención, validar identidad y ejecutar la acción en la misma llamada, 24/7. Pero en salud la seguridad no puede depender del criterio del modelo.",en:"The goal: understand intent, verify identity and act within the same call, 24/7. But in healthcare, safety can’t depend on the model’s judgement."},
  quote:{es:"Sin identificar al paciente ni obtener su consentimiento, no se resuelve ningún trámite.",en:"No request is handled without identifying the patient and getting their consent."},
  answer:{es:"Diseñé un flujo determinístico donde la seguridad vive en lógica dura: siete rutas de servicio sobre un mismo patrón auditable.",en:"I designed a deterministic flow where safety lives in hard logic: seven service routes on one auditable pattern."},
  steps:[
    [{es:"Encuadre e identificación",en:"Framing & identification"},{es:"Saluda e identifica al paciente por su documento.",en:"Greets and identifies the patient by ID document."},"identificar_paciente"],
    [{es:"Consentimiento",en:"Consent"},{es:"Pide permiso para usar los datos de la clínica y registra la respuesta.",en:"Asks permission to use clinic data and records the answer."},"privacidad"],
    [{es:"Triaje de intención",en:"Intent triage"},{es:"Cita, costos, llegada, farmacia o bienestar; lo clínico va al médico.",en:"Appointments, costs, arrival, pharmacy or wellbeing; clinical questions go to a doctor."},"triaje"],
    [{es:"Ruta de servicio",en:"Service route"},{es:"Agenda, cobra o coordina con la herramienta correspondiente.",en:"Books, charges or coordinates with the right tool."},"n8n"],
    [{es:"Cierre y desenlace",en:"Close & outcome"},{es:"Resume la gestión y registra el desenlace.",en:"Summarises and records the outcome."},"registrar_gestion"]
  ],
  videos:[["assets/salud.mp4","assets/salud-poster.jpg"]],
  emo:[
    [{es:"Saludo inicial",en:"Greeting"},{es:"Amable, energía moderada",en:"Friendly, moderate energy"},{es:"¡Hola, te comunicaste con NTT Health! Soy Luma.",en:"Hi, you’ve reached NTT Health! I’m Luma."}],
    [{es:"Cliente con urgencia",en:"Urgent caller"},{es:"Paciente, guiador",en:"Patient, guiding"},{es:"Tranquilo, te comunico con emergencias.",en:"Stay calm, I’m connecting you to emergency."}],
    [{es:"Cliente confundido",en:"Confused caller"},{es:"Calma, sin alarmar",en:"Calm, not alarming"},{es:"Te lo explico nuevamente, con calma.",en:"Let me explain again, calmly."}],
    [{es:"Cliente molesto",en:"Upset caller"},{es:"Calma, contención",en:"Calm, containment"},{es:"Te entiendo. Déjame buscar la forma de ayudarte.",en:"I understand. Let me find a way to help."}],
    [{es:"Cita registrada",en:"Appointment booked"},{es:"Seguridad, cierre",en:"Confidence, closing"},{es:"Listo, tu cita quedó registrada con número.",en:"Done, your appointment is booked with a number."}],
    [{es:"Despedida",en:"Goodbye"},{es:"Cálida, breve",en:"Warm, brief"},{es:"Gracias por confiar en nosotros.",en:"Thank you for trusting us."}]
  ],
  tilesTitle:{es:"Siete gestiones, un solo asistente",en:"Seven requests, one assistant"},
  tiles:[
    [{es:"Citas",en:"Appointments"},{es:"Agenda, reprograma o cancela: ofrece 2–3 horarios y confirma antes de reservar.",en:"Books, reschedules or cancels: offers 2–3 slots and confirms before booking."}],
    [{es:"Costos y pago",en:"Costs & payment"},{es:"Explica costo y cobertura, informa reembolsos y cobra por QR, tarjeta o en sede.",en:"Explains cost and coverage, refunds, and charges by QR, card or on site."}],
    [{es:"Llegada",en:"Arrival"},{es:"Confirma sede, da tiempo estimado y consultorio, separa estacionamiento.",en:"Confirms location, ETA and room, reserves parking."}],
    [{es:"Farmacia y receta",en:"Pharmacy & prescription"},{es:"Valida receta y stock, coordina recojo o delivery y ofrece recordatorios.",en:"Validates prescription and stock, arranges pickup or delivery, offers reminders."}],
    [{es:"Bienestar y terapia",en:"Wellbeing & therapy"},{es:"Consulta el programa o agenda; ante angustia, deriva a una persona.",en:"Checks the programme or books; in distress, hands off to a person."}],
    [{es:"Imágenes y laboratorio",en:"Imaging & lab"},{es:"Agenda estudios y resuelve dudas de preparación validando la orden.",en:"Books tests and answers prep questions, validating the order."}]
  ]
},
{
  id:"research-telco", kind:"research", type:{es:"UX Research",en:"UX Research"},
  sector:{es:"E-commerce telco · NTT DATA",en:"Telco e-commerce · NTT DATA"}, year:"2026",
  title:{es:"De catálogo a asistente de decisión",en:"From catalogue to decision assistant"},
  short:{es:"3 formas de decidir, 5 drivers y un journey AS-IS → TO-BE.",en:"3 ways of deciding, 5 drivers and an AS-IS → TO-BE journey."},
  line:{es:"«El e-commerce world class no es el que más exhibe: es el que mejor acompaña la decisión.»",en:"“World-class e-commerce isn’t the one that shows the most: it’s the one that best supports the decision.”"},
  lead:{es:"Research para llevar el canal digital de un operador de «mostrar oferta» a «ayudar a decidir, contratar y seguir la promesa», con claridad, confianza y control.",en:"Research to move an operator’s digital channel from “showing offers” to “helping people decide, buy and follow the promise”, with clarity, trust and control."},
  role:{es:"UX Research, insights accionables",en:"UX Research, actionable insights"},
  stats:[["20",{es:"Referentes (desk research)",en:"Benchmarks (desk research)"}],["4",{es:"Expertos del canal",en:"Channel experts"}],["10",{es:"Usuarios escuchados",en:"Users interviewed"}],["3",{es:"Formas de decidir",en:"Ways of deciding"}]],
  challenge:{es:"En telco, comprar, instalar, activar, seguir y resolver son una sola promesa. Cuando la oferta no es clara, el usuario pierde confianza y compensa fuera del sitio: compara en otra web, consulta IA o busca un asesor.",en:"In telco, buying, installing, activating, tracking and resolving are a single promise. When the offer isn’t clear, users lose trust and compensate elsewhere: another site, AI, or an advisor."},
  quote:{es:"El reto no era vender online, sino construir una experiencia que ayude a decidir y cumpla lo prometido.",en:"The challenge wasn’t selling online, but building an experience that helps people decide and keeps its promise."},
  answer:{es:"Este hallazgo conecta con mi trabajo conversacional: el usuario ya consulta IA para decidir; el canal debe acompañar esa conversación.",en:"This finding connects to my conversational work: users already ask AI to decide; the channel must support that conversation."},
  steps:[
    [{es:"Desk research",en:"Desk research"},{es:"20 referentes analizados para mapear buenas prácticas.",en:"20 benchmarks analysed to map best practices."},"benchmark"],
    [{es:"Entrevistas expertas",en:"Expert interviews"},{es:"4 expertos del canal asistido, a fondo.",en:"4 assisted-channel experts, in depth."},""],
    [{es:"Escucha de usuarios",en:"User interviews"},{es:"10 usuarios escuchados en profundidad.",en:"10 users interviewed in depth."},""],
    [{es:"Síntesis",en:"Synthesis"},{es:"Leídos en 3 formas de decidir, no en segmentos rígidos.",en:"Read as 3 ways of deciding, not rigid segments."},"insights"]
  ],
  tilesTitle:{es:"Hallazgos y propuesta TO-BE",en:"Findings and TO-BE proposal"},
  tiles:[
    [{es:"De catálogo a decisión",en:"From catalogue to decision"},{es:"El usuario no busca más información: busca que la web le ayude a decidir.",en:"Users don’t want more information: they want the site to help them decide."}],
    [{es:"Claridad = confianza",en:"Clarity = trust"},{es:"Precio final, cobertura y restricciones visibles reducen la validación fuera del sitio.",en:"Visible final price, coverage and restrictions reduce off-site validation."}],
    [{es:"Una sola experiencia",en:"One experience"},{es:"Compra, soporte y seguimiento se viven como un solo journey.",en:"Purchase, support and tracking are lived as one journey."}],
    [{es:"Entrada guiada",en:"Guided entry"},{es:"Home por intención y rutas visibles por necesidad.",en:"Intent-led home and visible paths by need."}],
    [{es:"Decisión asistida",en:"Assisted decision"},{es:"Comparadores, simuladores y lenguaje claro.",en:"Comparators, simulators and plain language."}],
    [{es:"Postventa que sostiene",en:"Supportive after-sales"},{es:"Seguimiento de instalación, activación y soporte.",en:"Tracking of installation, activation and support."}]
  ],
  drivers:[{es:"Claridad",en:"Clarity"},{es:"Confianza",en:"Trust"},{es:"Transparencia",en:"Transparency"},{es:"Control",en:"Control"},{es:"Acompañamiento",en:"Support"}]
},
{
  id:"catering", kind:"research", type:{es:"UX Research · Mobile",en:"UX Research · Mobile"},
  sector:{es:"Bodas · app móvil",en:"Weddings · mobile app"}, year:"",
  title:{es:"App de catering de bodas",en:"Wedding catering app"},
  short:{es:"Elegir menú y proveedor sin perder horas comparando.",en:"Choosing menu and caterer without hours of comparing."},
  line:{es:"«Lo que parece lógico para el equipo puede confundir al usuario final.»",en:"“What seems logical to the team can confuse the end user.”"},
  lead:{es:"Las parejas pierden horas buscando y comparando proveedores. El objetivo: agilizar la elección del menú y del proveedor ideal, reduciendo fricción y tiempo.",en:"Couples lose hours searching and comparing caterers. The goal: speed up choosing the menu and the right caterer, reducing friction and time."},
  role:{es:"Investigadora UX, analista de usabilidad",en:"UX researcher, usability analyst"},
  tools:"Figma, Google Forms, Zoom",
  stats:[["Horas→min",{es:"En elegir proveedor",en:"To choose a caterer"}],["3",{es:"Fricciones detectadas",en:"Friction points found"}],["Baja-fi",{es:"Validada con testing",en:"Validated with testing"}],["$",{es:"Filtro por presupuesto clave",en:"Key budget filter"}]],
  challenge:{es:"La usuaria trabaja en un cargo importante y planifica su boda en tiempos muertos. No es amante de la tecnología, pero recurre a ella porque no tiene tiempo.",en:"The user holds a demanding job and plans her wedding in spare moments. She’s not a tech lover, but relies on it because she lacks time."},
  quote:{es:"Las apps se sienten complicadas, es difícil elegir entre tantas opciones y hay un presupuesto que respetar.",en:"Apps feel complicated, it’s hard to choose among so many options, and there’s a budget to respect."},
  answer:{es:"De los insights salió la arquitectura, los wireframes y un test de usabilidad que priorizó las mejoras.",en:"The insights led to the architecture, wireframes and a usability test that prioritised improvements."},
  steps:[
    [{es:"Descubrir",en:"Discover"},{es:"Insights: apps complicadas, difícil elegir y presupuesto limitado.",en:"Insights: complex apps, hard choices, limited budget."},"research"],
    [{es:"Definir",en:"Define"},{es:"Arquitectura de información a partir de los insights.",en:"Information architecture from the insights."},"IA"],
    [{es:"Diseñar",en:"Design"},{es:"Wireframes de baja fidelidad del flujo de cotización.",en:"Low-fi wireframes of the quote flow."},"Figma"],
    [{es:"Testear",en:"Test"},{es:"Usability testing sobre el flujo de contratación.",en:"Usability testing on the hiring flow."},"testing"],
    [{es:"Iterar",en:"Iterate"},{es:"Mejoras priorizadas para la siguiente iteración.",en:"Prioritised improvements for the next iteration."},"backlog"]
  ],
  shots:["assets/card-catering.png"],
  bars:[[{es:"Selección proveedor",en:"Caterer selection"},.92,{es:"Alta",en:"High"}],[{es:"Métodos de pago",en:"Payment methods"},.66,{es:"Media",en:"Medium"}],[{es:"Guardar favoritos",en:"Save favourites"},.54,{es:"Media",en:"Medium"}]],
  tilesTitle:{es:"La solución",en:"The solution"},
  tiles:[
    [{es:"Seleccionar proveedor",en:"Select caterer"},{es:"Botón claro y jerarquizado para el paso decisivo.",en:"Clear, prioritised button for the decisive step."}],
    [{es:"Métodos de pago",en:"Payment methods"},{es:"Menú desplegable que ordena las opciones sin saturar.",en:"Dropdown that organises options without clutter."}],
    [{es:"Filtros útiles",en:"Useful filters"},{es:"Por presupuesto y tipo de menú, la variable que más pesa.",en:"By budget and menu type, the variable that matters most."}]
  ]
},
{
  id:"veridik", kind:"research", type:{es:"UX/UI · Mobile",en:"UX/UI · Mobile"},
  sector:{es:"Empleo · producto",en:"Jobs · product"}, year:"",
  title:{es:"Veridik, la verdad sobre tu próximo empleo",en:"Veridik, the truth about your next job"},
  short:{es:"Reseñas reales de empresas y sueldos para decidir con datos.",en:"Real company reviews and salaries to decide with data."},
  line:{es:"«Una plataforma bien diseñada mejora la transparencia del mercado laboral.»",en:"“A well-designed platform improves job-market transparency.”"},
  lead:{es:"En un mercado donde las vacantes se idealizan y las experiencias reales quedan ocultas, los profesionales deciden su carrera a ciegas. Veridik los pone del lado del que decide.",en:"In a market where job ads are idealised and real experiences stay hidden, professionals choose their careers blind. Veridik puts them on the deciding side."},
  role:{es:"Diseñadora UX/UI",en:"UX/UI designer"},
  tools:"Figma",
  stats:[["Anónimo",{es:"Reseñas honestas y moderadas",en:"Honest, moderated reviews"}],["Ranking",{es:"De empresas mejor valoradas",en:"Of top-rated companies"}],["Comparador",{es:"De sueldos y empleos",en:"Of salaries and jobs"}],["Alta-fi",{es:"Diseño final navegable",en:"Navigable final design"}]],
  challenge:{es:"Las descripciones de vacantes idealizan el puesto; la experiencia real de quienes ya trabajaron ahí es el dato que falta para decidir bien.",en:"Job descriptions idealise the role; the real experience of past employees is the missing data for a good decision."},
  quote:{es:"Una plataforma bien diseñada no solo ayuda a decidir: mejora la transparencia del mercado laboral.",en:"A well-designed platform doesn’t just help people decide: it improves job-market transparency."},
  answer:{es:"Veridik muestra reseñas reales, sueldos y un ranking, con publicación anónima y moderación inteligente para cuidar la honestidad.",en:"Veridik shows real reviews, salaries and a ranking, with anonymous posting and smart moderation to protect honesty."},
  steps:[
    [{es:"Insight",en:"Insight"},{es:"Las vacantes idealizan; falta la voz de quien ya trabajó ahí.",en:"Job ads idealise; the voice of past employees is missing."},"research"],
    [{es:"Propuesta",en:"Proposal"},{es:"Plataforma de reseñas reales, sueldos y ranking.",en:"A platform for real reviews, salaries and ranking."},""],
    [{es:"Onboarding y home",en:"Onboarding & home"},{es:"Entrada clara y ranking de empresas al frente.",en:"Clear entry with company ranking up front."},"Figma"],
    [{es:"Reseñas",en:"Reviews"},{es:"Calificación y publicación anónima con moderación.",en:"Rating and anonymous posting with moderation."},""],
    [{es:"Comparador",en:"Comparator"},{es:"Sueldos, empleos y postulación en un mismo lugar.",en:"Salaries, jobs and applying in one place."},""]
  ],
  shots:["assets/veridik-1.png","assets/veridik-2.png","assets/veridik-3.png"],
  tilesTitle:{es:"Diseño final",en:"Final design"},
  tiles:[
    [{es:"Ranking de empresas",en:"Company ranking"},{es:"Onboarding y home que ponen la reputación al frente.",en:"Onboarding and home that put reputation first."}],
    [{es:"Reseñas anónimas",en:"Anonymous reviews"},{es:"Calificación y publicación protegida, con moderación inteligente.",en:"Protected rating and posting, with smart moderation."}],
    [{es:"Comparador",en:"Comparator"},{es:"Sueldos, empleos y postulación, para decidir con datos.",en:"Salaries, jobs and applying, to decide with data."}]
  ]
}
];

/* Situaciones del simulador de emociones (líneas reales de los casos) */
window.EMO_PLAY = [
  {k:"greet",  e:{es:"Saluda",en:"Greets"},          tone:{es:"Amable, energía moderada",en:"Friendly, moderate energy"}, say:{es:"¡Hola! Soy tu asesor por hoy…",en:"Hi! I’m your advisor today…"}, src:"telco", energy:.55, speed:1, warmth:.7},
  {k:"confused",e:{es:"Está confundido",en:"Is confused"}, tone:{es:"Paciente, paso a paso",en:"Patient, step by step"}, say:{es:"Tranqui, lo vemos paso a paso.",en:"No worries, let’s go step by step."}, src:"telco", energy:.3, speed:.6, warmth:.85},
  {k:"angry",  e:{es:"Está molesto",en:"Is upset"},       tone:{es:"Calma, contención",en:"Calm, containment"}, say:{es:"Te entiendo. Lo revisamos juntos.",en:"I understand. Let’s check it together."}, src:"telco", energy:.22, speed:.45, warmth:.95},
  {k:"urgent", e:{es:"Tiene una emergencia",en:"Has an emergency"}, tone:{es:"Empática, deriva ya",en:"Empathetic, hand off now"}, say:{es:"Un momento, te comunico con un ejecutivo.",en:"One moment, I’m connecting you with an agent."}, src:"energy", energy:.7, speed:1.5, warmth:.6},
  {k:"buy",    e:{es:"Quiere comprar",en:"Wants to buy"}, tone:{es:"Seguridad, cierre",en:"Confidence, closing"}, say:{es:"Perfecto, voy a registrar tus datos.",en:"Perfect, I’ll register your details."}, src:"telco", energy:.8, speed:1.15, warmth:.65},
  {k:"bye",    e:{es:"Se despide",en:"Says goodbye"},    tone:{es:"Cálido, breve",en:"Warm, brief"}, say:{es:"Gracias por confiar en nosotros.",en:"Thank you for trusting us."}, src:"salud", energy:.4, speed:.8, warmth:.9}
];
