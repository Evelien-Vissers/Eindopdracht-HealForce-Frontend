import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            <h2 className="privacy-policy-title">Privacy Policy</h2>
            <p className="privacy-policy-text">HealForce (“Platform”) is a online health community that enables its members to share their data and experiences. This Privacy Policy describes how the information collected from users of the Platform, including individuals who have registered to join (“Members”), may be used.

                We reserve the right to modify this policy at any time, and without prior notice, by posting an amended Privacy Policy on the Platform. We will notify Members of changes we make to this Privacy Policy. We also encourage Members to review this policy periodically for any updates.</p>
            <h3 className="privacy-policy-subtitle">1. What Kind of Data We Collect</h3>
            <h3 className="privacy-policy-subtitle">Identifying Data</h3>
            <p className="privacy-policy-text">Data that is identifying or potentially identifying is treated as “Identifying Data.” This data includes:

                userID assigned by the Platform
                Platform password (this is collected as part of registration and stored as a one-way hash so that no one, other than you, knows what your password is)
                Name (Member may provide as part of registration or in a Member's Account Information)
                Date of Birth
                Email address
                Mailing address (may be collected via email, forms, or Private Message with HealForce staff as part of Member programs such as t-shirt giveaways and HealForce InMotion™)
                IP Addresses
                Geolocation data
                Private Message content for Private Messages between Members
                HealForce may de-identify Identifying Data. Once identifying information is removed, HealForce no longer treats the data as Identifying Data.

                HealForce may aggregate or statistically analyze Identifying Data from more than one member, in which case such resulting aggregated or statistically analyzed data will not be treated as Identifying Data by HealForce.</p>

            <h3 className="privacy-policy-subtitle">Non-Identifying Data</h3>
            <p className="privacy-policy-text">Non-identifying photographs
                Age (unless over 89)
                Location (city, state/province, country)
                Sex
                Gender identity
                Condition/disease information (e.g., first symptom, family history)

                Treatment information (e.g., treatment stop reasons, dosages, side effects, treatment evaluations)
                Symptom information (e.g., severity, duration)
                Outcome scores (e.g., ALSFRS-R, MSRS, PDRS, FVC, PFRS, DailyMe, and MonthlyMe measures (not including free-text associated with this tracking))
                Health measures (e.g., weight, blood pressure, sleep, activity)
                Laboratory results and biomarkers (e.g., CD4 count, viral load, creatinine, images)
                Structured survey responses
                Connections to other people on the Platform (e.g., Followers, Leaders, and Groups)
                Free text entries, including forum posts, comments, treatment evaluations, surveys, annotations, journals, and feeds (collectively, “Free Text Entries”), that you make anywhere on the Platform, all of which is by default available to view by the public, including unregistered users (Please Note: If you include information that would otherwise be considered “Identifying Data” within any Free Text Entries, for purposes of this Policy, such information will be treated as “Non-Identifying Data”)
                HealForce may aggregate or statistically analyze data, including from more than one Member. The resulting aggregated or statistically analyzed data shall be treated as Non-Identifying Data by HealForce.</p>

            <h3 className="privacy-policy-subtitle">2. General Data Protection Regulation (GDPR)</h3>
            <p className="privacy-policy-text">All individuals have rights regarding their data. The European Union’s (EU) General Data Protection Regulations (GDPR) describes these rights in law. They include:

                You have the right to clear and transparent communication about your data. We want to make this policy as clear as possible and provide a friendlier version to help you understand it.
                You have the right to request a copy of your data in a common digital format. To request this information, please contact our community team.
                You have the right to edit or correct your data. You can edit most of your information on the Platform. If you need help with this, contact our community team.
                You have the right to request that your data be deleted. To do this, contact our community team.
                You have the right to be notified of any breach involving your data. We will notify the appropriate data protection authority within 72 hours of detecting a breach involving your data. We will notify you as soon as possible after that.
                You have the right to object to the processing of your data. You may decline any consent request to share your identifying data with a Partner and this will have no impact on your use of the service. For clarity, we may still share with our Partners data regarding you that does not identify you and is not connected with you. You may request to close your account at any time (see Closing Your Account above).
                In some cases, these rights might be restricted. Some examples would include where the information requested compromises the privacy of another individual or is the subject of legal proceedings or investigation. Additionally, processing that has already occurred cannot be undone. If you have questions or complaints about our handling of these rights, see the information at the end of this policy.</p>

            <h3 className="privacy-policy-subtitle">3. What are the Legal Bases for Our Collection and Use of Your Data?</h3>
            <p className="privacy-policy-text">GDPR sets out a number of possible bases, three of which apply to HealForce and the Platform:

                We need to use some identifying information just to operate the service. This includes your email address, username, password, and IP address, among other items.
                We use your data for research with your consent, as described in this Privacy Policy. We will always ask for your additional, explicit consent before sharing identifying information with our Partners.</p>
        </div>
    )
}

export default PrivacyPolicy;