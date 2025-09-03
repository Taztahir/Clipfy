export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "5 Tips for Growing Your Audience with Short Videos",
      excerpt: "Learn how to use Clipfy to increase engagement and build your brand with short-form content.",
      image: "https://source.unsplash.com/600x400/?video,editing",
      author: "Sarah Johnson",
      date: "Aug 28, 2025",
    },
    {
      id: 2,
      title: "The Future of AI in Video Editing",
      excerpt: "AI tools are transforming video editing—here’s how creators can take advantage of the shift.",
      image: "https://source.unsplash.com/600x400/?ai,technology",
      author: "James Lee",
      date: "Aug 20, 2025",
    },
    {
      id: 3,
      title: "Why Short-Form Content Dominates Social Media",
      excerpt: "TikTok, Reels, Shorts—why short-form video is the king of content today.",
      image: "https://source.unsplash.com/600x400/?social,media",
      author: "Emily Carter",
      date: "Aug 10, 2025",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Blog Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Clipfy Insights & Stories
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Stay updated with the latest trends, tips, and guides for video creators.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
