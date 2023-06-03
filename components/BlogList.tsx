type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  console.log(posts.length);

  return <div>BlogList</div>;
}
