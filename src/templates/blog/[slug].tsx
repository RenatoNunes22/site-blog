// Página de post dinâmica: renderiza conteúdo com base no slug da URL.
// Comentários explicam tags JSX/HTML, classes CSS, estrutura, hooks e interações.
import { useRouter } from 'next/router'; // Hook de roteamento do Next.js; acessa params/estado da rota atual.
import Image from 'next/image'; // Componente de imagem otimizada (lazy, responsiva, otimização de assets).
import Link from 'next/link'; // Componente para navegação client-side sem recarregar a página.
import { allPosts } from 'contentlayer/generated'; // Coleção gerada a partir dos arquivos Markdown (Contentlayer).
import {
  Breadcrumb, // Container do breadcrumb (navegação hierárquica).
  BreadcrumbItem, // Item individual do breadcrumb.
  BreadcrumbLink, // Link navegável dentro do breadcrumb.
  BreadcrumbList, // Lista semântica (geralmente <ol>) dos itens do breadcrumb.
  BreadcrumbSeparator, // Separador visual/semântico entre os itens, por exemplo "/".
} from '@/components/ui/breadcrumb';

// Componente de página que renderiza um post específico com base no slug
export default function PostPage() {
  const router = useRouter(); // Hook: fornece 'router.query' e dados da rota dinâmica.
  const slug = router.query.slug as string; // Extrai o slug de /blog/[slug]; pode ser undefined no 1º render.
  const post = allPosts.find((post) => post.slug.toLowerCase() === slug.toLowerCase()); // Busca case-insensitive pelo slug.

  // Estrutura principal da página, usa HTML semântico e Tailwind para layout/estilo.
  return (
    <main className="mt-32 text-gray-100">
      {/* <main>: container principal da página.
          - mt-32: margem superior grande para afastar do header.
          - text-gray-100: cor padrão do texto, aplicada aos descendentes. */}
      <Breadcrumb>
        {/* Breadcrumb: ajuda o usuário a entender o contexto "Blog > Post".
            É composto por lista, itens clicáveis e separadores. */}
        <BreadcrumbList>
          <BreadcrumbItem>
            {/* BreadcrumbLink:
                - asChild: faz o componente usar o elemento filho (<Link>) como tag raiz,
                  preservando estilos e comportamento do breadcrumb.
                - className="text-action-sm": tamanho/aparência via design system. */}
            <BreadcrumbLink asChild className="text-action-sm">
              {/* <Link>: navegação client-side para a página de lista de posts (/blog). */}
              <Link href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {/* Separador visual entre "Blog" e o título do post. */}
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            {/* Título do post atual (não é link).
                - text-blue-200: cor do texto.
                - text-action-sm: tipografia/tamanho consistente com UI. */}
            <span className="text-blue-200 text-action-sm">{post?.title}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Grid responsiva que define o layout de conteúdo e (opcional) sidebar:
          - grid: ativa CSS Grid.
          - grid-cols-1: 1 coluna em telas pequenas (mobile).
          - lg:grid-cols-[1fr_300px]: em telas grandes (>= lg), duas colunas:
              1fr (conteúdo principal flexível) e 300px (coluna lateral fixa).
            Isso organiza a página em conteúdo + sidebar; mesmo sem um segundo elemento,
            prepara estrutura para expansão futura.
          - gap-6 / lg:gap-12: espaçamento entre colunas/linhas, maior no desktop. */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
        {/* <article>: bloco semântico que representa o conteúdo principal do post.
            Classes:
            - bg-gray-600: cor de fundo do artigo.
            - rounded-lg: cantos arredondados.
            - overflow-hidden: corta conteúdo que excede os limites (útil para imagens).
            - border-[1px] border-gray-400: borda sutil delineando o artigo. */}
        <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
          {/* <figure>: container semântico para a mídia do post (imagem de capa).
              Classes:
              - relative: estabelece contexto de posicionamento para filhos absolutos (next/image com fill).
              - aspect-[16/10]: força proporção 16:10, útil para layout consistente.
              - w-full: ocupa toda a largura disponível.
              - overflow-hidden + rounded-lg: garante recorte e cantos arredondados na imagem. */}
          <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
            {/* next/image:
                - src={post?.image || ''}: caminho da imagem do post; fallback para string vazia quando não definido.
                - alt={post?.title || ''}: texto alternativo para acessibilidade; fallback vazio.
                - className="object-cover": faz a imagem preencher a área mantendo proporção, recortando excessos.
                - fill: posiciona a imagem absolutamente para ocupar todo o <figure> (que está relative).
               Interações:
                - O 'fill' depende de <figure className="relative"> para dimensionamento.
                - Os estilos do grid e do article determinam o espaço que a imagem ocupará. */}
            <Image src={post?.image || ''} alt={post?.title || ''} className="object-cover" fill />
          </figure>
        </article>
      </div>
    </main>
  );
}
