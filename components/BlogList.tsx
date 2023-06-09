import urlFor from '@/lib/urlFor';
import Image from 'next/image';

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  console.log(posts.length);

  // author: Author;
  // body: Block[];
  // categories: Category[];
  // mainImage: Image;
  // slug: Slug;
  // title: string;
  // description: string;
  return (
    <div>
      <hr className='border-[#F7AB0A] mb-10' />
      <div>
        {posts.map((post) => (
          <div className='flex flex-col group cursor-pointer' key={post._id}>
            <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
              <Image
                className='object-cover object-left lg:object-center'
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
