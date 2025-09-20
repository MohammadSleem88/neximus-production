// Update your existing app/privacy/page.tsx
"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gradient-to-b from-black via-[#0b0b0b] to-gray-900 text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16">
        <h1 className="text-5xl font-extrabold text-pink-500 uppercase mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-8">
          Last Updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="space-y-8 text-gray-300 text-lg leading-relaxed max-w-3xl">
          <div>
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              Data Controller
            </h2>
            <p className="mb-2">
              NeximusAI SAS is the data controller for the personal data we
              collect and process.
            </p>
            <p className="mb-2">
              <span className="font-semibold">Contact:</span>{" "}
              neximusai@gmail.com
            </p>
            <p>
              <span className="font-semibold">Address:</span> [Company address -
              to be completed]
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect personal data in the following situations:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <span className="font-semibold">Account Creation:</span> Name,
                email address, and authentication data when you create an
                account
              </li>
              <li>
                <span className="font-semibold">Newsletter Signup:</span> Email
                address for studio updates and announcements
              </li>
              <li>
                <span className="font-semibold">Contact Forms:</span> Name,
                email, and message content when you contact us
              </li>
              <li>
                <span className="font-semibold">Website Analytics:</span>{" "}
                Anonymized usage data, browser type, and device information
              </li>
              <li>
                <span className="font-semibold">Cookies:</span> Essential
                cookies for site functionality and optional analytics cookies
              </li>
            </ul>
            <p>
              We use privacy-first analytics tools and do not engage in personal
              data scraping or invasive tracking.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              Legal Basis for Processing
            </h2>
            <p className="mb-4">
              We process your personal data based on the following legal
              grounds:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">Consent:</span> For newsletter
                subscriptions and optional analytics cookies
              </li>
              <li>
                <span className="font-semibold">Legitimate Interest:</span> For
                essential website functionality and communication
              </li>
              <li>
                <span className="font-semibold">Contractual Necessity:</span>{" "}
                For account management and service provision
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Provide and maintain our services and website functionality
              </li>
              <li>
                Send you studio updates, announcements, and newsletters (with
                your consent)
              </li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>
                Analyze website performance and user engagement (anonymized)
              </li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              Data Sharing and International Transfers
            </h2>
            <p className="mb-4">
              We do not sell, rent, or trade your personal information to third
              parties. We may share data with:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <span className="font-semibold">Service Providers:</span>{" "}
                Trusted partners who assist in operating our services (hosting,
                analytics, email services)
              </li>
              <li>
                <span className="font-semibold">Legal Requirements:</span> When
                required by law or to protect our rights
              </li>
            </ul>
            <p>
              When data is transferred outside the EU, we ensure appropriate
              safeguards are in place, including adequacy decisions or standard
              contractual clauses.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              Data Retention
            </h2>
            <p className="mb-4">
              We retain your personal data only as long as necessary:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">Account Data:</span> Until
                account deletion or 3 years of inactivity
              </li>
              <li>
                <span className="font-semibold">Newsletter Subscriptions:</span>{" "}
                Until unsubscription
              </li>
              <li>
                <span className="font-semibold">Contact Messages:</span> 2 years
                for support purposes
              </li>
              <li>
                <span className="font-semibold">Analytics Data:</span> 25 months
                (anonymized)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              Your Rights Under GDPR
            </h2>
            <p className="mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <span className="font-semibold">Access:</span> Request a copy of
                the personal data we hold about you
              </li>
              <li>
                <span className="font-semibold">Rectification:</span> Request
                correction of inaccurate or incomplete data
              </li>
              <li>
                <span className="font-semibold">Erasure:</span> Request deletion
                of your personal data ("right to be forgotten")
              </li>
              <li>
                <span className="font-semibold">Portability:</span> Request
                transfer of your data to another service
              </li>
              <li>
                <span className="font-semibold">Restriction:</span> Request
                limitation of processing in certain circumstances
              </li>
              <li>
                <span className="font-semibold">Objection:</span> Object to
                processing based on legitimate interests
              </li>
              <li>
                <span className="font-semibold">Withdraw Consent:</span>{" "}
                Withdraw consent for specific processing activities
              </li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <span className="text-pink-400">neximusai@gmail.com</span>. We
              will respond within 30 days of receiving your request.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              Cookies and Tracking
            </h2>
            <p className="mb-4">We use cookies for:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <span className="font-semibold">Essential Cookies:</span>{" "}
                Required for basic site functionality (always active)
              </li>
              <li>
                <span className="font-semibold">Analytics Cookies:</span> Help
                us understand site usage (requires consent)
              </li>
            </ul>
            <p>
              You can manage cookie preferences through your browser settings or
              our cookie consent banner.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              Data Security
            </h2>
            <p className="mb-4">
              We implement appropriate security measures including:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Encrypted data transmission (HTTPS)</li>
              <li>Secure data storage with access controls</li>
              <li>Regular security assessments and updates</li>
              <li>Staff training on data protection principles</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              Minors' Privacy
            </h2>
            <p>
              Our services are not intended for children under 16. We do not
              knowingly collect personal data from children under 16 without
              parental consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you
              of any significant changes by posting a notice on our website or
              via email. Your continued use of our services after such changes
              constitutes acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              Contact and Complaints
            </h2>
            <p className="mb-4">
              For privacy-related questions or to exercise your rights, contact
              us at: <span className="text-pink-400">neximusai@gmail.com</span>
            </p>
            <p>
              If you believe we have not adequately addressed your privacy
              concerns, you have the right to lodge a complaint with the
              relevant data protection authority:
            </p>
            <p className="mt-2">
              <span className="font-semibold">France:</span> Commission
              Nationale de l'Informatique et des Libertés (CNIL)
              <br />
              Website:{" "}
              <a
                href="https://www.cnil.fr"
                className="text-pink-400 hover:text-pink-300"
              >
                www.cnil.fr
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
