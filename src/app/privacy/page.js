export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-16">
          Privacy Policy
        </h1>
        
        <div className="space-y-12 text-gray-600 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p>
              At Shreem Software Solutions, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data We Collect</h2>
            <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data:</strong> includes first name, last name, and company name.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, and operating system.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide our services to you, to communicate with you about your projects, and to improve our website experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at hello@shreem.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
