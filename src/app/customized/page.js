import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CustomizedPage() {
  return (
    <div className="min-h-screen bg-primary-gradient">
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Custom Development Solutions
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          We build tailored digital products to match your exact business requirements. Let's discuss your ideas and build something amazing together.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
          Book Free Consultation
        </button>
      </div>
      <Footer />
    </div>
  );
}
