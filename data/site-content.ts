import {
  AudioLines,
  Bot,
  BookOpenCheck,
  Brain,
  Camera,
  CheckCircle2,
  Compass,
  Cpu,
  Film,
  GraduationCap,
  ImageIcon,
  Languages,
  Layers3,
  MailCheck,
  Map,
  MessageCircle,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TriangleAlert,
  Video,
  WandSparkles,
} from "lucide-react";

export const navSections = [
  { id: "inicio", label: "Inicio" },
  { id: "que-es-ia", label: "¿Qué es IA?" },
  { id: "como-funciona", label: "Cómo funciona" },
  { id: "tipos-ia", label: "Tipos" },
  { id: "modelos-populares", label: "Herramientas IA" },
  { id: "ruta-tematica", label: "Ruta temática" },
  { id: "ejemplos-reales", label: "Ejemplos reales" },
  { id: "uso-responsable", label: "Uso responsable" },
  { id: "actividad-clasificar", label: "Actividad" },
  { id: "quiz-final", label: "Mini juego" },
] as const;

export const whatIsAICards = [
  {
    title: "IA en palabras simples",
    text: "La Inteligencia Artificial es una tecnología que ayuda a las máquinas a aprender de datos para tomar decisiones útiles.",
    icon: Brain,
  },
  {
    title: "Piensa en patrones",
    text: "La IA no piensa como una persona: detecta patrones en mucha información y responde según lo que aprendió.",
    icon: SearchCheck,
  },
  {
    title: "Ejemplo cotidiano",
    text: "Cuando una app te recomienda videos parecidos a los que ves, está usando IA para adivinar tus gustos.",
    icon: Video,
  },
];

export const clickReveal = {
  question: "Mini interacción: ¿cómo aprende una máquina?",
  answer:
    "Imagina que le muestras miles de fotos de perros y gatos. La IA identifica diferencias (orejas, forma del rostro, tamaño) y aprende a reconocerlos sola en nuevas fotos.",
};

export const howItWorksSteps = [
  {
    id: "datos",
    title: "1) Recibe datos",
    description:
      "La IA necesita información para empezar: textos, imágenes, audios o números.",
    example: "Ejemplo: una app de música recibe canciones que escuchas y saltas.",
    icon: Compass,
  },
  {
    id: "patrones",
    title: "2) Busca patrones",
    description:
      "Compara miles de ejemplos para detectar qué cosas suelen repetirse.",
    example: "Ejemplo: nota que te gustan ritmos parecidos por la noche.",
    icon: Sparkles,
  },
  {
    id: "aprendizaje",
    title: "3) Aprende de ejemplos",
    description:
      "Ajusta su modelo para acertar mejor cada vez que recibe nuevos casos.",
    example:
      "Ejemplo: si ignoras una recomendación, la IA aprende y cambia su propuesta.",
    icon: GraduationCap,
  },
  {
    id: "respuesta",
    title: "4) Genera una respuesta",
    description:
      "Con lo aprendido, sugiere, clasifica o responde con mayor precisión.",
    example:
      "Ejemplo: te recomienda una playlist, una ruta o una respuesta en chat.",
    icon: Bot,
  },
];

export const aiTypes = [
  {
    name: "IA recomendadora",
    description:
      "Te sugiere contenido según tus gustos y hábitos de uso en distintas apps.",
    example: "YouTube, Netflix y Spotify te recomiendan videos o canciones.",
    icon: Sparkles,
  },
  {
    name: "IA de voz",
    description:
      "Convierte voz en texto y entiende comandos para ayudarte con tareas.",
    example: "Siri o Google Assistant cuando dices: 'pon una alarma'.",
    icon: AudioLines,
  },
  {
    name: "IA de imágenes",
    description:
      "Reconoce rostros, objetos y escenas para clasificar fotos o activar funciones.",
    example: "Desbloqueo facial del teléfono o filtros inteligentes.",
    icon: Camera,
  },
  {
    name: "IA conversacional",
    description:
      "Responde preguntas y conversa con lenguaje natural, como un asistente digital.",
    example: "ChatGPT o asistentes de ayuda en sitios web educativos.",
    icon: MessageCircle,
  },
  {
    name: "IA generativa",
    description:
      "Crea textos, imágenes o ideas nuevas a partir de instrucciones.",
    example: "Generar borradores, resúmenes o diseños iniciales para estudiar.",
    icon: ImageIcon,
  },
];

export const aiTools = [
  {
    name: "ChatGPT",
    category: "Asistente conversacional",
    use:
      "Explicar temas, generar ideas de proyectos, practicar redacción y resolver dudas paso a paso.",
    realLife: "Apoyo para entender una clase difícil con ejemplos más simples.",
    icon: MessageCircle,
  },
  {
    name: "Claude",
    category: "Asistente para análisis y escritura",
    use:
      "Resumir textos largos, organizar información y crear borradores claros para estudiar.",
    realLife: "Convertir apuntes extensos en una guía corta de repaso.",
    icon: BookOpenCheck,
  },
  {
    name: "Gemini",
    category: "Asistente multimodal",
    use:
      "Combinar texto, imágenes y contexto de herramientas de productividad para aprender mejor.",
    realLife: "Analizar una imagen de un experimento y pedir una explicación sencilla.",
    icon: Sparkles,
  },
  {
    name: "Llama",
    category: "Modelo abierto",
    use:
      "Crear soluciones educativas personalizadas en proyectos escolares o laboratorios de tecnología.",
    realLife: "Construir un chatbot escolar adaptado a una materia específica.",
    icon: Layers3,
  },
  {
    name: "DeepSeek",
    category: "Modelo enfocado en razonamiento y código",
    use:
      "Apoyar ejercicios de lógica, programación y análisis estructurado de problemas.",
    realLife: "Practicar ejercicios de algoritmos con explicaciones paso a paso.",
    icon: Cpu,
  },
  {
    name: "Sora",
    category: "Generación de video",
    use:
      "Crear clips educativos visuales a partir de texto para presentar conceptos complejos.",
    realLife: "Diseñar una microanimación para explicar el ciclo del agua o un tema de IA.",
    icon: Film,
  },
  {
    name: "High-level AI tools",
    category: "Herramientas avanzadas",
    use:
      "Plataformas con automatización compleja para producción de contenido, diseño y análisis.",
    realLife: "Preparar materiales de clase interactivos en menos tiempo.",
    icon: Rocket,
  },
  {
    name: "Nano / mini modelos",
    category: "IA ligera para móviles",
    use:
      "Modelos pequeños y rápidos que funcionan en teléfonos o apps con respuestas inmediatas.",
    realLife: "Traducción o sugerencias rápidas desde el celular durante estudio.",
    icon: Smartphone,
  },
  {
    name: "Herramientas creativas extra",
    category: "Diseño y contenido",
    use:
      "Generar imágenes, ideas de guiones y recursos visuales para exposiciones.",
    realLife: "Crear portadas atractivas y storyboard de una presentación escolar.",
    icon: WandSparkles,
  },
];

export const thematicModules = [
  {
    id: "conversacion",
    title: "Asistentes conversacionales",
    subtitle: "Hablar, preguntar y aprender mejor",
    description:
      "Aquí entran ChatGPT, Claude y Gemini: te ayudan a comprender temas con lenguaje simple, crear resúmenes y practicar preguntas.",
    tools: ["ChatGPT", "Claude", "Gemini"],
    example:
      "Vida real: antes de un examen, pides una explicación de 'fotosíntesis para secundaria', luego verificas con tu libro y haces un mapa mental.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "creatividad",
    title: "IA creativa (imagen y video)",
    subtitle: "Ideas visuales para proyectos impactantes",
    description:
      "Incluye herramientas generativas como Sora y generadores de imagen para crear recursos de aprendizaje más visuales.",
    tools: ["Sora", "Generadores de imágenes", "Herramientas de storyboard"],
    example:
      "Vida real: tu equipo crea un video corto para explicar energías renovables y usa IA para prototipar escenas.",
    image:
      "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "abiertos",
    title: "Modelos abiertos y de razonamiento",
    subtitle: "Construir y entender tecnología",
    description:
      "Llama y DeepSeek se usan en proyectos donde se busca personalizar o practicar lógica y programación.",
    tools: ["Llama", "DeepSeek", "Modelos open source"],
    example:
      "Vida real: en un club escolar tech, crean un asistente que responde con información del material del curso.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "movil",
    title: "IA móvil y herramientas ligeras",
    subtitle: "Aprender en cualquier lugar",
    description:
      "Modelos nano o ligeros permiten respuestas rápidas para traducción, organización y apoyo inmediato desde apps.",
    tools: ["Mini modelos", "Traductores IA", "Asistentes en smartphone"],
    example:
      "Vida real: durante una salida escolar, traduces señales o información y verificas contexto con tu profesor.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80",
  },
];

export const realExamples = [
  {
    title: "Redes sociales",
    description:
      "La IA ordena tu inicio y te sugiere contenido basado en lo que ves, compartes o comentas.",
    why: "Analiza patrones de comportamiento para personalizar tu experiencia.",
    help: "Encuentras publicaciones de interés más rápido.",
    image:
      "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Recomendaciones de entretenimiento",
    description:
      "Plataformas como Netflix, YouTube y Spotify predicen qué te puede gustar.",
    why: "Comparan tus elecciones con millones de usuarios y contenidos.",
    help: "Ahorras tiempo al descubrir series, videos y canciones relevantes.",
    image:
      "https://images.unsplash.com/photo-1611162616805-6f0b4f8a8f8a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Asistentes virtuales",
    description:
      "Siri, Alexa o Google Assistant entienden comandos de voz y responden en segundos.",
    why: "Usan IA de voz y lenguaje para interpretar lo que dices.",
    help: "Puedes pedir recordatorios, información y acciones rápidas.",
    image:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mapas y rutas inteligentes",
    description:
      "Apps de mapas predicen tráfico y recomiendan caminos más rápidos.",
    why: "Procesan datos en tiempo real de miles de vehículos y usuarios.",
    help: "Llegas antes y con menos estrés.",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Compras en línea",
    description:
      "Las tiendas digitales muestran productos parecidos a lo que te interesa.",
    why: "La IA detecta patrones de compra y navegación.",
    help: "Encuentras opciones útiles y comparas mejor.",
    image:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Filtros de spam",
    description:
      "El correo identifica mensajes sospechosos y los separa automáticamente.",
    why: "Aprende a detectar señales de fraude en textos y remitentes.",
    help: "Protege tu bandeja y reduce riesgos.",
    image:
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Traducción automática",
    description:
      "Herramientas de traducción convierten textos y audios entre idiomas.",
    why: "Modelos de lenguaje identifican contexto y significado.",
    help: "Facilita estudiar y comunicarse globalmente.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Educación personalizada",
    description:
      "Plataformas educativas adaptan ejercicios según tu avance.",
    why: "La IA detecta en qué temas te cuesta más y ajusta actividades.",
    help: "Aprendes a tu ritmo con apoyo más preciso.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
];

export const positiveUses = [
  { text: "Usar IA para investigar y luego contrastar fuentes confiables." },
  { text: "Traducir textos para estudiar y revisar si el contexto es correcto." },
  { text: "Generar ideas para proyectos y desarrollar tu propio enfoque." },
  { text: "Crear resúmenes como apoyo, no como sustituto de leer." },
  { text: "Aprovechar herramientas de accesibilidad (voz, lectura, subtítulos)." },
];

export const incorrectUses = [
  { text: "Copiar tareas completas sin entender el contenido." },
  { text: "Compartir información creada por IA sin verificar si es real." },
  { text: "Usar IA para hacer trampa en exámenes o actividades." },
  { text: "Crear contenido engañoso para confundir a otras personas." },
  { text: "Depender totalmente de la IA y dejar de pensar críticamente." },
];

export const responsibleKeys = [
  "La IA es una herramienta que potencia tu aprendizaje, no reemplaza tu criterio.",
  "Siempre verifica datos importantes en fuentes confiables.",
  "Usa IA para comprender mejor, no para evitar pensar.",
];

export const sortItems = [
  {
    id: "s1",
    statement: "Usar IA para traducir un texto y luego revisarlo antes de entregarlo.",
    category: "positivo" as const,
    reason: "Excelente práctica: usas IA como apoyo y aplicas pensamiento crítico.",
  },
  {
    id: "s2",
    statement: "Pedir a la IA toda la tarea y entregarla sin leer.",
    category: "incorrecto" as const,
    reason: "Es irresponsable porque no hay aprendizaje real ni verificación.",
  },
  {
    id: "s3",
    statement: "Comparar respuestas de IA con tu libro y corregir errores.",
    category: "positivo" as const,
    reason: "Bien hecho: validas información y mejoras tu comprensión.",
  },
  {
    id: "s4",
    statement: "Crear noticias falsas con IA para engañar a otros.",
    category: "incorrecto" as const,
    reason: "Es dañino y promueve desinformación.",
  },
  {
    id: "s5",
    statement: "Usar IA para organizar un plan de estudio semanal.",
    category: "positivo" as const,
    reason: "La IA puede ayudarte a organizarte y aprovechar mejor tu tiempo.",
  },
  {
    id: "s6",
    statement: "Aceptar cualquier respuesta de IA sin revisar fuentes.",
    category: "incorrecto" as const,
    reason: "No todo lo que genera la IA es correcto; revisar siempre es clave.",
  },
];

export const quizQuestions = [
  {
    id: "q1",
    question: "¿Qué es la IA en una definición sencilla?",
    options: [
      "Una tecnología que ayuda a las máquinas a aprender de datos.",
      "Un robot que siempre reemplaza a las personas.",
      "Una aplicación solo para expertos en programación.",
      "Un videojuego de ciencia ficción.",
    ],
    correctIndex: 0,
    explanation:
      "La IA permite aprender patrones de datos para tomar decisiones o dar respuestas útiles.",
  },
  {
    id: "q2",
    question: "¿Cuál es el primer paso típico de cómo funciona la IA?",
    options: [
      "Recibir datos",
      "Dibujar gráficos",
      "Hablar por micrófono",
      "Diseñar una app",
    ],
    correctIndex: 0,
    explanation: "Sin datos, la IA no puede aprender ni detectar patrones.",
  },
  {
    id: "q3",
    question: "Cuando Netflix te recomienda una serie, ¿qué tipo de IA se usa?",
    options: [
      "IA recomendadora",
      "IA médica",
      "IA de construcción",
      "IA cuántica escolar",
    ],
    correctIndex: 0,
    explanation:
      "Las recomendaciones se basan en patrones de consumo y preferencias.",
  },
  {
    id: "q4",
    question: "¿Cuál es un ejemplo de uso positivo de IA?",
    options: [
      "Copiar un trabajo completo sin leerlo",
      "Verificar información y usar IA para resumir conceptos",
      "Crear contenido falso para confundir",
      "Hacer trampa en una evaluación",
    ],
    correctIndex: 1,
    explanation:
      "La IA se usa mejor como apoyo para aprender y verificar información.",
  },
  {
    id: "q5",
    question: "¿Qué riesgo existe si usas IA sin revisar la información?",
    options: [
      "Aprender más rápido siempre",
      "No hay ningún riesgo",
      "Compartir errores o datos falsos",
      "Mejorar automáticamente la ortografía",
    ],
    correctIndex: 2,
    explanation: "La IA puede equivocarse; verificar evita desinformación.",
  },
  {
    id: "q6",
    question: "¿Qué opción reúne asistentes conversacionales populares?",
    options: [
      "ChatGPT, Claude y Gemini",
      "Cronómetro, calculadora y bloc de notas",
      "Linterna, brújula y galería",
      "Solo aplicaciones sin IA",
    ],
    correctIndex: 0,
    explanation:
      "ChatGPT, Claude y Gemini son ejemplos de asistentes que entienden lenguaje y generan respuestas.",
  },
  {
    id: "q7",
    question: "¿Qué significa detectar patrones?",
    options: [
      "Copiar texto sin entender",
      "Encontrar repeticiones y relaciones en datos",
      "Apagar el internet",
      "Guardar archivos en una carpeta",
    ],
    correctIndex: 1,
    explanation:
      "Detectar patrones es identificar regularidades para predecir o clasificar.",
  },
  {
    id: "q8",
    question: "¿Cuál es una buena práctica al usar IA para estudiar?",
    options: [
      "Aceptar todo sin pensar",
      "Verificar en fuentes confiables y usar criterio propio",
      "No leer nada del tema",
      "Entregar respuestas automáticas sin revisar",
    ],
    correctIndex: 1,
    explanation:
      "La combinación de IA + pensamiento crítico mejora el aprendizaje.",
  },
  {
    id: "q9",
    question: "¿Qué tipo de IA ayuda a reconocer rostros en fotos?",
    options: [
      "IA de imágenes",
      "IA de clima",
      "IA de agricultura",
      "IA de archivos PDF",
    ],
    correctIndex: 0,
    explanation:
      "El reconocimiento facial es un caso típico de IA de imágenes.",
  },
  {
    id: "q10",
    question: "¿Qué frase resume mejor el uso responsable de IA?",
    options: [
      "La IA reemplaza totalmente mi pensamiento.",
      "La IA solo sirve para hacer tareas rápido.",
      "La IA es una herramienta: me ayuda, pero yo decido y verifico.",
      "La IA siempre tiene la verdad.",
    ],
    correctIndex: 2,
    explanation:
      "Usar IA responsablemente implica criterio humano y verificación.",
  },
  {
    id: "q11",
    question: "¿Qué herramienta se asocia más con generación de video por IA?",
    options: ["Sora", "Llama", "Correo electrónico", "Calculadora"],
    correctIndex: 0,
    explanation:
      "Sora se usa como referencia en generación de videos a partir de instrucciones de texto.",
  },
  {
    id: "q12",
    question: "¿Cuál es un ejemplo real de IA en correos electrónicos?",
    options: [
      "Filtro de spam",
      "Color de fondo del correo",
      "Tamaño de la ventana",
      "Orden del teclado",
    ],
    correctIndex: 0,
    explanation:
      "Los filtros de spam usan IA para detectar mensajes sospechosos.",
  },
  {
    id: "q13",
    question: "Si una IA te da una respuesta confusa, ¿qué deberías hacer?",
    options: [
      "Publicarla de inmediato",
      "Buscar otras fuentes y pedir una explicación más clara",
      "Asumir que siempre está bien",
      "Dejar de estudiar el tema",
    ],
    correctIndex: 1,
    explanation:
      "Comparar fuentes y reformular preguntas te ayuda a aprender mejor.",
  },
];

export const finalSummary = [
  {
    icon: ShieldCheck,
    title: "IA con criterio",
    text: "Aprendiste que la IA puede apoyar tus estudios, pero tu criterio sigue siendo esencial.",
  },
  {
    icon: CheckCircle2,
    title: "Más oportunidades",
    text: "Usada correctamente, la IA te ayuda a investigar, organizarte y resolver problemas.",
  },
  {
    icon: TriangleAlert,
    title: "Responsabilidad digital",
    text: "Verificar información y evitar la trampa digital te convierte en un usuario responsable.",
  },
];

export const iconMap = {
  mapas: Map,
  correo: MailCheck,
  traduccion: Languages,
};
