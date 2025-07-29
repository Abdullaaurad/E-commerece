import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: January 15, 2024
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using this vehicle marketplace website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
                <p className="text-gray-700 mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Vehicle Marketplace's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>modify or copy the materials;</li>
                  <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial);</li>
                  <li>attempt to decompile or reverse engineer any software contained on Vehicle Marketplace's website;</li>
                  <li>remove any copyright or other proprietary notations from the materials;</li>
                  <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Vehicle Listings and Information</h2>
                <p className="text-gray-700 mb-4">
                  While we strive to provide accurate and up-to-date information about vehicles listed on our platform, we cannot guarantee the accuracy, completeness, or reliability of any vehicle information. Vehicle details are provided by dealers and sellers, and we recommend:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Conducting your own research and verification of vehicle information</li>
                  <li>Requesting vehicle history reports before making a purchase</li>
                  <li>Having vehicles inspected by a qualified mechanic</li>
                  <li>Verifying all documentation and title status</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Accounts and Registration</h2>
                <p className="text-gray-700 mb-4">
                  To access certain features of our platform, you may be required to create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Maintaining the confidentiality of your account information</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information during registration</li>
                  <li>Notifying us immediately of any unauthorized use of your account</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices regarding the collection and use of your personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Disclaimers</h2>
                <p className="text-gray-700 mb-4">
                  The materials on Vehicle Marketplace's website are provided on an 'as is' basis. Vehicle Marketplace makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitations</h2>
                <p className="text-gray-700 mb-4">
                  In no event shall Vehicle Marketplace or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Vehicle Marketplace's website, even if Vehicle Marketplace or a Vehicle Marketplace authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Accuracy of Materials</h2>
                <p className="text-gray-700 mb-4">
                  The materials appearing on Vehicle Marketplace's website could include technical, typographical, or photographic errors. Vehicle Marketplace does not warrant that any of the materials on its website are accurate, complete or current. Vehicle Marketplace may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Links</h2>
                <p className="text-gray-700 mb-4">
                  Vehicle Marketplace has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Vehicle Marketplace of the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modifications</h2>
                <p className="text-gray-700 mb-4">
                  Vehicle Marketplace may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> legal@vehiclemarketplace.com<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Address:</strong> 123 Main Street, City, State 12345
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200 pt-6 mt-8">
                <p className="text-sm text-gray-500">
                  By using our website, you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by them.
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

export default TermsPage;