import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-10">
              <Image 
                src="/Artboard 1.png" 
                alt="Shreem Logo" 
                width={200} 
                height={60} 
                className="h-12 w-auto"
              />
            </Link>
            <h2 className="text-3xl md:text-5xl font-medium mb-10 leading-[1.1] tracking-tight">
              Let's build the <br />
              <span className="text-gray-500">next big thing together.</span>
            </h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center group text-lg font-bold hover:text-blue-500 transition-all"
            >
              Start a project
              <span className="ml-3 transform group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
          
          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-8">Solutions</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Web Engineering</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Mobile Products</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">ERP Systems</Link></li>
                <li><Link href="/expertise" className="text-gray-400 hover:text-white transition-colors">AI Integration</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-8">Company</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/delivery" className="text-gray-400 hover:text-white transition-colors">How we deliver</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-8">Connect</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="tel:+918085202613" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3">
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span> +91 80852 02613
                </a></li>
                <li><a href="mailto:hello@shreem.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3">
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span> hello@shreem.com
                </a></li>
                <li className="pt-4 flex gap-5">
                  <a href="https://www.linkedin.com/company/shreem-software-solutions/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all" aria-label="LinkedIn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/shreemsoftwaresolutions/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all" aria-label="Instagram">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://wa.me/918085202613" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all" aria-label="WhatsApp">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.407 3.481 2.241 2.242 3.478 5.228 3.479 8.409-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.3 1.656zm6.29-4.139c1.52.907 3.277 1.386 5.071 1.387 5.424 0 9.835-4.412 9.838-9.837.001-2.628-1.023-5.1-2.885-6.963-1.862-1.861-4.335-2.887-6.966-2.888-5.424 0-9.834 4.412-9.837 9.838-.001 1.815.474 3.589 1.375 5.12l-.993 3.63 3.714-.974zm11.37-7.468c-.312-.156-1.844-.91-2.13-.101-.286.104-.566.91-.692 1.053-.126.144-.251.162-.563.006-.312-.156-1.317-.485-2.508-1.548-.926-.826-1.551-1.846-1.733-2.158-.182-.312-.019-.481.137-.635.141-.14.312-.364.469-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.692-1.668-.949-2.288-.251-.603-.505-.521-.692-.531-.176-.009-.377-.01-.58-.01-.203 0-.533.076-.812.38-.28.304-1.066 1.042-1.066 2.541s1.092 2.946 1.241 3.146c.149.2 2.149 3.282 5.207 4.603.727.314 1.294.502 1.735.642.73.232 1.393.199 1.918.121.585-.087 1.844-.753 2.103-1.481.26-.728.26-1.352.182-1.481-.078-.129-.286-.208-.598-.364z"/></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-widest">
              © {new Date().getFullYear()} Shreem Software Solutions
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-[11px] font-bold text-gray-600 uppercase tracking-widest hover:text-gray-400 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-[11px] font-bold text-gray-600 uppercase tracking-widest hover:text-gray-400 transition-colors">Terms</Link>
            </div>
          </div>
         </div>
      </div>
    </footer>
  );
}
