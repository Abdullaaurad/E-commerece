import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: January 15, 2024
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect information you provide directly to us, such as when you create an account, search for vehicles, or contact us. This may include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Name, email address, and phone number</li>
                  <li>Vehicle preferences and search criteria</li>
                  <li>Communication preferences</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Vehicle history report requests</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate, and prevent fraudulent transactions</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                  <li><strong>Consent:</strong> We may share information with your explicit consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze how you use our website</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve our services and user experience</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  You can control cookie settings through your browser preferences, though disabling cookies may affect website functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data transmission protocols</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights and Choices</h2>
                <p className="text-gray-700 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Control cookie settings through your browser</li>
                  <li>Request information about how we process your data</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Children's Privacy</h2>
                <p className="text-gray-700 mb-4">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Third-Party Links</h2>
                <p className="text-gray-700 mb-4">
                  Our website may contain links to third-party websites, services, or applications. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. International Data Transfers</h2>
                <p className="text-gray-700 mb-4">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@vehiclemarketplace.com<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Address:</strong> 123 Main Street, City, State 12345<br />
                    <strong>Data Protection Officer:</strong> dpo@vehiclemarketplace.com
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. California Privacy Rights</h2>
                <p className="text-gray-700 mb-4">
                  If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>The right to know what personal information we collect and how we use it</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to opt out of the sale of personal information</li>
                  <li>The right to non-discrimination for exercising your privacy rights</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To exercise these rights, please contact us using the information provided above.
                </p>
              </section>

              <div className="border-t border-gray-200 pt-6 mt-8">
                <p className="text-sm text-gray-500">
                  By using our website, you acknowledge that you have read and understood this Privacy Policy and consent to the collection and use of your information as described herein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </NavBar>
      <Footer />
    </div>
  );
}

export default PrivacyPage;