import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-primary-gradient flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Blogs
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Read our latest articles, insights, and news.
        </p>
      </div>
      <Footer />
    </div>
  );
}
