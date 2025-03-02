"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gradient-to-b from-black via-[#0b0b0b] to-gray-900 text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16">
        <h1 className="text-5xl font-extrabold text-pink-500 uppercase mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-8">
          Last Updated: [Date]
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-3xl">
          <p>
            Thank you for visiting NeximusAI. This Privacy Policy describes how
            we collect, use, and protect your personal information when you
            access or use our website, products, or services.
          </p>

          <p>
            <span className="text-pink-400 font-bold">
              1. Information We Collect
            </span>
            <br />
            We may collect personal data such as your name, email address, and
            any other details you voluntarily provide when creating an account
            or contacting us. Additionally, we may gather non-personal
            information like device type, browser version, and site usage
            patterns to improve your experience.
          </p>

          <p>
            <span className="text-pink-400 font-bold">
              2. How We Use Your Information
            </span>
            <br />
            We use your data to:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Provide and maintain our services</li>
            <li>
              Send you updates, news, or promotional materials (with your
              consent)
            </li>
            <li>Analyze site performance and user engagement</li>
            <li>Improve our AI-driven language learning experiences</li>
          </ul>

          <p>
            <span className="text-pink-400 font-bold">
              3. Data Sharing & Transfers
            </span>
            <br />
            We do not sell or rent your personal information to third parties.
            We may share data with trusted partners who assist in operating our
            services, but only if they agree to keep it confidential and secure.
          </p>

          <p>
            <span className="text-pink-400 font-bold">
              4. Cookies & Tracking
            </span>
            <br />
            We use cookies and similar technologies to enhance your user
            experience. You can modify your browser settings to refuse cookies,
            but this may limit some functionality.
          </p>

          <p>
            <span className="text-pink-400 font-bold">5. Data Security</span>
            <br />
            We employ industry-standard security measures to protect your
            information. However, no transmission over the internet is 100%
            secure, and we cannot guarantee absolute security.
          </p>

          <p>
            <span className="text-pink-400 font-bold">6. Your Choices</span>
            <br />
            You may request to update, correct, or delete your personal
            information by contacting us at{" "}
            <span className="text-pink-400">info@neximus.ai</span>.
          </p>

          <p>
            <span className="text-pink-400 font-bold">
              7. Changes to This Policy
            </span>
            <br />
            We reserve the right to modify this Privacy Policy at any time. We
            will notify you of any significant changes by posting a notice on
            our site or via email.
          </p>

          <p>
            If you have any questions about this Privacy Policy, please contact
            us at <span className="text-pink-400">info@neximus.ai</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
