import { PostCard } from '@/templates/blog/post-card';
import { Search } from '@/components/search';
import { useRouter } from 'next/router';
import { PostGridCard } from './post-grid-card.tsx';
import { allPosts } from 'contentlayer/generated';
import { Inbox } from 'lucide-react';

export default function BlogPage() {
  const router = useRouter();
  const query = (router.query.q as string) ?? '';
  const pageTitle = query
    ? `Resultado de busca para "${query}"`
    : 'Dicas e estratégias para impulsionar seu negócio';

  const posts = query
    ? allPosts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))
    : allPosts;
  const hasPosts = posts.length > 0;

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="container py-12">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            {/* TAG */}
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              BLOG
            </span>

            {/* Titulo */}
            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              {pageTitle}
            </h1>
          </div>
          <Search />
        </div>
      </header>

      {/* Listagem de posts */}
      {hasPosts ? (
        <PostGridCard>
          {posts.map((post) => (
            <PostCard
              key={post._id}
              slug={post.slug}
              title={post.title}
              description={post.description}
              image={post.image}
              date={new Date(post.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
              author={{
                name: post.author.name,
                avatar: post.author.avatar,
              }}
            />
          ))}
        </PostGridCard>
      ) : (
        <div className="container px-8">
          <div className="flex flex-col items-center justify-center gap-4 border-dashed border-2 border-gray-300 p-8 md:p-12 rounded-[12px]">
            <Inbox className="h-12 w-12 text-cyan-100" />
            <p className="text-gray-100 text-center">Nenhum post encontrado.</p>
          </div>
        </div>
      )}
    </div>
  );
}
