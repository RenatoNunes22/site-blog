import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type ActiveLinkProps = {
  href: string;
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {
  const router = useRouter();
  const isCurrent = router.asPath === href || router.asPath === rest.as;

  return (
    <Link
      href={href}
      className={cn(
        'text-action-sm font-medium transition-colors hover:text-blue-200',
        isCurrent ? 'text-blue-200' : 'text-gray-100'
      )}
    >
      {children}
    </Link>
  );
};
