// app/dashboard/create-post/page.jsx

export default function CreatePost() {
  return (
    <>
      <div className="max-w-lg mx-auto bg-white p-6 mt-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Create Post</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Post Title" className="w-full border p-2 rounded" />
          <input type="url" placeholder="Image URL" className="w-full border p-2 rounded" />
          <textarea placeholder="Post Description" className="w-full border p-2 rounded"></textarea>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Publish
          </button>
        </form>
      </div>
    </>
  );
}
