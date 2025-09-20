// app/accessibility/page.tsx
"use client";

export default function AccessibilityPage() {
  return (
    <div className="bg-gradient-to-b from-black via-[#0b0b0b] to-gray-900 text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16">
        <h1 className="text-5xl font-extrabold text-purple-400 uppercase mb-6">
          Accessibility Statement
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-8">
          NeximusAI is committed to ensuring digital accessibility for people
          with disabilities.
        </p>

        <div className="space-y-8 text-gray-300 text-lg leading-relaxed max-w-3xl">
          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Our Commitment
            </h2>
            <p className="mb-4">
              We are committed to making our website accessible to all users,
              regardless of their abilities or disabilities. We strive to
              conform to the Web Content Accessibility Guidelines (WCAG) 2.1
              Level AA standards and follow accessibility best practices.
            </p>
            <p>
              This commitment extends to all aspects of our digital presence,
              including our website, applications, and digital content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Accessibility Features
            </h2>
            <p className="mb-4">
              Our website includes the following accessibility features:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Semantic HTML structure for screen reader compatibility</li>
              <li>Keyboard navigation support for all interactive elements</li>
              <li>High contrast color schemes that meet WCAG standards</li>
              <li>Alternative text for images and visual content</li>
              <li>Clear headings and logical content structure</li>
              <li>
                Responsive design that works across different devices and screen
                sizes
              </li>
              <li>Form labels and error messages for screen readers</li>
              <li>Skip navigation links for keyboard users</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Standards Compliance
            </h2>
            <p className="mb-4">
              We aim to comply with the following accessibility standards:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <span className="font-semibold">WCAG 2.1 Level AA:</span> Web
                Content Accessibility Guidelines
              </li>
              <li>
                <span className="font-semibold">RGAA:</span> Référentiel Général
                d'Amélioration de l'Accessibilité (French accessibility
                guidelines)
              </li>
              <li>
                <span className="font-semibold">Section 508:</span> U.S. federal
                accessibility requirements
              </li>
              <li>
                <span className="font-semibold">EN 301 549:</span> European
                accessibility standard
              </li>
            </ul>
            <p>
              We regularly audit our website to ensure ongoing compliance with
              these standards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Ongoing Efforts
            </h2>
            <p className="mb-4">
              We are continuously working to improve accessibility through:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Regular accessibility audits and testing</li>
              <li>User testing with assistive technologies</li>
              <li>Staff training on accessibility best practices</li>
              <li>Feedback integration from users with disabilities</li>
              <li>Collaboration with accessibility experts</li>
              <li>Ongoing updates to meet evolving standards</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Known Issues
            </h2>
            <p className="mb-4">
              We are aware of some areas where our accessibility could be
              improved and are actively working to address them:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Some interactive elements may require keyboard navigation
                improvements
              </li>
              <li>Video content accessibility features are being enhanced</li>
              <li>
                Complex animations may need additional controls for users with
                vestibular disorders
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Third-Party Content
            </h2>
            <p>
              Some content on our website may be provided by third-party
              services. While we work to ensure these services meet
              accessibility standards, they may not always be fully compliant.
              We are committed to working with our partners to improve
              accessibility across all aspects of our digital presence.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Feedback and Support
            </h2>
            <p className="mb-4">
              We welcome feedback about the accessibility of our website. If you
              encounter any accessibility barriers or have suggestions for
              improvement, please contact us:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <span className="font-semibold">Email:</span>{" "}
                neximusai@gmail.com
              </li>
              <li>
                <span className="font-semibold">Subject Line:</span> Website
                Accessibility
              </li>
            </ul>
            <p className="mb-4">
              When reporting accessibility issues, please provide:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                The specific page or feature where you encountered the issue
              </li>
              <li>A description of the problem you experienced</li>
              <li>The assistive technology you were using (if applicable)</li>
              <li>Your browser and operating system information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Alternative Access
            </h2>
            <p>
              If you are unable to access any content or functionality on our
              website due to accessibility barriers, please contact us at
              neximusai@gmail.com. We will work with you to provide the
              information or functionality in an alternative format that meets
              your needs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Updates to This Statement
            </h2>
            <p>
              This accessibility statement was last updated on{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              . We review and update this statement periodically to reflect our
              ongoing accessibility improvements and any changes to our website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
