// app/dashboard/invest-company/page.jsx
import PostCard from "../../components/PostCard";

export default function InvestCompany() {
  const companies = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Company ${i + 1}`,
    image: `https://source.unsplash.com/random/400x300?startup&sig=${i}`,
    description: "Looking for strategic investments to grow.",
  }));

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map(company => (
          <PostCard key={company.id} post={company} />
        ))}
      </div>
    </>
  );
}
