interface Post {
  image: string;
  title: string;
  description: string;
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{post.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{post.description}</p>
      </div>
    </div>
  );
}
