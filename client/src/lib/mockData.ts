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
  // ← USUÁRIO ATUAL (TU) ADICIONADO AQUI
  me: {
    id: "me",
    name: "Tu",
    handle: "tu",
    avatar: "TU",
    bio: "Bem-vindo ao For Everybody. Diga o que pensas.",
    followers: 42,
    following: 128,
    verified: false,
  },
};

export const currentUser: User = users.me;

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
  // ... (os outros posts continuam iguais)
  // (não vou colar todos aqui pra não ficar gigante, mas mantenha eles)
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
