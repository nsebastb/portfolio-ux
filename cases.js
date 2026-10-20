/* Contenido de los casos de estudio · ES / EN
   Casos agnósticos: sin nombres de clientes, dolores internos ni sistemas. NTT DATA solo aparece en Clarito y en la experiencia.
   Cada caso va a lo esencial: cifras, reto, decisiones con su porqué, cómo se mide, resultados y otras funciones.
   decisions: [título, qué, por qué] · metrics: [qué mido, por qué] · videos: [src, poster, aspect-ratio opcional]
   group: voice | more · el orden de CASES es el orden del índice. */
window.CASES = [
{
  id:"clarito", kind:"red", group:"voice", type:{es:"Agente de voz · Demo en evento",en:"Voice agent · Event demo"},
  topic:{es:"Clarito · asesor de voz para ventas",en:"Clarito · voice sales advisor"},
  sector:{es:"Telecomunicaciones",en:"Telecommunications"}, year:"2026",
  title:{es:"Clarito, asesor de voz para ventas",en:"Clarito, a voice sales advisor"},
  short:{es:"Clarito: un asesor de voz con personalidad, presentado en vivo en un evento.",en:"Clarito: a voice advisor with personality, presented live at an event."},
  line:{es:"«¡Hola! Soy Clarito, ¿en qué te puedo ayudar hoy?»",en:"“Hi! I’m Clarito, how can I help you today?”"},
  lead:{es:"Un asesor de voz con nombre y personalidad que ayuda a elegir plan hogar, equipo o accesorios y a coordinar el retiro o la entrega, sin menús ni formularios.",
        en:"A voice advisor with its own name and personality that helps customers choose a home plan, device or accessories and arranges pickup or delivery, with no menus or forms."},
  context:{es:"Demo presentada en vivo en un evento de experiencia de cliente, creada por NTT DATA",en:"Live demo presented at a customer experience event, created by NTT DATA"},
  role:{es:"Diseño conversacional y UX, y construcción del agente en ElevenLabs",en:"Conversational design and UX, and agent build in ElevenLabs"},
  recording:true,
  stats:[["En vivo",{es:"Presentado en un evento de cliente",en:"Presented at a client event"}],["3",{es:"Versiones: de marca, agnóstica y en portugués",en:"Versions: branded, brand-agnostic and Portuguese"}],["0",{es:"Menús o formularios",en:"Menus or forms"}],["1",{es:"Próximo paso claro en cada cierre",en:"Clear next step at every close"}]],
  challenge:{es:"En un evento con ruido y público, el agente tenía que sonar cercano y vender sin presionar, hablándole a personas que nunca habían usado un asesor de voz.",
             en:"At a noisy event in front of an audience, the agent had to sound approachable and sell without pressure, talking to people who had never used a voice advisor."},
  videos:[["assets/clarito-demo.mp4","assets/clarito-demo-poster.jpg","454/850"]],
  decisions:[
    [{es:"Un personaje, no una voz anónima",en:"A character, not an anonymous voice"},{es:"Clarito tiene nombre, cuerpo y una boca que se mueve con su voz.",en:"Clarito has a name, a body and a mouth that moves with its voice."},{es:"Una cara y un nombre hacen más natural hablarle a una máquina frente a otras personas.",en:"A face and a name make talking to a machine in front of other people feel natural."}],
    [{es:"Preguntar antes de ofrecer",en:"Ask before offering"},{es:"Primero entiende qué busca el cliente, después recomienda.",en:"It first understands what the customer wants, then recommends."},{es:"Una recomendación sin contexto se siente como presión de venta.",en:"A recommendation without context feels like sales pressure."}],
    [{es:"Solo lo que existe",en:"Only what exists"},{es:"El catálogo de planes, equipos y accesorios vive en una base de datos que el agente consulta.",en:"The catalogue of plans, devices and accessories lives in a database the agent queries."},{es:"Así nunca inventa precios ni características.",en:"So it never makes up prices or features."}],
    [{es:"Una misma lógica, varias versiones",en:"One logic, several versions"},{es:"Diseñé una versión agnóstica de marca y otra en portugués.",en:"I designed a brand-agnostic version and a Portuguese one."},{es:"Para adaptar el mismo diseño a otros operadores e idiomas sin empezar de cero.",en:"To adapt the same design to other operators and languages without starting over."}]
  ],
  metrics:[
    [{es:"Conversaciones que terminan en retiro o entrega programada",en:"Conversations that end in a scheduled pickup or delivery"},{es:"Es la señal de que el agente no solo conversa: lleva a una acción.",en:"It shows the agent doesn’t just talk: it leads to an action."}],
    [{es:"NPS de la experiencia al cierre",en:"Experience NPS at the close"},{es:"Vender sin presionar tiene que notarse en cómo se sintió el cliente.",en:"Selling without pressure has to show in how the customer felt."}]
  ],
  others:[
    {es:"Recomendación de planes hogar, equipos y accesorios",en:"Recommends home plans, devices and accessories"},
    {es:"Coordinación de retiro en tienda o entrega",en:"Arranges in-store pickup or delivery"},
    {es:"Transcripción de la conversación en pantalla",en:"On-screen transcript of the conversation"},
    {es:"Registro del pedido en una base de datos",en:"Logs the order in a database"}
  ],
  learned:{es:"Un agente de voz no termina en la conversación: termina cuando el cliente sabe cuál es su siguiente paso.",
           en:"A voice agent doesn’t end with the conversation: it ends when the customer knows their next step."}
},
{
  id:"banca", kind:"voice", group:"voice", type:{es:"Agente de voz · Demo",en:"Voice agent · Demo"},
  topic:{es:"Acceso a la app y seguridad",en:"App access and security"},
  sector:{es:"Banca",en:"Banking"}, year:"2026",
  title:{es:"Agente de voz para acceso a la app",en:"Voice agent for app access"},
  short:{es:"Cómo se diseña la seguridad en una llamada.",en:"How security is designed into a call."},
  line:{es:"«Por tu seguridad, nunca te voy a pedir tu clave ni los códigos que te lleguen.»",en:"“For your security, I will never ask for your password or the codes you receive.”"},
  lead:{es:"Un agente que atiende a clientes que no pueden entrar a su app bancaria: entiende qué falla, los guía y deriva cuando la seguridad lo exige.",
        en:"A voice agent for customers locked out of their banking app: it works out what is failing, guides them and hands over when security requires it."},
  role:{es:"Diseño conversacional y UX completo y construcción del demo",en:"End-to-end conversational design and UX, and demo build"},
  stats:[["3",{es:"Tipos de falla de acceso priorizados",en:"Access failure types prioritised"}],["1",{es:"Pregunta para ubicar la falla",en:"Question to locate the failure"}],["9",{es:"Gestiones adicionales en el mismo agente",en:"Additional requests in the same agent"}],["0",{es:"Claves o códigos solicitados",en:"Passwords or codes requested"}]],
  challenge:{es:"Quien llama porque no puede entrar a su app suele estar apurado y preocupado por un posible fraude. Cada tipo de falla pide una conversación distinta.",
             en:"People who call because they can’t get into their app are usually in a hurry and worried about possible fraud. Each type of failure needs a different conversation."},
  decisions:[
    [{es:"Diagnosticar antes de guiar",en:"Diagnose before guiding"},{es:"Una sola pregunta ubica la falla: rostro, código o contraseña.",en:"A single question locates the failure: face, code or password."},{es:"Cada falla tiene su propio camino; guiar sin saber cuál alarga la llamada.",en:"Each failure has its own path; guiding without knowing which one makes the call longer."}],
    [{es:"La seguridad no se negocia",en:"Security is non-negotiable"},{es:"El agente nunca pide claves, PIN ni códigos, y lo dice en voz alta.",en:"The agent never asks for passwords, PINs or codes, and says so out loud."},{es:"Decirlo en voz alta genera confianza y enseña al cliente a no compartir esos datos.",en:"Saying it out loud builds trust and teaches customers not to share that data."}],
    [{es:"El fraude cambia el orden",en:"Fraud changes the order"},{es:"Primero se protege la cuenta y después se recoge el detalle.",en:"The account is protected first and the details gathered after."},{es:"En un posible fraude, el detalle puede esperar; la protección no.",en:"In a possible fraud, the details can wait; protection can’t."}],
    [{es:"Derivar con contexto",en:"Hand over with context"},{es:"El asesor recibe un resumen de lo que pasó.",en:"The advisor receives a summary of what happened."},{es:"Para que el cliente no tenga que repetir su historia.",en:"So the customer doesn’t have to repeat their story."}]
  ],
  metrics:[
    [{es:"Fallas de acceso resueltas sin derivar",en:"Access failures resolved without handover"},{es:"Mide si el diagnóstico y la guía funcionan.",en:"Shows whether the diagnosis and guidance work."}],
    [{es:"Derivaciones con resumen para el asesor",en:"Handovers with a summary for the advisor"},{es:"Una derivación sin contexto es una llamada que empieza de cero.",en:"A handover without context is a call that starts from zero."}],
    [{es:"Desenlace y NPS por llamada",en:"Outcome and NPS per call"},{es:"Para saber qué mejorar primero.",en:"To know what to improve first."}]
  ],
  others:[
    {es:"Movimientos no reconocidos",en:"Unrecognised transactions"},
    {es:"Pérdida o robo de tarjeta",en:"Lost or stolen cards"},
    {es:"Actualización de datos",en:"Personal data updates"},
    {es:"Estado de cuenta y pago de servicios",en:"Account statements and bill payments"},
    {es:"Reclamos, seguros y deudas",en:"Complaints, insurance and debts"}
  ],
  learned:{es:"En un banco, la confianza se construye con lo que el agente se niega a pedir.",
           en:"In a bank, trust is built on what the agent refuses to ask for."}
},
{
  id:"salud", kind:"voice", group:"voice", type:{es:"Agente de voz · Demo",en:"Voice agent · Demo"},
  topic:{es:"Citas y triaje de urgencias",en:"Appointments and emergency triage"},
  sector:{es:"Salud",en:"Healthcare"}, year:"2026",
  title:{es:"Agente de voz para servicios de salud",en:"Voice agent for healthcare services"},
  short:{es:"El momento en que el agente deja de agendar y empieza a cuidar.",en:"The moment the agent stops scheduling and starts caring."},
  line:{es:"«Sabe cuándo dejar de agendar para empezar a cuidar.»",en:"“It knows when to stop scheduling and start caring.”"},
  lead:{es:"Un agente que atiende desde una cita de laboratorio hasta una posible urgencia, y que sabe cuándo dejar de agendar para empezar a cuidar.",
        en:"A voice agent that handles everything from lab appointments to possible emergencies, and knows when to stop scheduling and start caring."},
  role:{es:"Diseño conversacional y UX completo y construcción del demo",en:"End-to-end conversational design and UX, and demo build"},
  stats:[["8",{es:"Gestiones en una sola línea",en:"Requests on a single line"}],["2–3",{es:"Horarios ofrecidos por voz, en vez de un calendario",en:"Time slots offered by voice, instead of a calendar"}],["4",{es:"Datos confirmados antes de cerrar",en:"Details confirmed before closing"}],["0",{es:"Diagnósticos o consejos médicos",en:"Diagnoses or medical advice"}]],
  challenge:{es:"En una misma línea llaman personas que quieren un estacionamiento y otras que se sienten mal. El agente tiene que distinguirlas sin hacer esperar a nadie.",
             en:"The same line gets calls from people who want a parking spot and from people who feel unwell. The agent has to tell them apart without making anyone wait."},
  videos:[["assets/salud.mp4","assets/salud-poster.jpg"]],
  decisions:[
    [{es:"Escuchar la urgencia en todo momento",en:"Listen for urgency at all times"},{es:"Si aparece una señal de riesgo, el agente suspende el trámite y pasa al triaje.",en:"If a risk signal appears, the agent pauses the request and moves to triage."},{es:"Una urgencia no puede esperar a que termine un trámite.",en:"An emergency can’t wait for a request to finish."}],
    [{es:"No diagnostica ni aconseja",en:"It doesn’t diagnose or advise"},{es:"Orienta y deriva a quien corresponda.",en:"It guides and refers to the right person."},{es:"El criterio médico no se delega a un agente.",en:"Medical judgement isn’t delegated to an agent."}],
    [{es:"De pantalla a voz",en:"From screen to voice"},{es:"En lugar de un calendario, ofrece dos o tres horarios.",en:"Instead of a calendar, it offers two or three time slots."},{es:"Por voz, una lista larga satura la memoria y alarga la llamada.",en:"By voice, a long list overloads memory and stretches the call."}],
    [{es:"Confirmar antes de cerrar",en:"Confirm before closing"},{es:"Repite especialidad, día, hora y sede.",en:"It repeats specialty, day, time and location."},{es:"Un error en la cita obliga a volver a llamar.",en:"A booking mistake means calling back."}]
  ],
  metrics:[
    [{es:"Señales de urgencia detectadas",en:"Urgency signals detected"},{es:"La métrica más importante: ninguna urgencia debe quedar atrapada en un trámite.",en:"The most important metric: no emergency should get stuck in a request."}],
    [{es:"Citas confirmadas sin errores de datos",en:"Appointments confirmed without data errors"},{es:"Mide si la confirmación por voz cumple su función.",en:"Shows whether voice confirmation does its job."}],
    [{es:"Desenlace y NPS por llamada",en:"Outcome and NPS per call"},{es:"Para ver qué gestiones resuelve bien y cuáles no.",en:"To see which requests it handles well and which it doesn’t."}]
  ],
  results:[
    [{es:"Después de la demo",en:"After the demo"},{es:"Se pidió ampliar el caso de laboratorio e imágenes",en:"A request to extend the lab and imaging use case"}]
  ],
  others:[
    {es:"Citas por especialidad",en:"Appointments by specialty"},
    {es:"Imágenes y laboratorio",en:"Imaging and lab tests"},
    {es:"Terapias",en:"Therapy"},
    {es:"Costos y pagos",en:"Costs and payments"},
    {es:"Recojo de medicinas",en:"Medicine pickup"},
    {es:"Estacionamiento",en:"Parking"}
  ],
  learned:{es:"En salud, el diseño más importante es el de la transición: el momento en que el agente deja de ser administrativo y pasa a cuidar.",
           en:"In healthcare, the most important design is the transition: the moment the agent stops being administrative and starts caring."}
},
{
  id:"energy", kind:"voice", group:"voice", type:{es:"Agente de voz · Piloto",en:"Voice agent · Pilot"},
  topic:{es:"Interrupciones de servicio",en:"Service outages"},
  sector:{es:"Energía",en:"Energy"}, year:"2026",
  title:{es:"Agente de voz para interrupciones de servicio",en:"Voice agent for service outages"},
  short:{es:"De una demo a un piloto, recortando alcance con criterio.",en:"From a demo to a pilot, cutting scope with judgement."},
  line:{es:"«Diseñar bien también es decidir qué no integrar todavía.»",en:"“Good design is also deciding what not to integrate yet.”"},
  lead:{es:"Un agente que atiende en lenguaje natural llamadas por cortes de energía: identifica al cliente, consulta si ya existe un reporte, registra el caso y deriva a una persona cuando hay riesgo.",
        en:"A voice agent that handles power-outage calls in natural language: it identifies the customer, checks for an existing report, logs the case and hands over to a person when there is risk."},
  role:{es:"Diseño completo (flujo, matriz de emociones, tono, prompt, métricas y dashboard) y construcción",en:"Full design (flow, emotion matrix, tone, prompt, metrics and dashboard) and build"},
  stats:[["16 → 4",{es:"Flujos identificados → flujos en el piloto",en:"Flows identified → flows in the pilot"}],["1",{es:"Flujo para todas las gestiones",en:"Flow for every request"}],["1",{es:"Instrucción de seguridad antes de pedir datos",en:"Safety instruction before asking for details"}],["Piloto",{es:"Siguiente paso acordado tras la demo",en:"Next step agreed after the demo"}]],
  challenge:{es:"Quien llama por un corte suele estar molesto o preocupado, y necesita que lo atiendan rápido y sin repetir sus datos.",
             en:"People calling about an outage are usually upset or worried, and need quick help without repeating their details."},
  videos:[["assets/energy.mp4","assets/energy-poster.jpg"]],
  decisions:[
    [{es:"El riesgo cambia el orden",en:"Risk changes the order"},{es:"Si detecta peligro, primero da la instrucción de seguridad y después pide dirección y contacto.",en:"If it detects danger, it gives the safety instruction first and asks for address and contact details after."},{es:"La seguridad de la persona va antes que cualquier registro.",en:"The person’s safety comes before any record."}],
    [{es:"Sin duplicar",en:"No duplicates"},{es:"Antes de registrar, consulta si ya existe un reporte por el mismo motivo.",en:"Before logging, it checks whether a report already exists for the same issue."},{es:"En un corte masivo, los reportes repetidos saturan a quien tiene que resolverlos.",en:"In a mass outage, repeated reports overload the people who have to fix them."}],
    [{es:"La emoción se diseña por situación",en:"Emotion is designed per situation"},{es:"Cada momento tiene intención, frase y tag de voz.",en:"Each moment has an intent, a line and a voice tag."},{es:"El tono se ajusta a lo que vive el cliente, y el tag nunca se cuela en lo que escucha.",en:"The tone fits what the customer is going through, and the tag never leaks into what they hear."}],
    [{es:"Priorizar para el piloto",en:"Prioritise for the pilot"},{es:"De dieciséis flujos, cuatro entran al piloto.",en:"Of sixteen flows, four go into the pilot."},{es:"Los que más llamadas absorben en un corte y los que protegen a un cliente en riesgo; el resto queda en la hoja de ruta.",en:"Those that absorb the most calls in an outage and those that protect a customer at risk; the rest stays on the roadmap."}]
  ],
  metrics:[
    [{es:"Resolución sin asesor",en:"Resolution without an advisor"},{es:"Mide cuánto volumen absorbe el agente por sí solo.",en:"Shows how much volume the agent absorbs on its own."}],
    [{es:"Derivaciones con contexto",en:"Handovers with context"},{es:"Que la persona que recibe la llamada sepa quién llama, qué reportó y en qué paso quedó.",en:"So whoever takes the call knows who’s calling, what they reported and where they stopped."}],
    [{es:"Reportes duplicados evitados",en:"Duplicate reports avoided"},{es:"El valor del agente para operaciones durante un corte masivo.",en:"The agent’s value to operations during a mass outage."}],
    [{es:"Duración de la llamada",en:"Call duration"},{es:"Para comprobar que la conversación natural no alarga la atención.",en:"To check that natural conversation doesn’t make calls longer."}]
  ],
  results:[
    [{es:"Reacción a la demo",en:"Reaction to the demo"},{es:"Se validó el enfoque",en:"The approach was validated"}],
    [{es:"Siguiente paso acordado",en:"Agreed next step"},{es:"Piloto acotado, centrado en interrupciones de servicio",en:"A scoped pilot focused on service outages"}],
    [{es:"Registro por llamada",en:"Record per call"},{es:"Datos del cliente, motivo y número de orden, listos para operaciones",en:"Customer details, reason and order number, ready for operations"}]
  ],
  others:[
    {es:"Información de facturación y consumos",en:"Billing and usage information"},
    {es:"Pagos",en:"Payments"},
    {es:"Copia de recibo",en:"Bill copies"},
    {es:"Cambio de titular",en:"Change of account holder"},
    {es:"Dashboard de seguimiento",en:"Tracking dashboard"}
  ],
  learned:{es:"Diseñar bien también es decidir qué no integrar todavía. Un piloto acotado demuestra el valor del agente sin depender de sistemas que aún no están listos.",
           en:"Good design is also deciding what not to integrate yet. A scoped pilot proves the agent’s value without depending on systems that aren’t ready."}
},
{
  id:"pago", kind:"voice", group:"voice", type:{es:"Agente de voz · Demo",en:"Voice agent · Demo"},
  topic:{es:"Negociación de pagos",en:"Payment negotiation"},
  sector:{es:"Cobranza",en:"Collections"}, year:"2026",
  title:{es:"Agente de voz para cobranza",en:"Voice agent for collections"},
  short:{es:"Negociar una deuda sin presionar.",en:"Negotiating a debt without pressure."},
  line:{es:"«El reto no es cobrar, sino lograr un acuerdo que la persona pueda cumplir.»",en:"“The challenge isn’t collecting, it’s reaching an agreement the person can keep.”"},
  lead:{es:"Un agente que negocia el pago de una deuda de forma escalonada y registra el acuerdo, sin presionar al cliente.",
        en:"A voice agent that negotiates debt repayment in installments and records the agreement, firm but never pressuring."},
  role:{es:"Diseño conversacional y UX, y construcción del demo",en:"Conversational design and UX, and demo build"},
  stats:[["4 → 1",{es:"Etapas de cobranza en un solo flujo",en:"Collection stages in a single flow"}],["3",{es:"Ofertas escalonadas: hoy, cuotas o descuento",en:"Stepped offers: today, instalments or discount"}],["0",{es:"Ofertas inventadas por el agente",en:"Offers made up by the agent"}],["En vivo",{es:"Registro del acuerdo durante la llamada",en:"Agreement recorded during the call"}]],
  challenge:{es:"En una llamada de cobranza, el cliente suele llegar a la defensiva. El reto no es cobrar, sino lograr un acuerdo que la persona pueda cumplir.",
             en:"In a collections call, the customer is usually on the defensive. The challenge isn’t collecting, it’s reaching an agreement the person can keep."},
  videos:[["assets/pago-1.mp4","assets/pago-1-poster.jpg"]],
  decisions:[
    [{es:"Un solo flujo para todas las etapas",en:"One flow for every stage"},{es:"Solo cambian la deuda que presenta y las ofertas que puede hacer.",en:"Only the debt presented and the available offers change."},{es:"Un mismo comportamiento es más fácil de mantener, probar y mejorar.",en:"One behaviour is easier to maintain, test and improve."}],
    [{es:"Escalera de ofertas definidas",en:"A ladder of predefined offers"},{es:"Empieza por el pago de hoy y, si no es posible, pasa a cuotas o descuento.",en:"It starts with paying today and, if that’s not possible, moves to instalments or a discount."},{es:"Para llegar a un acuerdo que la persona pueda cumplir, sin prometer lo que no se puede.",en:"To reach an agreement the person can keep, without promising what can’t be given."}],
    [{es:"Firme y respetuoso, sin amenazas",en:"Firm and respectful, no threats"},{es:"El tono acompaña la negociación; nunca la empuja.",en:"The tone supports the negotiation; it never pushes it."},{es:"Un cliente presionado cuelga; uno escuchado negocia.",en:"A pressured customer hangs up; a heard one negotiates."}],
    [{es:"Validar antes de hablar de la deuda",en:"Verify before discussing the debt"},{es:"Confirma que habla con el titular.",en:"It confirms it’s speaking with the account holder."},{es:"Una deuda es información privada.",en:"A debt is private information."}]
  ],
  metrics:[
    [{es:"Acuerdos de pago logrados",en:"Payment agreements reached"},{es:"El resultado principal de la llamada.",en:"The main outcome of the call."}],
    [{es:"Motivo de no pago",en:"Reason for non-payment"},{es:"Entender por qué no se paga ayuda a ajustar las ofertas.",en:"Understanding why people don’t pay helps adjust the offers."}],
    [{es:"NPS al cierre",en:"NPS at the close"},{es:"Cobrar sin dañar la relación con el cliente.",en:"Collecting without damaging the customer relationship."}]
  ],
  others:[
    {es:"Validación del titular",en:"Account holder verification"},
    {es:"Registro del compromiso de pago",en:"Records the payment commitment"},
    {es:"Derivación a un asesor",en:"Handover to an advisor"},
    {es:"Motivo de no pago y NPS al cierre",en:"Reason for non-payment and NPS at the close"}
  ]
},
{
  id:"veridik", kind:"research", group:"more", type:{es:"UX/UI · Mobile",en:"UX/UI · Mobile"},
  sector:{es:"Empleo · producto",en:"Jobs · product"}, year:"",
  title:{es:"Veridik, la verdad sobre tu próximo empleo",en:"Veridik, the truth about your next job"},
  short:{es:"Reseñas reales de empresas y sueldos para decidir con datos.",en:"Real company reviews and salaries to decide with data."},
  line:{es:"«Una plataforma bien diseñada mejora la transparencia del mercado laboral.»",en:"“A well-designed platform improves job-market transparency.”"},
  lead:{es:"En un mercado donde las vacantes se idealizan y las experiencias reales quedan ocultas, los profesionales deciden su carrera a ciegas. Veridik los pone del lado del que decide.",en:"In a market where job ads are idealised and real experiences stay hidden, professionals choose their careers blind. Veridik puts them on the deciding side."},
  role:{es:"Diseñadora UX/UI",en:"UX/UI designer"},
  tools:"Figma",
  challenge:{es:"Las descripciones de vacantes idealizan el puesto; la experiencia real de quienes ya trabajaron ahí es el dato que falta para decidir bien.",en:"Job descriptions idealise the role; the real experience of past employees is the missing data for a good decision."},
  quote:{es:"Una plataforma bien diseñada no solo ayuda a decidir: mejora la transparencia del mercado laboral.",en:"A well-designed platform doesn’t just help people decide: it improves job-market transparency."},
  answer:{es:"Veridik muestra reseñas reales, sueldos y un ranking, con publicación anónima y moderación para cuidar la honestidad.",en:"Veridik shows real reviews, salaries and a ranking, with anonymous posting and moderation to protect honesty."},
  shots:["assets/veridik-1.png","assets/veridik-2.png","assets/veridik-3.png"],
  tilesTitle:{es:"Diseño final",en:"Final design"},
  tiles:[
    [{es:"Ranking de empresas",en:"Company ranking"},{es:"Onboarding y home que ponen la reputación al frente.",en:"Onboarding and home that put reputation first."}],
    [{es:"Reseñas anónimas",en:"Anonymous reviews"},{es:"Calificación y publicación protegida, con moderación.",en:"Protected rating and posting, with moderation."}],
    [{es:"Comparador",en:"Comparator"},{es:"Sueldos, empleos y postulación, para decidir con datos.",en:"Salaries, jobs and applying, to decide with data."}]
  ]
}
];

/* Situaciones del simulador de emociones (líneas reales de los casos) */
window.EMO_PLAY = [
  {k:"greet",   tag:"[cheerfully]", e:{es:"Saluda",en:"Greets"},          tone:{es:"Amable, energía moderada",en:"Friendly, moderate energy"}, say:{es:"¡Hola! Soy tu asesor por hoy…",en:"Hi! I’m your advisor today…"}, src:"telco", energy:.55, speed:1, warmth:.7},
  {k:"confused", tag:"[calmly]",e:{es:"Está confundido",en:"Is confused"}, tone:{es:"Paciente, paso a paso",en:"Patient, step by step"}, say:{es:"Tranqui, lo vemos paso a paso.",en:"No worries, let’s go step by step."}, src:"telco", energy:.3, speed:.6, warmth:.85},
  {k:"angry",   tag:"[empathetic]", e:{es:"Está molesto",en:"Is upset"},       tone:{es:"Calma, contención",en:"Calm, containment"}, say:{es:"Te entiendo. Lo revisamos juntos.",en:"I understand. Let’s check it together."}, src:"telco", energy:.22, speed:.45, warmth:.95},
  {k:"urgent",  tag:"[serious]", e:{es:"Tiene una emergencia",en:"Has an emergency"}, tone:{es:"Empática, deriva ya",en:"Empathetic, hand off now"}, say:{es:"Un momento, te comunico con un ejecutivo.",en:"One moment, I’m connecting you with an agent."}, src:"energy", energy:.7, speed:1.5, warmth:.6},
  {k:"buy",     tag:"[confident]", e:{es:"Quiere comprar",en:"Wants to buy"}, tone:{es:"Seguridad, cierre",en:"Confidence, closing"}, say:{es:"Perfecto, voy a registrar tus datos.",en:"Perfect, I’ll register your details."}, src:"telco", energy:.8, speed:1.15, warmth:.65},
  {k:"bye",     tag:"[warmly]", e:{es:"Se despide",en:"Says goodbye"},    tone:{es:"Cálido, breve",en:"Warm, brief"}, say:{es:"Gracias por confiar en nosotros.",en:"Thank you for trusting us."}, src:"salud", energy:.4, speed:.8, warmth:.9}
];
