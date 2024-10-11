import './UserAgreement.css'
import {Link} from "react-router-dom";

const UserAgreement = () => {
    return (
        <div className="user-agreement-container">
            <h2 className="user-agreement-title">User Agreement Heal Force LLC</h2>
            <p className="user-agreement-text">The following terms constitute an Agreement between you and HealForce LLC
                (“HealForce”), the operator of www.healforcellc.com (the “Platform”). This Agreement governs your use of
                the Platform, both as a casual visitor and a registered member as described below.

                By accessing or using the Platform, you agree to be bound by the terms of this Agreement. To the extent
                you register on the Platform as a Member, then in addition to the terms that are applicable to all users
                of the Platform, the terms that apply only to Members shall apply to you too.</p>
            <h3 className="user-agreement-subtitle">1. Membership Eligibility</h3>
            <p className="user-agreement-text">To become a Member and access the area on this Platform reserved for
                Members (the “Member Area”), Heal Force requires that you are a person 16 years of age or older (16 or
                older if in the EU or UK), with a personal interest in a health condition and meeting with people with a
                similar condition.
                By registering as a Member, you represent and warrant that you are at least the minimum age required for
                membership on the platform.</p>
            <h3 className="user-agreement-subtitle">2. This Site Does Not Provide Medical Advice</h3>
            <p className="user-agreement-text">All of the content provided on the Platform, such as text, treatments,
                dosages, outcomes, charts, patient profiles, graphics, photographs, images, advice, messages, forum
                postings, and any other material provided on the Platform are for informational purposes only and are
                not a substitute for professional medical advice or treatment. Always seek the advice of your physician
                or other qualified health provider regarding your health. Never disregard professional medical advice or
                delay in seeking it because of something you have read on this Platform.

                HealForce does not recommend or endorse any specific tests, physicians, products, procedures, opinions,
                or other information that may be mentioned by Members on the Platform. Reliance on any information
                provided by HealForceLLC.com, by persons appearing on the Platform at the invitation of HealForce, or by
                other Members is solely at your own risk.</p>
            <h3 className="user-agreement-subtitle">3. Privacy</h3>
            <p className="user-agreement-text">You agree that you have read, understood and accept the
                HealForcellc.com <Link to "/privacypolicy">Privacy Policy</Link>. This policy explains collection of
                information from you when using the Platform and its use of and sharing of such information. </p>
            <h3 className="user-agreement-subtitle">4. Limitation of Liability</h3>
            <p className="user-agreement-text">Under no circumstances shall HealForce, its partners, contributors,
                agents, employees, directors, or affiliates be liable for any indirect, incidental, special, or
                consequential damages (even if it has been advised of the possibility of such damages) due to your use
                of this Platform or due to your reliance on any of the content contained or the services provided on the
                Platform.</p>

            <h3 className="user-agreement-subtitle">5. Indemnification</h3>
            <p className="privacy-policy">You agree to indemnify and hold harmless HealForce, its officers, employees, agents, subsidiaries, affiliates and other partners, from and against any claims, actions or demands, liabilities and settlements including without limitation, reasonable legal and accounting fees, resulting from, or alleged to result from, your violation of this Agreement.</p>

            <h3 className="user-agreement-subtitle">6. Modifications to this User Agreement</h3>
            <p className="user-agreement-text">We reserve the right to modify this Agreement at any time, and without prior notice, by posting amended terms on this Platform. We encourage you to review this Agreement periodically for any updates or changes, which will have an update effective date. Use of the Platform following any such change constitutes your agreement to follow and be bound by this Agreement as amended.</p>
            <p className="user-agreement-text">Effective September 22, 2024</p>
        </div>
    )
}