import { groq } from 'next-sanity';
import { draftMode } from 'next/headers';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/PreviewSuspense';
import PreviewBlogList from '@/components/PreviewBlogList';
import BlogList from '@/components/BlogList';

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  }|order(_createdAt desc)
`;

export default async function HomePage() {
  const { isEnabled } = draftMode();
  if (isEnabled) {
    return (
      <PreviewSuspense
        fallback={
          <div role='statue'>
            <p className='text-center text-lg animate-pulse text-[#F7AB0A]'>
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return (
    <div>
      <BlogList posts={posts} />
      <h1>Not in draft Mode</h1>
    </div>
  );
}
