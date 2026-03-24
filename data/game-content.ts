import { Bot, Brain, Film, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

export type StageQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type GameStage = {
  id: string;
  mission: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  videoTitle: string;
  videoEmbedUrl: string;
  icon: typeof Brain;
  bullets: string[];
  questions: StageQuestion[];
};

export const gameStages: GameStage[] = [
  {
    id: "m1",
    mission: "Mision 1",
    title: "Que es la IA",
    subtitle: "La base para empezar",
    description:
      "La Inteligencia Artificial permite que una maquina aprenda de datos para resolver tareas. No piensa como un humano, pero reconoce patrones para ayudarte.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    videoTitle: "Video en espanol: Inteligencia Artificial en la Educacion",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/YZzB1Uca7n0?rel=0",
    icon: Brain,
    bullets: [
      "La IA aprende de ejemplos, no de magia.",
      "Detecta patrones para recomendar, clasificar o responder.",
      "Esta presente en apps que usas cada dia.",
    ],
    questions: [
      {
        question: "Cual define mejor la IA para secundaria?",
        options: [
          "Una tecnologia que aprende de datos para ayudar en tareas.",
          "Un robot que siempre reemplaza a las personas.",
          "Una app solo para programadores expertos.",
          "Un truco para copiar tareas.",
        ],
        correctIndex: 0,
        explanation:
          "La IA aprende patrones de datos y apoya tareas, pero no reemplaza tu pensamiento.",
      },
      {
        question: "Cuando una app sugiere videos parecidos, eso es IA porque...",
        options: [
          "Adivina al azar.",
          "Analiza patrones de lo que ves y comparte.",
          "Funciona sin datos.",
          "No usa ningun modelo.",
        ],
        correctIndex: 1,
        explanation: "Las recomendaciones usan datos y patrones de comportamiento.",
      },
    ],
  },
  {
    id: "m2",
    mission: "Mision 2",
    title: "Como funciona la IA",
    subtitle: "Paso a paso sin tecnicismos",
    description:
      "La IA sigue un flujo sencillo: recibe datos, detecta patrones, aprende con ejemplos y genera una respuesta.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    videoTitle: "Video en espanol: Como funciona la IA generativa",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/EFSIZHr3hVo?rel=0",
    icon: Sparkles,
    bullets: [
      "1) Recibe datos: texto, imagenes o audio.",
      "2) Analiza patrones repetidos.",
      "3) Ajusta su modelo para acertar mas.",
      "4) Responde o recomienda.",
    ],
    questions: [
      {
        question: "Cual es normalmente el primer paso de la IA?",
        options: ["Recibir datos", "Dibujar graficos", "Hablar con voz", "Generar videos"],
        correctIndex: 0,
        explanation: "Sin datos no puede aprender ni detectar patrones.",
      },
      {
        question: "Que pasa cuando la IA aprende de ejemplos?",
        options: [
          "Mejora su capacidad de acertar en nuevos casos.",
          "Siempre tiene la verdad absoluta.",
          "Se vuelve humana.",
          "Deja de necesitar datos.",
        ],
        correctIndex: 0,
        explanation: "Aprender significa ajustar respuestas para ser mas precisa.",
      },
    ],
  },
  {
    id: "m3",
    mission: "Mision 3",
    title: "Herramientas IA populares",
    subtitle: "ChatGPT, Claude, Gemini, Llama, DeepSeek, Sora y mas",
    description:
      "Cada herramienta tiene un enfoque: conversar, resumir, razonar, generar imagenes o crear video.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    videoTitle: "Video en espanol: Claude vs ChatGPT (comparativa)",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/3b8_QR787Ks?rel=0",
    icon: MessageCircle,
    bullets: [
      "ChatGPT, Claude y Gemini: asistentes conversacionales para aprender.",
      "Llama y DeepSeek: modelos usados en proyectos abiertos o de razonamiento.",
      "Sora: generacion de video desde instrucciones de texto.",
      "Mini modelos y herramientas avanzadas: respuestas rapidas en movil o produccion.",
    ],
    questions: [
      {
        question: "Que trio corresponde a asistentes conversacionales?",
        options: [
          "ChatGPT, Claude y Gemini",
          "Linterna, camara y calculadora",
          "Word, Paint y Bloc de notas",
          "Solo redes sociales",
        ],
        correctIndex: 0,
        explanation: "Son herramientas diseñadas para conversar y explicar contenido.",
      },
      {
        question: "Cual se relaciona mas con generacion de video IA?",
        options: ["Llama", "Sora", "DeepSeek", "Spotify"],
        correctIndex: 1,
        explanation: "Sora se asocia a creacion de video desde prompts.",
      },
    ],
  },
  {
    id: "m4",
    mission: "Mision 4",
    title: "IA en la vida real",
    subtitle: "Lo que usas todos los dias",
    description:
      "Redes sociales, rutas de mapas, traduccion, filtros de spam y plataformas educativas usan IA para ayudarte.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
    videoTitle: "Video en espanol: La IA ya transformo tu entorno",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/AaggCUNxJn4?rel=0",
    icon: Bot,
    bullets: [
      "Recomendaciones en Netflix, YouTube y Spotify.",
      "Mapas con trafico en tiempo real.",
      "Traduccion automatica y subtitulos.",
      "Filtros de spam en correo.",
      "Plataformas educativas adaptativas.",
    ],
    questions: [
      {
        question: "Que ejemplo muestra IA en correos electronicos?",
        options: ["Filtro de spam", "Color del fondo", "Tamano de ventana", "Tipo de teclado"],
        correctIndex: 0,
        explanation: "El filtro de spam detecta patrones de mensajes sospechosos.",
      },
      {
        question: "Por que los mapas pueden recomendar rutas?",
        options: [
          "Porque usan datos de trafico en tiempo real con IA.",
          "Porque adivinan al azar.",
          "Porque no usan informacion.",
          "Porque un humano revisa cada auto manualmente.",
        ],
        correctIndex: 0,
        explanation: "Procesan grandes volumenes de datos para sugerir mejor ruta.",
      },
    ],
  },
  {
    id: "m5",
    mission: "Mision 5",
    title: "Uso positivo vs uso incorrecto",
    subtitle: "Tu decision importa",
    description:
      "La IA es una herramienta. Bien usada mejora tu aprendizaje; mal usada causa desinformacion y te aleja de pensar por cuenta propia.",
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1600&q=80",
    videoTitle: "Video en espanol: IA en la educacion y aprendizaje",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/5U0bqyWZBUI?rel=0",
    icon: ShieldCheck,
    bullets: [
      "Uso positivo: investigar, traducir, organizar y verificar.",
      "Uso incorrecto: copiar tareas sin leer o crear contenido falso.",
      "Siempre valida la informacion en fuentes confiables.",
    ],
    questions: [
      {
        question: "Que accion es uso positivo?",
        options: [
          "Pedir toda la tarea y entregarla sin leer.",
          "Usar IA para resumir y luego revisar con el libro.",
          "Publicar contenido sin verificar.",
          "Hacer trampa en examenes.",
        ],
        correctIndex: 1,
        explanation: "IA + pensamiento critico es aprendizaje real.",
      },
      {
        question: "Que frase resume mejor el uso responsable?",
        options: [
          "La IA reemplaza mi pensamiento.",
          "La IA siempre tiene razon.",
          "La IA me ayuda, pero yo verifico y decido.",
          "La IA solo sirve para copiar.",
        ],
        correctIndex: 2,
        explanation: "La herramienta apoya, pero tu criterio humano manda.",
      },
    ],
  },
  {
    id: "m6",
    mission: "Mision Final",
    title: "Desafio final IA",
    subtitle: "Demuestra todo lo aprendido",
    description:
      "Ultima mision: integra definicion, funcionamiento, herramientas y uso responsable para convertirte en Explorador IA.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80",
    videoTitle: "Video en espanol: Podcast IA y educacion",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/ekQlnh7y5wQ?rel=0",
    icon: Film,
    bullets: [
      "Repasa ideas clave antes del reto final.",
      "Cuida tus vidas y manten la racha.",
      "Aplica criterio y aprende jugando.",
    ],
    questions: [
      {
        question: "Si la IA responde algo dudoso, que debes hacer?",
        options: [
          "Publicarlo de inmediato.",
          "Ignorarlo y copiar otra respuesta.",
          "Verificar en fuentes confiables y pedir una explicacion mas clara.",
          "Asumir que esta bien siempre.",
        ],
        correctIndex: 2,
        explanation: "Verificar y contrastar evita errores y desinformacion.",
      },
      {
        question: "Cual opcion combina aprendizaje y responsabilidad?",
        options: [
          "Usar IA para investigar, contrastar y construir tu propia respuesta.",
          "Usar IA para reemplazar por completo tu estudio.",
          "No pensar y solo copiar.",
          "Difundir contenido sin revisar.",
        ],
        correctIndex: 0,
        explanation: "La mejor estrategia es apoyo tecnologico con criterio personal.",
      },
    ],
  },
];

export const rankByScore = [
  { min: 110, label: "Maestro IA" },
  { min: 85, label: "Experto IA" },
  { min: 60, label: "Explorador IA" },
  { min: 0, label: "Aprendiz IA" },
];
