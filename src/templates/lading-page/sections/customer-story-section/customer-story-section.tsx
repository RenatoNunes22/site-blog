import { PT_Sans_Caption } from 'next/font/google';
import Image from 'next/image';

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
});

const customerStories = [
  {
    content:
      'Creating my store with site.set was the best decision for my business. The platform is super intuitive, and I was able to put my products on sale in a few minutes.',
    author: {
      name: 'Annete Bones',
      role: 'CEO na Anne Corp',
    },
  },
  {
    content:
      'Turning my idea into an online store was easy and fast. I loved the customization options and the simplicity of managing orders. I already see my products reaching more people!',
    author: {
      name: 'Jacob Jones',
      role: 'CEO na JJ Corp',
    },
  },
];

export const CustomerStorySection = () => {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-center gap-12">
        <h2 className={`${ptSansCaption.className} text-heading-xl text-gray-100`}>
          Those who use it, approve!
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {customerStories.map((customerStory) => (
            <div
              key={customerStory.author.name}
              className="flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:p-12"
            >
              <p className="text-balance text-gray-200">{customerStory.content}</p>

              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <strong className="text-gray-200 text-sm">{customerStory.author.name}</strong>
                  <span className="text-xs text-gray-300">{customerStory.author.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
