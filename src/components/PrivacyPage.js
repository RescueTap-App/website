import React from "react"
const Privacy = ()=>{
    return (
        <>
             <section className="breadcrumb-area">
          <div
            className="breadcrumb-area-bg"
            style={{
              backgroundImage: "url(assets/images/breadcrumb/breadcrumb-1.jpg)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="inner-content">
                  <div
                    className="title"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration={1500}
                  >
                    <h2>RescueTap - Privacy and Policy Page ! </h2>
                  </div>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li className="active">Privacy and Policy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </section>
        {/*End breadcrumb area*/}
        {/*Start Team Style1 Area*/}
        <section className="team-style1-area">
          <div className="container">
            <div className="row">
                <h2>PRIVACY AND POLICY FOR THE RESCUETAP APP</h2>
                <div>

                        {/* Privacy Policy for the RescueTap App */}
                        RescueTap Ltd is committed to protecting your personal information. This Privacy Policy explains how we
                        collect, use, and safeguard information on the RescueTap App.
                        <ul>
                            <li>1. Information We Collect
                        - Personal Information: This includes your name, phone number, email address, emergency contact details,
                        and payment information when you register for and use the App.
                        - Location Data: To facilitate emergency response, we collect real-time location information when the App
                        is in use.
                        - Health Information: In certain cases, we may collect health-related information to facilitate the provision
                        of medical services.</li>
                        <li>
                             
                        2. How We Use Your Information
                        - To Provide Services: We use your information to enable emergency response services, communicate with
                        emergency contacts, and share necessary details with healthcare providers.
                        - To Improve App Functionality: We may use anonymized and aggregated data to improve and optimize
                        the App.
                        - For Communication: With your permission, we may send you alerts, notifications, or marketi
                        messages. You can opt out of these communications at any time.
                        </li>
                        <li>
                        3. How We Protect Your Information
                        - Data Encryption: We use encryption to protect sensitive data, including personal information, health
                        data, and location information.
                        - Access Control: Only authorized personnel and third-party service providers have access to sensitive
                        information.
                        - Secure Storage: All data is stored on secure servers in compliance with industry standards and relevant
                        regulations.
                        </li>
                        <li>
                        4. Sharing of Information
                        - Emergency Responders and Healthcare Providers: When needed, we share necessary information with
                        healthcare professionals and emergency responders.
                        - Third-Party Service Providers: We may share information with trusted partners who perform services on
                        our behalf, such as data hosting and analytics. These providers are contractually bound to confidentiali
                        and data protection standards.
                        - Legal Requirements: We may disclose information if required by law or to protect the rights, property, or
                        safety of our users and RescueTap.
                        </li>
                        <li>
                        5. User Rights and Choices
                        - Access and Correction: You may access and update your personal information through the App.
                        - Data Retention: We retain personal data as long as necessary to fulfill the purposes outlined in this poli
                        or as required by law.
                        - Deletion: You may request deletion of your account and personal data. We will comply unless retention is
                        required for legal or business purposes.
                        </li>
                        <li>
                        6. Children’s Privacy
                        - RescueTap is not intended for users under the age of 18. We do not knowingly collect personal
                        information from children.
                        </li>
                        <li>
                        7. Cookies and Tracking Technologies
                        - We use cookies and similar technologies to enhance user experience, track usage patterns, and optimize
                        functionality. You can manage cookie preferences through your device settings.
                        </li>
                        <li>
                        8. Updates to Privacy Policy
                        - We may update this Privacy Policy to reflect changes in our practices or legal obligations. Updates will 
                        posted within the App, and your continued use indicates acceptance of the revised policy.
                        </li>
                        <li> 9. Contact Us
                        - For questions or concerns about this Privacy Policy, please contact us at support@rescuetap.com.
                        By using the RescueTap App, you agree to these policies and our commitment to safeguarding your data</li>
                        </ul>
                        </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Privacy