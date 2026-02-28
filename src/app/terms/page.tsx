import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Terms of Service - SmartPics.ai",
  description: "Read the terms and conditions for using SmartPics.ai services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-purple-400 mb-6">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-white/60">
              Last updated: February 28, 2025
            </p>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 space-y-8 text-white/80">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using SmartPics.ai, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p>
                SmartPics.ai provides AI-powered image optimization services for WordPress websites, including automatic alt text generation, format conversion, and SEO enhancement tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Accounts</h2>
              <p className="mb-4">
                When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms.
              </p>
              <p>
                You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Payment and Billing</h2>
              <p className="mb-4">
                Some services require payment. You agree to provide current, complete, and accurate purchase and account information for all purchases made through our service.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All payments are processed securely</li>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>Refunds are handled according to our refund policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p>
                The service and its original content, features, and functionality are and will remain the exclusive property of SmartPics.ai and its licensors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including breach of Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p>
                In no event shall SmartPics.ai be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@smartpics.ai" className="text-purple-400 hover:text-purple-300">
                  legal@smartpics.ai
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
