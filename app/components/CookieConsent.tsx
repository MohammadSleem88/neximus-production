// app/components/CookieConsent.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    localStorage.setItem("analytics-cookies", "true");
    setShowBanner(false);
    // Initialize analytics here if needed
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    localStorage.setItem("analytics-cookies", "false");
    setShowBanner(false);
  };

  const savePreferences = (analyticsEnabled: boolean) => {
    localStorage.setItem("cookie-consent", "custom");
    localStorage.setItem("analytics-cookies", analyticsEnabled.toString());
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 border-t border-gray-700 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-2">
                Cookie Preferences
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We use essential cookies for site functionality and optional
                analytics cookies to improve your experience. You can choose
                which cookies to accept.{" "}
                <Link
                  href="/privacy"
                  className="text-pink-400 hover:text-pink-300 underline"
                >
                  Learn more in our Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-sm transition-colors"
              >
                Customize
              </button>
              <button
                onClick={acceptEssential}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-600 hover:bg-gray-500 rounded-sm transition-colors"
              >
                Essential Only
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm font-medium text-white bg-pink-600 hover:bg-pink-500 rounded-sm transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <CookiePreferencesModal
          onSave={savePreferences}
          onClose={() => setShowPreferences(false)}
        />
      )}
    </>
  );
}

function CookiePreferencesModal({
  onSave,
  onClose,
}: {
  onSave: (analytics: boolean) => void;
  onClose: () => void;
}) {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Cookie Preferences
          </h2>

          <div className="space-y-6">
            {/* Essential Cookies */}
            <div className="border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">
                  Essential Cookies
                </h3>
                <span className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded">
                  Always Active
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                These cookies are necessary for the website to function and
                cannot be disabled. They include authentication, security, and
                basic functionality cookies.
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">
                  Analytics Cookies
                </h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                </label>
              </div>
              <p className="text-gray-300 text-sm">
                These cookies help us understand how visitors interact with our
                website by collecting and reporting information anonymously.
                This includes page views, traffic sources, and user behavior
                patterns.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-700">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-sm transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => onSave(analyticsEnabled)}
              className="px-4 py-2 text-sm font-medium text-white bg-pink-600 hover:bg-pink-500 rounded-sm transition-colors"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
