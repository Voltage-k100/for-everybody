export interface User {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  verified: boolean;
}

export interface Post {
  id: string;
  authorId: string;
  content: string;
  timestamp: number;
  likes: number;
  reposts: number;
  comments: number;
  liked: boolean;
  reposted: boolean;
  bookmarked: boolean;
  tags?: string[];
  image?: string;
}

export interface Trend {
  id: string;
  category: string;
  tag: string;
  posts: number;
}

export const users: Record<string, User> = {
  u1: {
    id: "u1",
    name: "Marina Costa",
    handle: "marinacosta",
    avatar: "MC",
    bio: "Designer de produto • Lisboa • Crioam coisas que as pessoas amam usar",
    followers: 12400,
    following: 342,
    verified: true,
  },
  u2: {
    id: "u2",
    name: "João Pereira",
    handle: "joaopereira",
    avatar: "JP",
    bio: "Desenvolvedor full-stack | Entusiasta de open source",
    followers: 8900,
    following: 567,
    verified: false,
  },
  u3: {
    id: "u3",
    name: "Ana Beatriz",
    handle: "anabeatriz",
    avatar: "AB",
    bio: "Jornalista. Escrevo sobre tecnologia e sociedade.",
    followers: 45200,
    following: 891,
    verified: true,
  },
  u4: {
    id: "u4",
    name: "Carlos Eduardo",
    handle: "cadu",
    avatar: "CE",
    bio: "Músico e produtor cultural. São Paulo.",
    followers: 3200,
    following: 445,
    verified: false,
  },
  u5: {
    id: "u5",
    name: "Sofia Almeida",
    handle: "sofiaalm",
    avatar: "SA",
    bio: "Pesquisadora em IA | Doutoranda em Computação",
    followers: 18700,
    following: 234,
    verified: true,
  },
  u6: {
    id: "u6",
    name: "Ricardo Santos",
    handle: "ricardosantos",
    avatar: "RS",
    bio: "Empreendedor. Construindo o futuro, uma linha de código de cada vez.",
    followers: 6700,
    following: 1200,
    verified: false,
  },
  u7: {
    id: "u7",
    name: "Beatriz Nunes",
    handle: "bianunes",
    avatar: "BN",
    bio: "Fotógrafa e viajante. Capturando momentos pelo mundo.",
    followers: 23100,
    following: 312,
    verified: true,
  },
  u8: {
    id: "u8",
    name: "Pedro Henrique",
    handle: "pedrohenrique",
    avatar: "PH",
    bio: "Estudante de medicina. Apaixonado por ciência e café.",
    followers: 1800,
    following: 678,
    verified: false,
  },
};

export const currentUser: User = {
  id: "me",
  name: "Tu",
  handle: "tu",
  avatar: "TU",
  bio: "Bem-vindo ao For Everybody. Diga o que pensas.",
  followers: 42,
  following: 128,
  verified: false,
};

const now = Date.now();
const min = 60 * 1000;
const hour = 60 * min;
const day = 24 * hour;

export const initialPosts: Post[] = [
  {
    id: "p1",
    authorId: "u3",
    content:
      "Acabei de ler um estudo fascinante sobre como redes sociais podem ser projetadas para reduzir polarização em vez de alimentá-la. A chave? Dar às pessoas espaço para contexto, não apenas manchetes.\n\nÉ exatamente isso que queremos construir aqui. Um lugar onde a conversa importa mais que o clique.",
    timestamp: now - 12 * min,
    likes: 342,
    reposts: 87,
    comments: 56,
    liked: false,
    reposted: false,
    bookmarked: false,
    tags: ["tecnologia", "sociedade"],
  },
  {
    id: "p2",
    authorId: "u1",
    content:
      "Design não é só fazer coisas bonitas. É fazer com que as pessoas se sintam em casa.\n\nHoje lancei um novo conceito de interface que chamamos de 'Warm Horizon' — cores que acolhem, espaços que respiram. Estou muito orgulhosa do resultado.",
    timestamp: now - 45 * min,
    likes: 189,
    reposts: 34,
    comments: 23,
    liked: true,
    reposted: false,
    bookmarked: false,
    tags: ["design", "ux"],
  },
  {
    id: "p3",
    authorId: "u5",
    content:
      "Thread sobre IA e ética: precisamos falar sobre quem define os limites.\n\n1/ Os modelos de linguagem não são neutros. Cada decisão de treinamento carrega valores.\n\n2/ Transparência não é opcional — é fundamental. As pessoas merecem saber como as decisões são tomadas.\n\n3/ Inclusão na equipa de desenvolvimento não é checkbox, é necessidade.",
    timestamp: now - 2 * hour,
    likes: 567,
    reposts: 142,
    comments: 89,
    liked: false,
    reposted: true,
    bookmarked: true,
    tags: ["ia", "ética"],
  },
  {
    id: "p4",
    authorId: "u4",
    content:
      "Lancei meu primeiro single hoje. Trabalhei nisto durante 8 meses e mal posso acreditar que está no mundo. Para todos que apoiam a arte independente: obrigado. Isto é para todos, para todo o mundo.",
    timestamp: now - 3 * hour,
    likes: 89,
    reposts: 12,
    comments: 31,
    liked: false,
    reposted: false,
    bookmarked: false,
    tags: ["música"],
  },
  {
    id: "p5",
    authorId: "u7",
    content:
      "Sunrise over the mountains today. Some moments don't need filters — they just need witnesses.\n\nCompartilho isto não para mostrar, mas para lembrar que o mundo é grande e há beleza em todo o lado.",
    timestamp: now - 5 * hour,
    likes: 1203,
    reposts: 234,
    comments: 67,
    liked: true,
    reposted: false,
    bookmarked: true,
    tags: ["fotografia", "viagem"],
  },
  {
    id: "p6",
    authorId: "u2",
    content:
      "Dica de dev: se você ainda não experimentou TypeScript com inferência de tipos estrita, está perdendo metade da diversão.\n\nO compilador encontra bugs que você nem sabia que tinha. É como ter um par-programador que nunca dorme.",
    timestamp: now - 7 * hour,
    likes: 234,
    reposts: 56,
    comments: 18,
    liked: false,
    reposted: false,
    bookmarked: false,
    tags: ["programação", "typescript"],
  },
  {
    id: "p7",
    authorId: "u6",
    content:
      "Falha é dado. Toda startup que respeita-se falha rápido e aprende mais rápido.\n\nO que aprendi esta semana: o produto que achávamos que as pessoas queriam não era o que elas precisavam. Então mudámos. E está a funcionar.",
    timestamp: now - 12 * hour,
    likes: 156,
    reposts: 28,
    comments: 15,
    liked: false,
    reposted: false,
    bookmarked: false,
    tags: ["empreendedorismo"],
  },
  {
    id: "p8",
    authorId: "u8",
    content:
      "Estudei 14 horas hoje e o meu cérebro parece gelatina. Mas valeu — cada página lida é um paciente futuro que vai receber melhor cuidado.\n\nPara todos os estudantes lá fora: o esforço de hoje é a diferença de amanhã.",
    timestamp: now - 18 * hour,
    likes: 445,
    reposts: 67,
    comments: 42,
    liked: false,
    reposted: false,
    bookmarked: false,
    tags: ["estudos", "medicina"],
  },
  {
    id: "p9",
    authorId: "u3",
    content:
      "A internet precisa de mais praças e menos arenas. Lugares onde as pessoas conversam, não onde gritam.\n\nIsto não é utopia — é uma escolha de design.",
    timestamp: now - 1 * day,
    likes: 890,
    reposts: 312,
    comments: 134,
    liked: true,
    reposted: false,
    bookmarked: false,
    tags: ["sociedade", "internet"],
  },
  {
    id: "p10",
    authorId: "u5",
    content:
      "Pequeno lembrete: a melhor ferramenta de IA é a que te ajuda a pensar melhor, não a que pensa por ti.\n\nUsa tecnologia para ampliar tua voz, não para substituí-la.",
    timestamp: now - 1 * day - 3 * hour,
    likes: 678,
    reposts: 189,
    comments: 45,
    liked: false,
    reposted: true,
    bookmarked: false,
    tags: ["ia", "produtividade"],
  },
];

export const trends: Trend[] = [
  { id: "t1", category: "Tecnologia · Em alta", tag: "#WarmHorizon", posts: 12400 },
  { id: "t2", category: "Sociedade", tag: "#PraçaDigital", posts: 8900 },
  { id: "t3", category: "Design", tag: "#DesignAcolhedor", posts: 5600 },
  { id: "t4", category: "Programação", tag: "#TypeScript", posts: 12300 },
  { id: "t5", category: "Cultura · Em alta", tag: "#ArteIndependente", posts: 7800 },
  { id: "t6", category: "Ciência", tag: "#IAÉtica", posts: 9400 },
];

export const suggestedUsers: string[] = ["u3", "u5", "u7", "u1"];

export function formatCount(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(".0", "") + "M";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(".0", "") + " mil";
  return n.toString();
}

export function formatTime(ts: number): string {
  const diff = Date.now() - ts;
  if (diff < min) return "agora";
  if (diff < hour) return Math.floor(diff / min) + "min";
  if (diff < day) return Math.floor(diff / hour) + "h";
  if (diff < 7 * day) return Math.floor(diff / day) + "d";
  const d = new Date(ts);
  return d.toLocaleDateString("pt-BR", { day: "numeric", month: "short" });
}
