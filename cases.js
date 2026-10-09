/* Contenido de los casos de estudio · ES / EN
   Clientes anonimizados (banco, clínica, empresa eléctrica), salvo Claro. Sin cifras internas ni nombres de personas o sistemas.
   group: voice | research | more · sin group = no aparece en el índice (Clarito tiene su propia sección). */
window.CASES = [
{
  id:"banca", kind:"voice", group:"voice", type:{es:"Agente de voz · PoV",en:"Voice agent · PoV"},
  topic:{es:"Acceso a la app y fraude",en:"App access and fraud"},
  sector:{es:"Banca",en:"Banking"}, year:"2026",
  title:{es:"Agente de voz para acceso a la app y gestiones frecuentes",en:"Voice agent for app access and everyday requests"},
  short:{es:"Entiende qué falla, guía paso a paso y deriva cuando la seguridad lo exige.",en:"Works out what is failing, guides step by step and hands over when security requires it."},
  line:{es:"«Por tu seguridad, nunca te voy a pedir tu clave ni los códigos que te lleguen.»",en:"“For your security, I will never ask for your password or the codes you receive.”"},
  lead:{es:"Un agente que atiende a clientes que no pueden entrar a su app bancaria: entiende qué falla, los guía paso a paso y deriva cuando la seguridad lo exige.",
        en:"A voice agent for customers locked out of their banking app: it works out what is failing, guides them step by step and hands over when security requires it."},
  context:{es:"Prueba de valor (PoV) presentada a un banco",en:"Proof of value (PoV) presented to a bank"},
  role:{es:"Diseño conversacional completo y construcción del demo, de principio a fin y por mi cuenta",en:"End-to-end conversational design and demo build, on my own"},
  problem:{es:"Quien llama porque no puede entrar a su app suele estar apurado, preocupado por un posible fraude y sin poder resolverlo solo. Cada tipo de falla pide una conversación distinta, y un agente que responde igual a todas termina frustrando.",
           en:"People who call because they can’t get into their app are usually in a hurry, worried about possible fraud and unable to fix it alone. Each type of failure needs a different conversation, and an agent that answers them all the same way ends up frustrating people."},
  scope:{es:"Nos centramos en los tres tipos de falla de acceso más frecuentes: validación biométrica, códigos de verificación y bloqueo de contraseña. Después amplié el agente a fraude y gestiones frecuentes: movimientos no reconocidos, pérdida o robo de tarjeta, cambio de correo, actualización de datos, estado de cuenta, pagos de servicios, reclamos, pólizas y deudas.",
         en:"We focused on the three most common access failures: biometric validation, verification codes and password lockout. I then extended the agent to fraud and everyday requests: unrecognised transactions, lost or stolen cards, email change, personal data updates, account statements, bill payments, complaints, insurance policies and debts."},
  decisions:[
    [{es:"Diagnosticar antes de guiar",en:"Diagnose before guiding"},{es:"Una sola pregunta para ubicar la falla (¿rostro, código o contraseña?), porque cada una tiene un camino distinto.",en:"A single question to locate the failure (face, code or password?), because each one has its own path."}],
    [{es:"La seguridad no se negocia",en:"Security is non-negotiable"},{es:"El agente nunca pide claves, PIN ni códigos recibidos por SMS o correo, y lo dice en voz alta.",en:"The agent never asks for passwords, PINs or codes received by SMS or email, and says so out loud."}],
    [{es:"Derivar solo cuando no hay otra forma de autenticar",en:"Hand over only when there’s no other way to authenticate"},{es:"El agente resuelve la validación por sí mismo y pasa a un asesor únicamente si el cliente no puede autenticarse por ningún otro medio.",en:"The agent handles validation itself and passes to an advisor only if the customer can’t authenticate any other way."}],
    [{es:"El fraude cambia el orden",en:"Fraud changes the order"},{es:"Ante un movimiento no reconocido o una tarjeta perdida, primero se contiene la situación y después se recoge el detalle.",en:"With an unrecognised transaction or a lost card, the situation is contained first and the details gathered after."}],
    [{es:"Derivar con contexto",en:"Hand over with context"},{es:"El asesor recibe un resumen; el cliente no repite su historia.",en:"The advisor gets a summary; the customer doesn’t repeat their story."}]
  ],
  emo:[
    [{es:"Cliente no puede entrar",en:"Customer can’t log in"},{es:"Calmar y ubicar la falla",en:"Calm and locate the failure"},{es:"Te ayudo con eso. ¿Qué te aparece al entrar: la validación de tu rostro, un código o tu contraseña?",en:"I’ll help you with that. What do you see when you log in: face validation, a code or your password?"}],
    [{es:"Falla la biometría",en:"Biometrics fail"},{es:"Guiar sin culpar",en:"Guide without blaming"},{es:"A veces la cámara no reconoce bien el rostro. Probemos un par de cosas antes de seguir.",en:"Sometimes the camera doesn’t recognise faces well. Let’s try a couple of things before moving on."}],
    [{es:"Dato sensible",en:"Sensitive data"},{es:"Firme y clara",en:"Firm and clear"},{es:"Por tu seguridad, nunca te voy a pedir tu clave ni los códigos que te lleguen.",en:"For your security, I will never ask for your password or the codes you receive."}],
    [{es:"Posible fraude",en:"Possible fraud"},{es:"Serena y rápida",en:"Calm and quick"},{es:"Vamos a proteger tu cuenta ahora. Cuéntame qué movimiento no reconoces.",en:"Let’s protect your account now. Tell me which transaction you don’t recognise."}],
    [{es:"Derivación",en:"Handover"},{es:"Cierre con contexto",en:"Close with context"},{es:"Te paso con un asesor y ya le cuento lo que me dijiste, no tendrás que repetirlo.",en:"I’ll pass you to an advisor and tell them what you told me, so you won’t have to repeat it."}]
  ],
  learned:{es:"En un banco, la confianza se construye con lo que el agente se niega a pedir. Y cada falla merece su propio camino: un flujo genérico para todo termina frustrando justo a quien más apurado está.",
           en:"In a bank, trust is built on what the agent refuses to ask for. And every failure deserves its own path: one generic flow for everything ends up frustrating exactly the person in the biggest hurry."}
},
{
  id:"salud", kind:"voice", group:"voice", type:{es:"Agente de voz · Demo",en:"Voice agent · Demo"},
  topic:{es:"Triaje de urgencias y citas",en:"Emergency triage and appointments"},
  sector:{es:"Salud",en:"Healthcare"}, year:"2026",
  title:{es:"Agente de voz para servicios de salud",en:"Voice agent for healthcare services"},
  short:{es:"De una cita de laboratorio a una posible urgencia: sabe cuándo dejar de agendar para empezar a cuidar.",en:"From lab appointments to possible emergencies: it knows when to stop scheduling and start caring."},
  line:{es:"«Sabe cuándo dejar de agendar para empezar a cuidar.»",en:"“It knows when to stop scheduling and start caring.”"},
  lead:{es:"Un agente que atiende desde una cita de laboratorio hasta una posible urgencia, y que sabe cuándo dejar de agendar para empezar a cuidar.",
        en:"A voice agent that handles everything from lab appointments to possible emergencies, and knows when to stop scheduling and start caring."},
  context:{es:"Demo presentada a una clínica",en:"Demo presented to a clinic"},
  role:{es:"Diseño conversacional completo y construcción, de principio a fin y por mi cuenta",en:"End-to-end conversational design and build, on my own"},
  problem:{es:"En una misma línea llaman personas que quieren un estacionamiento y otras que se sienten mal. El agente tiene que distinguirlas sin hacer esperar a nadie y sin dar la impresión de que un trámite importa más que una persona.",
           en:"The same line gets calls from people who want a parking spot and from people who feel unwell. The agent has to tell them apart without making anyone wait, and without suggesting that a procedure matters more than a person."},
  scope:{es:"Triaje de urgencias, citas, imágenes, laboratorio, terapias, costos y pagos, recojo de medicina y estacionamiento.",
         en:"Emergency triage, appointments, imaging, lab tests, therapy, costs and payments, medicine pickup and parking."},
  decisions:[
    [{es:"Escuchar la urgencia en todo momento",en:"Listen for urgency at all times"},{es:"Si aparece una señal de riesgo, el agente suspende el trámite y pasa al triaje.",en:"If a risk signal appears, the agent pauses the request and moves to triage."}],
    [{es:"No diagnostica ni aconseja",en:"It doesn’t diagnose or advise"},{es:"Orienta y deriva a quien corresponda.",en:"It guides and refers to the right person."}],
    [{es:"Partir del proceso que ya existía",en:"Start from the existing process"},{es:"Para imágenes y laboratorio llevé al agente las reglas de agendamiento que la clínica ya usaba en su app: la orden tiene fecha de vencimiento, una orden vencida no se agenda, algunos exámenes requieren validación previa y se derivan, y las órdenes virtuales se atienden en una sola sede.",en:"For imaging and lab tests I brought into the agent the booking rules the clinic already used in its app: orders have an expiry date, an expired order can’t be booked, some tests need prior validation and are referred, and virtual orders are handled at a single location."}],
    [{es:"De pantalla a voz",en:"From screen to voice"},{es:"En la app el paciente ve un calendario completo; por voz, el agente ofrece dos o tres horarios y confirma antes de reservar.",en:"In the app the patient sees a full calendar; by voice, the agent offers two or three slots and confirms before booking."}],
    [{es:"El tono cambia según la situación",en:"Tone changes with the situation"},{es:"Más cálido en terapias y salud, más ágil en citas y estacionamiento.",en:"Warmer for therapy and health, quicker for appointments and parking."}],
    [{es:"Confirmar antes de cerrar",en:"Confirm before closing"},{es:"Repite especialidad, día, hora y sede para evitar errores en las citas.",en:"Repeats specialty, day, time and location to avoid booking mistakes."}],
    [{es:"Muchas gestiones, un solo método",en:"Many requests, one method"},{es:"Escuchar → identificar → resolver → confirmar → cerrar.",en:"Listen → identify → resolve → confirm → close."}]
  ],
  videos:[["assets/salud.mp4","assets/salud-poster.jpg"]],
  emo:[
    [{es:"Posible urgencia",en:"Possible emergency"},{es:"Serena, directa",en:"Calm, direct"},{es:"Eso suena importante. Te hago unas preguntas rápidas para ver cómo ayudarte.",en:"That sounds important. Let me ask you a few quick questions to see how I can help."}],
    [{es:"Cita",en:"Appointment"},{es:"Ágil y precisa",en:"Quick and precise"},{es:"Listo. Te confirmo: [especialidad], el [día] a las [hora], en [sede]. ¿Está bien?",en:"Done. Let me confirm: [specialty], on [day] at [time], at [location]. Is that right?"}],
    [{es:"Orden vencida",en:"Expired order"},{es:"Clara, con salida",en:"Clear, with a way forward"},{es:"Esa orden ya venció, así que no puedo agendarla. Te indico cómo renovarla.",en:"That order has expired, so I can’t book it. I’ll tell you how to renew it."}],
    [{es:"Costos",en:"Costs"},{es:"Clara y honesta",en:"Clear and honest"},{es:"Te cuento lo que sé y, si necesitas el monto exacto, te indico cómo confirmarlo.",en:"I’ll tell you what I know and, if you need the exact amount, how to confirm it."}]
  ],
  result:{es:"Tras la demo, la clínica pidió ampliar el caso de laboratorio e imágenes. Para hacerlo, tomé como base el flujo de agendamiento que ya usaban en su app y llevé sus reglas a la conversación.",
          en:"After the demo, the clinic asked to extend the lab and imaging use case. To do it, I took the booking flow they already used in their app as a base and brought its rules into the conversation."},
  learned:{es:"En salud, el diseño más importante es el de la transición: el momento en que el agente deja de ser administrativo y pasa a cuidar. Y no hace falta inventar las reglas: muchas ya existen en los canales del cliente, el trabajo es traducirlas a una conversación.",
           en:"In healthcare, the most important design is the transition: the moment the agent stops being administrative and starts caring. And there’s no need to invent the rules: many already exist in the client’s channels; the work is translating them into a conversation."}
},
{
  id:"energy", kind:"voice", group:"voice", type:{es:"Agente de voz · Piloto",en:"Voice agent · Pilot"},
  topic:{es:"Interrupciones de servicio",en:"Service outages"},
  sector:{es:"Energía",en:"Energy"}, year:"2026",
  title:{es:"Agente de voz para interrupciones de servicio",en:"Voice agent for service outages"},
  short:{es:"Identifica al cliente, evita reportes duplicados y deriva cuando hay riesgo. Avanzó a una propuesta de piloto.",en:"Identifies the customer, avoids duplicate reports and hands over when there’s risk. It moved on to a pilot proposal."},
  line:{es:"«Cambia quién ejecuta el protocolo, no el protocolo.»",en:"“What changes is who runs the protocol, not the protocol.”"},
  lead:{es:"Un agente que atiende en lenguaje natural a clientes con cortes de energía: los identifica, consulta si ya existe un reporte, registra el caso y deriva a una persona cuando hay riesgo o reclamo.",
        en:"A voice agent that handles power-outage calls in natural language: it identifies the customer, checks for an existing report, logs the case and hands over to a person when there is risk or a complaint."},
  context:{es:"Demo presentada a una empresa eléctrica, seguida de una propuesta de piloto",en:"Demo presented to an electricity company, followed by a pilot proposal"},
  role:{es:"Diseño completo (flujo, matriz de emociones, tono, prompt, herramientas, métricas y dashboard) y construcción, de principio a fin y por mi cuenta",en:"Full design (flow, emotion matrix, tone, prompt, tools, metrics and dashboard) and build, end to end and on my own"},
  problem:{es:"El cliente espera, repite sus datos y lo transfieren. El menú de opciones contiene el volumen de llamadas, pero no resuelve, y quien llama por un corte suele estar molesto o preocupado.",
           en:"Customers wait, repeat their details and get transferred. The phone menu contains call volume but doesn’t resolve anything, and people calling about an outage are usually upset or worried."},
  scope:{es:"Triaje de emergencias, agenda de casos, información de facturación, pagos y consumos, copia de recibo y cambio de titular.",
         en:"Emergency triage, case logging, billing information, payments and usage, bill copies and change of account holder."},
  decisions:[
    [{es:"Un solo flujo para todas las gestiones",en:"One flow for every request"},{es:"Cambia la gestión, no el método.",en:"The request changes, not the method."}],
    [{es:"La emoción se diseña por situación",en:"Emotion is designed per situation"},{es:"Cada momento tiene intención, frase y tag de voz, y el tag nunca contamina lo que se le dice al cliente.",en:"Each moment has an intent, a line and a voice tag, and the tag never leaks into what the customer hears."}],
    [{es:"Lo sensible va en reglas",en:"Sensitive steps live in rules"},{es:"La identidad se valida antes de registrar un trámite y el agente solo informa datos de la fuente oficial.",en:"Identity is validated before any request is logged, and the agent only reports data from the official source."}],
    [{es:"El riesgo cambia el orden",en:"Risk changes the order"},{es:"Si detecta peligro, primero da la instrucción de seguridad y después pide dirección y contacto.",en:"If it detects danger, it gives the safety instruction first and asks for address and contact details after."}],
    [{es:"Sin duplicar",en:"No duplicates"},{es:"Antes de registrar, consulta si ya existe un reporte por el mismo motivo.",en:"Before logging, it checks whether a report already exists for the same issue."}],
    [{es:"Preguntar ante la duda",en:"Ask when in doubt"},{es:"Si el pedido puede significar dos cosas, el agente pregunta en vez de adivinar: «¿Quieres saber cuánto debes o necesitas una copia del recibo?»",en:"If a request could mean two things, the agent asks instead of guessing: “Do you want to know how much you owe, or do you need a copy of your bill?”"}]
  ],
  videos:[["assets/energy.mp4","assets/energy-poster.jpg"]],
  emo:[
    [{es:"Saludo",en:"Greeting"},{es:"Cálida y ágil",en:"Warm and quick"},{es:"Hola, soy [nombre]. ¿En qué te puedo ayudar con tu servicio hoy?",en:"Hi, I’m [name]. How can I help you with your service today?"}],
    [{es:"Cliente molesto por un monto",en:"Customer upset about an amount"},{es:"Contención, sin discutir",en:"Containment, no arguing"},{es:"Entiendo. Si crees que hay un error, te comunico con un asesor para revisarlo en detalle.",en:"I understand. If you think there’s an error, I’ll connect you with an advisor to review it in detail."}],
    [{es:"Riesgo",en:"Risk"},{es:"Serena, urgencia contenida",en:"Calm, contained urgency"},{es:"Tu caso es urgente. Te comunico con un especialista; mantente lejos de la zona.",en:"Your case is urgent. I’m connecting you with a specialist; stay away from the area."}],
    [{es:"Despedida",en:"Goodbye"},{es:"Cálida, con próximo paso",en:"Warm, with a next step"},{es:"Listo, quedó registrado. Si necesitas algo más, aquí estoy.",en:"Done, it’s logged. If you need anything else, I’m here."}]
  ],
  pilot:{
    title:{es:"Después de la demo: la propuesta de piloto",en:"After the demo: the pilot proposal"},
    intro:{es:"El cliente validó el enfoque y preguntó cómo se integraría el agente a sus sistemas. Respondimos con una propuesta de piloto centrada en la falta de suministro, con dos caminos.",
           en:"The client validated the approach and asked how the agent would integrate with their systems. We answered with a pilot proposal focused on loss of supply, with two paths."},
    items:[
      [{es:"Piloto controlado",en:"Controlled pilot"},{es:"Valida la conversación, la voz y el protocolo sin tocar los sistemas del cliente: cada atención queda registrada y un asesor la ingresa después.",en:"Validates the conversation, the voice and the protocol without touching the client’s systems: every call is recorded and an advisor enters it afterwards."}],
      [{es:"Piloto integrado",en:"Integrated pilot"},{es:"El agente registra la orden directamente en el sistema comercial durante la llamada.",en:"The agent logs the order directly in the commercial system during the call."}],
      [{es:"Su protocolo, hecho conversación",en:"Their protocol, turned into conversation"},{es:"Los ocho pasos que hoy sigue el asesor son los pasos del agente. Cambia quién los ejecuta, no el protocolo.",en:"The eight steps advisors follow today are the agent’s steps. What changes is who runs them, not the protocol."}],
      [{es:"Priorizar",en:"Prioritise"},{es:"De dieciséis flujos identificados, cuatro entran al piloto: los que más llamadas absorben en un corte masivo y los que protegen a un cliente en riesgo. El resto queda en la hoja de ruta.",en:"Of sixteen flows identified, four go into the pilot: those that absorb the most calls in a mass outage and those that protect a customer at risk. The rest stays on the roadmap."}],
      [{es:"Reglas claras de transferencia",en:"Clear transfer rules"},{es:"Riesgo de vida, de inmediato y con prioridad. Cliente no identificado tras dos intentos. Si no entiende tras dos reformulaciones, transfiere en vez de insistir. Si el cliente pide un asesor, siempre. Y siempre con contexto: quién llama, qué reportó y en qué paso quedó.",en:"Risk to life: immediately and with priority. Customer not identified after two attempts. If it still doesn’t understand after two rephrasings, it transfers instead of insisting. If the customer asks for an advisor, always. And always with context: who is calling, what they reported and which step they reached."}],
      [{es:"Cómo se mediría",en:"How it would be measured"},{es:"Resolución sin asesor, derivaciones con contexto, duplicados evitados y duración de la llamada, con el chatbot de texto del cliente como referencia.",en:"Resolution without an advisor, handovers with context, duplicates avoided and call duration, using the client’s text chatbot as a baseline."}]
    ]
  },
  result:{es:"Las preguntas del cliente se centraron en la integración con sus sistemas. En el agente, el único cambio que pidió fue la voz, que sonaba con un leve acento argentino.",
          en:"The client’s questions focused on integration with their systems. For the agent itself, the only change they asked for was the voice, which had a slight Argentine accent."},
  out:{es:"Trámites comerciales, consultas de recibo y llamadas salientes: quedan en la hoja de ruta.",
       en:"Commercial requests, bill queries and outbound calls: they stay on the roadmap."},
  learned:{es:"Una buena demo abre la conversación que importa: cómo se conecta el agente con lo que el cliente ya tiene. Diseñar también es decidir qué probar primero y con cuánta integración.",
           en:"A good demo opens the conversation that matters: how the agent connects with what the client already has. Design is also deciding what to test first, and with how much integration."}
},
{
  id:"telco", kind:"voice", group:"voice", brief:true, type:{es:"Agente de voz · Ventas",en:"Voice agent · Sales"},
  topic:{es:"Venta de planes y equipos",en:"Plan and device sales"},
  sector:{es:"Claro · Telecomunicaciones",en:"Claro · Telecommunications"}, year:"2026",
  title:{es:"Agente de voz para venta de planes y equipos",en:"Voice agent for plan and device sales"},
  short:{es:"Ayuda a elegir plan hogar, equipo o accesorios. Con versión agnóstica de marca y en portugués.",en:"Helps choose home plans, devices or accessories. With brand-agnostic and Portuguese versions."},
  line:{es:"«La misma lógica conversacional, para otros operadores e idiomas.»",en:"“The same conversational logic, for other operators and languages.”"},
  lead:{es:"Un asesor de ventas por voz que ayuda a elegir plan hogar, equipo o accesorios y programa el retiro o la entrega. Diseñé también una versión agnóstica de marca y una versión en portugués para mostrar que la misma lógica conversacional se adapta a otros operadores e idiomas.",
        en:"A voice sales assistant that helps choose home plans, devices or accessories and schedules pickup or delivery. I also designed a brand-agnostic version and a Portuguese version to show that the same conversational logic adapts to other operators and languages."},
  role:{es:"Diseño conversacional + build (ElevenLabs, n8n)",en:"Conversational design + build (ElevenLabs, n8n)"},
  decision:{es:"Recomendar el plan según el consumo y el presupuesto del cliente, y validar cobertura y datos antes de avanzar al cierre.",
            en:"Recommend the plan based on the customer’s usage and budget, and validate coverage and details before moving to the close."},
  steps:[
    [{es:"Escucha activa",en:"Active listening"},{es:"Capta la necesidad en lenguaje natural, sin menús ni tonos.",en:"Captures the need in natural language, no menus or tones."},"intención"],
    [{es:"Recomienda",en:"Recommends"},{es:"Sugiere el plan según consumo y presupuesto, con lenguaje simple.",en:"Suggests a plan based on usage and budget, in plain language."},"consultar_plan"],
    [{es:"Valida",en:"Validates"},{es:"Confirma cobertura y datos del cliente antes de avanzar.",en:"Confirms coverage and customer data before moving on."},"n8n"],
    [{es:"Programa la entrega",en:"Schedules delivery"},{es:"Registra la compra y agenda el retiro o la entrega.",en:"Logs the purchase and schedules pickup or delivery."},"registrar_gestion"],
    [{es:"Cierra con calidez",en:"Warm close"},{es:"Despedida breve y NPS de la experiencia.",en:"Short goodbye and experience NPS."},"NPS"]
  ],
  videos:[["assets/telco.mp4","assets/telco-poster.jpg"]]
},
{
  id:"pago", kind:"voice", group:"voice", brief:true, type:{es:"Agente de voz · Cobranza",en:"Voice agent · Collections"},
  topic:{es:"Negociación de deudas",en:"Debt negotiation"},
  sector:{es:"Cobranza",en:"Collections"}, year:"2026",
  title:{es:"Agente de voz para cobranza",en:"Voice agent for collections"},
  short:{es:"Negocia el pago de forma escalonada y registra el acuerdo, sin presionar al cliente.",en:"Negotiates repayment in steps and records the agreement, without pressuring the customer."},
  line:{es:"«El reto no es cobrar, sino hacerlo sin presionar al cliente.»",en:"“The challenge isn’t collecting, it’s doing it without pressuring the customer.”"},
  lead:{es:"Un agente que negocia el pago de una deuda de forma escalonada y registra el acuerdo. El reto no es cobrar, sino hacerlo sin presionar al cliente. Las ofertas que puede hacer están definidas; el agente no las inventa.",
        en:"A voice agent that negotiates debt repayment in installments and records the agreement, firm but never pressuring. The offers it can make are predefined; the agent doesn’t make them up."},
  role:{es:"Diseño conversacional + build (ElevenLabs, n8n)",en:"Conversational design + build (ElevenLabs, n8n)"},
  decision:{es:"Un solo flujo para las cuatro etapas de cobranza (preventiva, recordatorio, vencida y castigo): solo cambian la deuda que presenta y las ofertas que puede hacer.",
            en:"A single flow for the four collection stages (preventive, reminder, overdue and write-off): only the debt presented and the offers available change."},
  steps:[
    [{es:"Identifica",en:"Identifies"},{es:"Valida al titular antes de hablar de la deuda.",en:"Verifies the account holder before discussing the debt."},"validar_identidad"],
    [{es:"Presenta",en:"Presents"},{es:"Producto, monto y días de mora, con claridad.",en:"Product, amount and days overdue, clearly."},""],
    [{es:"Negocia",en:"Negotiates"},{es:"Escalera de ofertas definidas: hoy, cuotas, descuento.",en:"Ladder of predefined offers: today, instalments, discount."},"ofertas"],
    [{es:"Registra",en:"Records"},{es:"Compromiso de pago guardado en vivo.",en:"Payment commitment saved live."},"registrar_gestion"],
    [{es:"Cierra",en:"Closes"},{es:"Motivo de no pago y NPS de la experiencia.",en:"Reason for non-payment and experience NPS."},"NPS"]
  ],
  videos:[["assets/pago-1.mp4","assets/pago-1-poster.jpg"],["assets/pago-2.mp4","assets/pago-2-poster.jpg",{es:"Panel de acuerdos que el agente registra en vivo",en:"Dashboard of agreements the agent records live"}]]
},
{
  id:"portabilidad", kind:"research", group:"research", type:{es:"UX Research · Journey",en:"UX Research · Journey"},
  sector:{es:"Claro · tienda online",en:"Claro · online store"}, year:"2026",
  title:{es:"Portabilidad: dónde se rompe la compra",en:"Number portability: where the purchase breaks"},
  short:{es:"El cliente configuraba su compra antes de saber si su número aplicaba. Propuse validarlo al inicio.",en:"Customers configured their purchase before knowing if their number qualified. I proposed validating it first."},
  line:{es:"«Los bloqueos aparecen cuando el cliente ya avanzó gran parte de la compra.»",en:"“The blockers appear once the customer has already gone through most of the purchase.”"},
  lead:{es:"Research de la experiencia de portabilidad (cambiarse de operador conservando el número) en la tienda online de un operador, para dos productos: equipo y chip. El objetivo: entender en qué etapa y por qué se pierde la compra, y priorizar qué mejorar.",
        en:"Research on the number-portability experience (switching carrier while keeping your number) in an operator’s online store, for two products: device and SIM. The goal: understand at which stage and why purchases are lost, and prioritise what to improve."},
  role:{es:"UX Research, análisis de journey y datos",en:"UX Research, journey and data analysis"},
  stats:[["6",{es:"Etapas del journey mapeadas",en:"Journey stages mapped"}],["2",{es:"Flujos analizados: equipo y chip",en:"Flows analysed: device and SIM"}],["4",{es:"Fuentes cruzadas por etapa",en:"Sources crossed per stage"}],["Matriz",{es:"Impacto × esfuerzo para priorizar",en:"Impact × effort to prioritise"}]],
  challenge:{es:"La portabilidad combina una compra digital con una gestión posterior: llamada de confirmación, evaluación y entrega. El reto era ver el journey completo, no solo la web, y separar las fricciones reales de los cambios de medición u operación que también movían los números.",en:"Portability combines a digital purchase with a follow-up process: confirmation call, evaluation and delivery. The challenge was to see the whole journey, not just the website, and to separate real friction from measurement or operational changes that also moved the numbers."},
  quote:{es:"El cliente configura su compra antes de saber si su número y las condiciones realmente aplican.",en:"Customers configure their purchase before knowing whether their number and conditions actually qualify."},
  answer:{es:"Mapeé el journey de portabilidad en seis etapas (exploración, elección, compra online, llamada de confirmación, evaluación y entrega) y, en cada una, crucé el funnel, las encuestas tNPS, los comentarios de clientes y un benchmark de otros operadores. Validé las lecturas con Growth y Operación y prioricé las mejoras con una matriz de impacto y esfuerzo.",en:"I mapped the portability journey in six stages (exploration, choice, online purchase, confirmation call, evaluation and delivery) and, at each one, crossed the funnel, tNPS surveys, customer comments and a benchmark of other operators. I validated the readings with Growth and Operations and prioritised improvements with an impact-effort matrix."},
  steps:[
    [{es:"Journey AS-IS",en:"AS-IS journey"},{es:"Seis etapas: exploración, elección, compra online, atención telefónica, evaluación y entrega.",en:"Six stages: exploration, choice, online purchase, phone follow-up, evaluation and delivery."},"journey"],
    [{es:"Benchmark",en:"Benchmark"},{es:"Cómo resuelven otros operadores, locales e internacionales, la validación de dirección, cobertura y requisitos.",en:"How other local and international operators handle address, coverage and eligibility checks."},"benchmark"],
    [{es:"Análisis tNPS y voz del cliente",en:"tNPS and voice of customer"},{es:"Por qué, dónde y cuánto cuesta la fricción, leído en detractores y verbatims.",en:"Why, where and how much friction costs, read through detractors and verbatims."},"tNPS"],
    [{es:"Lectura del funnel",en:"Funnel reading"},{es:"Qué pasó detrás de cada movimiento del periodo, separando fricción real de cambios de medición.",en:"What was behind each movement in the period, separating real friction from measurement changes."},"funnel"],
    [{es:"Diagnóstico por etapa",en:"Diagnosis by stage"},{es:"Voz del cliente, funnel, motivos, fricciones web y hallazgos en una misma matriz.",en:"Voice of customer, funnel, reasons, web friction and findings in one matrix."},"insights"],
    [{es:"Recomendaciones",en:"Recommendations"},{es:"Mejoras concretas por etapa, priorizadas con una matriz de impacto y esfuerzo.",en:"Concrete improvements per stage, prioritised with an impact-effort matrix."},"roadmap"]
  ],
  drivers:[{es:"Funnel",en:"Funnel"},{es:"Encuestas tNPS",en:"tNPS surveys"},{es:"Voz del cliente",en:"Voice of customer"},{es:"Benchmark",en:"Benchmark"},{es:"Growth y Operación",en:"Growth & Operations"}],
  driversTitle:{es:"Fuentes que crucé en cada etapa",en:"Sources I crossed at each stage"},
  tilesTitle:{es:"Hallazgos y propuestas",en:"Findings and proposals"},
  tiles:[
    [{es:"Hallazgo principal: validar al inicio",en:"Key finding: validate first"},{es:"El cliente configuraba su compra antes de saber si su número y sus condiciones aplicaban. Propuse validar el número al inicio, antes de elegir equipo o plan.",en:"Customers configured their purchase before knowing whether their number and conditions qualified. I proposed validating the number first, before choosing a device or plan."}],
    [{es:"El cierre se rompe al final",en:"The close breaks at the end"},{es:"Dirección, cobertura, entrega y pago aparecían en el tramo final. Recomendé resolverlos antes del checkout.",en:"Address, coverage, delivery and payment appeared at the very end. I recommended resolving them before checkout."}],
    [{es:"Silencio después del «éxito»",en:"Silence after “success”"},{es:"Tras confirmar, el cliente quedaba sin información. Propuse un tracker con estados claros y avisos proactivos.",en:"After confirming, customers were left without updates. I proposed a tracker with clear states and proactive notifications."}],
    [{es:"Microcopy que cumple",en:"Microcopy that delivers"},{es:"Alinear lo que la web promete (tiempos, confirmaciones) con lo que el proceso realmente hace.",en:"Align what the site promises (timing, confirmations) with what the process actually does."}],
    [{es:"Un solo lenguaje",en:"One language"},{es:"Un mismo término, un mismo número de pedido y un mismo canal de contacto en todo el flujo.",en:"One term, one order number and one contact channel across the whole flow."}],
    [{es:"No toda caída es pérdida",en:"Not every drop is a loss"},{es:"Parte de los movimientos se explicaba por cambios de medición u operación, y había que separarlos de la fricción real.",en:"Part of the movements came from measurement or operational changes, and had to be separated from real friction."}]
  ]
},
{
  id:"research-telco", kind:"research", group:"research", type:{es:"UX Research",en:"UX Research"},
  sector:{es:"Claro · e-commerce",en:"Claro · e-commerce"}, year:"2026",
  title:{es:"E-commerce: de catálogo a asistente de decisión",en:"E-commerce: from catalogue to decision assistant"},
  short:{es:"20 referentes, 4 expertos y 10 usuarios: tres formas de decidir y un journey AS-IS → TO-BE.",en:"20 benchmarks, 4 experts and 10 users: three ways of deciding and an AS-IS → TO-BE journey."},
  line:{es:"«El e-commerce world class no es el que más exhibe: es el que mejor acompaña la decisión.»",en:"“World-class e-commerce isn’t the one that shows the most: it’s the one that best supports the decision.”"},
  lead:{es:"Research con 20 referentes, 4 expertos del canal asistido y 10 usuarios para llevar el canal digital de «mostrar oferta» a «ayudar a decidir, contratar y seguir la promesa». La síntesis se leyó en tres formas de decidir y terminó en un journey AS-IS → TO-BE.",en:"Research with 20 benchmarks, 4 assisted-channel experts and 10 users to move the digital channel from “showing offers” to “helping people decide, buy and follow the promise”. The synthesis was read as three ways of deciding and ended in an AS-IS → TO-BE journey."},
  role:{es:"UX Research, insights accionables",en:"UX Research, actionable insights"},
  stats:[["20",{es:"Referentes (desk research)",en:"Benchmarks (desk research)"}],["4",{es:"Expertos del canal",en:"Channel experts"}],["10",{es:"Usuarios escuchados",en:"Users interviewed"}],["3",{es:"Formas de decidir",en:"Ways of deciding"}]],
  challenge:{es:"En telco, comprar, instalar, activar, seguir y resolver son una sola promesa. Cuando la oferta no es clara, el usuario pierde confianza y compensa fuera del sitio: compara en otra web, consulta IA o busca un asesor.",en:"In telco, buying, installing, activating, tracking and resolving are a single promise. When the offer isn’t clear, users lose trust and compensate elsewhere: another site, AI, or an advisor."},
  quote:{es:"El reto no era vender online, sino construir una experiencia que ayude a decidir y cumpla lo prometido.",en:"The challenge wasn’t selling online, but building an experience that helps people decide and keeps its promise."},
  answer:{es:"Conexión con lo conversacional: los usuarios ya consultan a la IA para decidir; el canal tiene que acompañar esa conversación.",en:"The conversational link: users already ask AI to help them decide; the channel has to support that conversation."},
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
  id:"catering", kind:"research", group:"more", type:{es:"UX Research · Mobile",en:"UX Research · Mobile"},
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
  id:"veridik", kind:"research", group:"more", type:{es:"UX/UI · Mobile",en:"UX/UI · Mobile"},
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
},
{
  id:"clarito", kind:"red", type:{es:"Voz en vivo · Retail",en:"Live voice · Retail"},
  sector:{es:"Retail telco · tienda",en:"Telco retail · store"}, year:"2026",
  title:{es:"Clarito, asesor de voz en tienda",en:"Clarito, an in-store voice advisor"},
  short:{es:"Un personaje que conversa por voz y muestra la conversación en texto.",en:"A character that talks by voice and shows the conversation as text."},
  line:{es:"«Hola, soy Clarito. Pulsa el botón para hablar conmigo.»",en:"“Hi, I’m Clarito. Press the button to talk to me.”"},
  lead:{es:"Un agente de voz con cuerpo y personalidad propia, pensado para la experiencia de una tienda de telecomunicaciones: el cliente pulsa un botón y conversa con él, sin menús ni formularios.",
        en:"A voice agent with its own body and personality, designed for a telecom store experience: the customer presses one button and talks to it, no menus or forms."},
  role:{es:"Diseño conversacional, personaje y experiencia web",en:"Conversational design, character and web experience"},
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
