import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-6/12">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Blue Bird — invest in the next generation of startups
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Discover curated startup opportunities, track deal flow, and join syndicates — all in one beautiful place.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/sign-up"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold shadow-lg"
              >
              Start Now
              </Link>
              <a
                href="#how"
                className="inline-flex items-center px-6 py-3 rounded-lg border"
              >
                Learn more
              </a>
            </div>

            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
                  🚀
                </div>
                <div>
                  <p className="font-semibold">Curated deals</p>
                  <p className="text-sm text-slate-500">
                    Only high-quality startups
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
                  🔒
                </div>
                <div>
                  <p className="font-semibold">Secure</p>
                  <p className="text-sm text-slate-500">
                    Investor-grade security
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-6/12">
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-tr from-sky-500/30 to-indigo-300/30 p-8 shadow-xl">
                <Image
                  src="/banner-home.png"
                  alt="mockup"
                  width={800}
                  height={520}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* auto scroll hint */}
        <div className="flex justify-center pb-8">
          <a href="#how" className="animate-bounce text-slate-400">
            ▼
          </a>
        </div>
      </section>

      {/* Used By */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold mb-8">Used by leading companies</h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <Image src="/logo1.png" alt="Company 1" width={120} height={40} />
            <Image src="/logo2.png" alt="Company 2" width={120} height={40} />
            <Image src="/logo3.png" alt="Company 3" width={120} height={40} />
            <Image src="/logo4.png" alt="Company 4" width={120} height={40} />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-2xl font-semibold">About Blue Bird</h3>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Blue Bird is a modern investment platform designed for forward-thinking investors. 
          We help connect you with the most promising startups, providing tools, insights, 
          and a secure environment to make confident investment decisions.
        </p>
      </section>

      {/* How it works */}
      <section id="how" className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-2xl font-semibold">How it works</h3>
        <p className="mt-4 text-slate-600">
          A short walkthrough of the Blue Bird experience.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-semibold">Discover</h4>
            <p className="mt-2 text-sm text-slate-600">
              Curated startups matched to your preferences.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-semibold">Evaluate</h4>
            <p className="mt-2 text-sm text-slate-600">
              Due diligence tools and metrics in dashboard.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-semibold">Invest</h4>
            <p className="mt-2 text-sm text-slate-600">
              Join rounds and syndicates with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Contact Us
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <p className="text-slate-600 mb-4">
                Have questions or want to collaborate? Reach out to us:
              </p>
              <p>Email: <a href="mailto:info@bluebird.com" className="text-sky-600">info@bluebird.com</a></p>
              <p>Phone: +91 7205824499</p>
              <p>Address: Infocity Chandrasekharpur Bhubaneswar, Odisha</p>
            </div>

            {/* Contact Form */}
            <form className="bg-white p-6 rounded-xl shadow space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
              <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
              <textarea placeholder="Your Message" rows={4} className="w-full p-3 border rounded"></textarea>
              <button type="submit" className="w-full py-3 bg-sky-600 text-white rounded-lg font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/50 border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-600 text-center">
          © {new Date().getFullYear()} Blue Bird • Built with ❤️
        </div>
      </footer>
    </div>
  );
}
