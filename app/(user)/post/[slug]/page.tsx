import { client } from '@/lib/sanity.client';
import urlFor from '@/lib/urlFor';
import { groq } from 'next-sanity';
import Image from 'next/image';

type Props = {
  params: {
    slug: any;
  };
};

export default async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == 'post' && slug.current == $slug][0]
    {
      ...,
      author->,
      categories[]->
    }
  `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article>
      <section>
        <div>
          <div className='relative w-full h-96'>
            <Image
              className='object-cover object-center mx-auto'
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
        </div>
      </section>
    </article>
  );
}
