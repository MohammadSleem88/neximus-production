"use client";

export default function TermsPage() {
  return (
    <div className="bg-gradient-to-b from-black via-[#0b0b0b] to-gray-900 text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16">
        <h1 className="text-5xl font-extrabold text-indigo-400 uppercase mb-6">
          Terms & Conditions
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-8">
          Last Updated: [Date]
        </p>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-3xl">
          <p>
            These Terms & Conditions ("Terms") govern your use of the NeximusAI
            website, products, and services ("Services"). By accessing or using
            our Services, you agree to be bound by these Terms.
          </p>

          <p>
            <span className="text-indigo-400 font-bold">1. Eligibility</span>
            <br />
            You must be at least the age of majority in your jurisdiction to use
            our Services. By accessing our site, you represent that you meet the
            eligibility requirements.
          </p>

          <p>
            <span className="text-indigo-400 font-bold">
              2. Account Registration
            </span>
            <br />
            Certain features may require creating an account. You agree to
            provide accurate information and keep your credentials secure. You
            are responsible for all activity under your account.
          </p>

          <p>
            <span className="text-indigo-400 font-bold">3. User Conduct</span>
            <br />
            You agree not to use our Services for any unlawful or prohibited
            activities, including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Harassing, threatening, or defaming others</li>
            <li>Violating intellectual property or privacy rights</li>
            <li>Posting harmful or malicious content</li>
          </ul>

          <p>
            <span className="text-indigo-400 font-bold">
              4. Intellectual Property
            </span>
            <br />
            All content, logos, and designs provided through our Services are
            owned by NeximusAI or our licensors. You agree not to reproduce,
            distribute, or create derivative works without our written
            permission.
          </p>

          <p>
            <span className="text-indigo-400 font-bold">
              5. Disclaimer of Warranties
            </span>
            <br />
            Our Services are provided "as is" without warranties of any kind. We
            do not guarantee uninterrupted or error-free operation. We disclaim
            any liability for data loss or other damages resulting from your use
            of the Services.
          </p>

          <p>
            <span className="text-indigo-400 font-bold">
              6. Limitation of Liability
            </span>
            <br />
            To the fullest extent permitted by law, NeximusAI shall not be
            liable for any indirect, incidental, special, or consequential
            damages arising out of or related to your use of the Services.
          </p>

          <p>
            <span className="text-indigo-400 font-bold">
              7. Changes to These Terms
            </span>
            <br />
            We reserve the right to update or modify these Terms at any time.
            Continued use of our Services after such changes constitutes your
            acceptance of the revised Terms.
          </p>

          <p>
            <span className="text-indigo-400 font-bold">8. Governing Law</span>
            <br />
            These Terms are governed by and construed in accordance with the
            laws of [Your Jurisdiction]. Any disputes shall be resolved in the
            courts of [Your Jurisdiction].
          </p>

          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <span className="text-indigo-400">info@neximus.ai</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
