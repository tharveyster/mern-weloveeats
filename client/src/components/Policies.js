import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Policies = () => {
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);

  const handleCloseOne = () => setShowOne(false);
  const handleShowOne = () => setShowOne(true);
  const handleCloseTwo = () => setShowTwo(false);
  const handleShowTwo = () => setShowTwo(true);

  return (
    <>
      <div className="policies">
        <Button variant="link" onClick={handleShowOne}>
          Privacy Policy
        </Button>
        <Modal size="lg" show={showOne} onHide={handleCloseOne}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <h1 className="privacyTitle">WeLoveEats PRIVACY POLICY</h1>
            <br />
            <p className="updateDate">Last updated January 3, 2021</p>
            <hr style={{ height: "5px", color: "#fff" }} />

            <span className="privPolHeading">INTRODUCTION</span>
            <br />
            <br />
            <p>
              WeLoveEats ("we" or "us" or "our") respects the privacy of our
              users ("user" or "you"). This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website weloveeats.com, including any other media form,
              media channel, mobile website, or mobile application related or
              connected thereto (collectively, the "Site"). Please read this
              privacy policy carefully. If you do not agree with the terms of
              this privacy policy, please do not access the site.
            </p>
            <p>
              We reserve the right to make changes to this Privacy Policy at any
              time and for any reason. We will alert you about any changes by
              updating the "Last Updated" date of this Privacy Policy. Any
              changes or modifications will be effective immediately upon
              posting the updated Privacy Policy on the Site, and you waive the
              right to receive specific notice of each such change or
              modification.
            </p>
            <p>
              You are encouraged to periodically review this Privacy Policy to
              stay informed of updates. You will be deemed to have been made
              aware of, will be subject to, and will be deemed to have accepted
              the changes in any revised Privacy Policy by your continued use of
              the Site after the date such revised Privacy Policy is posted.
            </p>

            <br />
            <br />
            <span className="privPolHeading">
              COLLECTION OF YOUR INFORMATION
            </span>
            <br />
            <br />
            <p>
              We may collect information about you in a variety of ways. The
              information we may collect on the Site includes:
            </p>
            <br />
            <b>Personal Data</b>
            <p>
              Personally identifiable information, such as your name and email
              address, that you voluntarily give to us when you register with
              the Site, or when you choose to participate in various activities
              related to the Site such as message boards. You are under no
              obligation to provide us with personal information of any kind,
              however your refusal to do so may prevent you from using certain
              features of the Site.
            </p>
            <br />
            <b>Derivative Data</b>
            <p>
              Information our servers automatically collect when you access the
              Site, such as your IP address, your browser type, your operating
              system, your access times, and the pages you have viewed directly
              before and after accessing the Site.
            </p>
            <br />
            <b>Mobile Device Data</b>
            <p>
              Device information, such as your mobile device ID, model, and
              manufacturer, and information about the location of your device,
              if you access the Site from a mobile device.
            </p>
            <br />
            <b>Third-Party Data</b>
            <p>
              Information from third parties, such as personal information or
              network friends, if you connect your account to the third party
              and grant the Site permission to access this information.
            </p>

            <br />
            <br />
            <span className="privPolHeading">USE OF YOUR INFORMATION</span>
            <br />
            <br />
            <p>
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. Specifically,
              we may use information collected about you via the Site to:
            </p>
            <br />
            <ul>
              <li>
                Compile anonymous statistical data and analysis for use
                internally.
              </li>
              <li>Create and manage your account.</li>
              <li>Email you regarding your account.</li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>
                Monitor and analyze usage and trends to improve your experience
                with the Site.
              </li>
              <li>Notify you of updates to the Site.</li>
              <li>
                Offer new products, services, and/or recommendations to you.
              </li>
              <li>Perform other business activities as needed.</li>
              <li>
                Prevent fraudulent transactions, monitor against theft, and
                protect against criminal activity.
              </li>
              <li>
                Request feedback and contact you about your use of the Site.
              </li>
              <li>Resolve disputes and troubleshoot problems.</li>
              <li>Respond to customer service requests.</li>
              <li>Send you a newsletter.</li>
              <li>Solicit support for the Site.</li>
            </ul>

            <br />
            <span className="privPolHeading">
              DISCLOSURE OF YOUR INFORMATION
            </span>
            <br />
            <br />
            <p>
              We may share information we have collected about you in certain
              situations. Your information may be disclosed as follows:
            </p>
            <br />
            <b>By Law or to Protect Rights</b>
            <p>
              If we believe the release of information about you is necessary to
              respond to legal process, to investigate or remedy potential
              violations of our policies, or to protect the rights, property,
              and safety of others, we may share your information as permitted
              or required by any applicable law, rule, or regulation. This
              includes exchanging information with other entities for fraud
              protection and credit risk reduction.
            </p>
            <br />
            <b>Third-Party Service Providers</b>
            <p>
              We may share your information with third parties that perform
              services for us or on our behalf, including data analysis, email
              delivery, hosting services, customer service, and marketing
              assistance.
            </p>
            <br />
            <b>Marketing Communications</b>
            <p>
              With your consent, or with an opportunity for you to withdraw
              consent, we may share your information with third parties for
              marketing purposes, as permitted by law.
            </p>
            <br />
            <b>Interactions with Other Users</b>
            <p>
              If you interact with other users of the Site, those users may see
              your name, profile photo, and descriptions of your activity,
              including liking posts, or commenting on posts.
            </p>
            <br />
            <b>Online Postings</b>
            <p>
              When you post comments, your posts may be viewed by all users and
              may be publicly distributed outside the Site in perpetuity.
            </p>
            <br />
            <b>Third-Party Advertisers</b>
            <p>
              We may use third-party advertising companies to serve ads when you
              visit the Site. These companies may use information about your
              visits to the Site and other websites that are contained in web
              cookies in order to provide advertisements about goods and
              services of interest to you.
            </p>
            <br />
            <b>Other Third Parties</b>
            <p>
              We may share your information with advertisers and investors for
              the purpose of conducting general business analysis. We may also
              share your information with such third parties for marketing
              purposes, as permitted by law.
            </p>
            <br />
            <b>Sale or Bankruptcy</b>
            <p>
              If we reorganize or sell all or a portion of our assets, undergo a
              merger, or are acquired by another entity, we may transfer your
              information to the successor entity. If we go out of business or
              enter bankruptcy, your information would be an asset transferred
              or acquired by a third party. You acknowledge that such transfers
              may occur, and that the transferee may decline honor commitments
              we made in this Privacy Policy.
            </p>
            <br />
            <p>
              We are not responsible for the actions of third parties with whom
              you share personal or sensitive data, and we have no authority to
              manage or control third-party solicitations. If you no longer wish
              to receive correspondence, emails or other communications from
              third parties, you are responsible for contacting the third party
              directly.
            </p>

            <br />
            <br />
            <span className="privPolHeading">TRACKING TECHNOLOGIES</span>
            <br />
            <br />
            <b>Cookies and Web Beacons</b>
            <p>
              We may use cookies, web beacons, tracking pixels, and other
              tracking technologies on the Site to help customize the Site and
              improve your experience. When you access the Site, your personal
              information is not collected through the use of tracking
              technology. Most browsers are set to accept cookies by default.
              You can remove or reject cookies but be aware that such action
              could affect the availability and functionality of the Site. You
              may not decline web beacons. However, they can be rendered
              ineffective by declining all cookies or by modifying your web
              browser's settings to notify you each time a cookie is tendered,
              permitting you to accept or decline cookies on an individual
              basis.
            </p>
            <br />
            <b>Internet-Based Advertising</b>
            <p>
              Additionally, we may use third-party software to serve ads on the
              Site, implement email marketing campaigns, and manage other
              interactive marketing initiatives. This third-party software may
              use cookies or similar tracking technology to help manage and
              optimize your online experience with us. For more information
              about opting-out of interest-based ads, visit the{" "}
              <a
                href="http://www.networkadvertising.org/choices/"
                rel="noreferrer"
                target="_blank"
              >
                Network Advertising Initiative Opt-Out Tool
              </a>{" "}
              or{" "}
              <a
                href="http://www.aboutads.info/choices/"
                rel="noreferrer"
                target="_blank"
              >
                Digital Advertising Alliance Opt-Out Tool
              </a>
              .
            </p>
            <br />
            <b>Website Analytics</b>
            <p>
              We may also partner with selected third-party vendors, such as
              Google Analytics, to allow tracking technologies and remarketing
              services on the Site through the use of first party cookies and
              third-party cookies, to, among other things, analyze and track
              users' use of the Site, determine the popularity of certain
              content and better understand online activity. By accessing the
              Site, you consent to the collection and use of your information by
              these third-party vendors. You are encouraged to review their
              privacy policy and contact them directly for responses to your
              questions. We do not transfer personal information to these
              third-party vendors. However, if you do not want any information
              to be collected and used by tracking technologies, you can visit
              the third-party vendor or the{" "}
              <a
                href="http://www.networkadvertising.org/choices/"
                rel="noreferrer"
                target="_blank"
              >
                Network Advertising Initiative Opt-Out Tool
              </a>{" "}
              or{" "}
              <a
                href="http://www.aboutads.info/choices/"
                rel="noreferrer"
                target="_blank"
              >
                Digital Advertising Alliance Opt-Out Tool
              </a>
              .
            </p>
            <br />
            <p>
              You should be aware that getting a new computer, installing a new
              browser, upgrading an existing browser, or erasing or otherwise
              altering your browser's cookies files may also clear certain
              opt-out cookies, plug-ins, or settings.
            </p>

            <br />
            <br />
            <span className="privPolHeading">THIRD-PARTY WEBSITES</span>
            <br />
            <br />
            <p>
              The Site may contain links to third-party websites and
              applications of interest, including advertisements and external
              services, that are not affiliated with us. Once you have used
              these links to leave the Site, any information you provide to
              these third parties is not covered by this Privacy Policy, and we
              cannot guarantee the safety and privacy of your information.
              Before visiting and providing any information to any third-party
              websites, you should inform yourself of the privacy policies and
              practices (if any) of the third party responsible for that
              website, and should take those steps necessary to, in your
              discretion, protect the privacy of your information. We are not
              responsible for the content or privacy and security practices and
              policies of any third parties, including other sites, services or
              applications that may be linked to or from the Site.
            </p>

            <br />
            <br />
            <span className="privPolHeading">SECURITY OF YOUR INFORMATION</span>
            <br />
            <br />
            <p>
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse. Any information disclosed online is vulnerable to
              interception and misuse by unauthorized parties. Therefore, we
              cannot guarantee complete security if you provide personal
              information.
            </p>

            <br />
            <br />
            <span className="privPolHeading">POLICY FOR CHILDREN</span>
            <br />
            <br />
            <p>
              We do not knowingly solicit information from or market to children
              under the age of 13. If you become aware of any data we have
              collected from children under age 13, please contact us using the
              contact information provided below.
            </p>
            <br />
            <br />

            <span className="privPolHeading">
              CONTROLS FOR DO-NOT-TRACK FEATURES
            </span>
            <br />
            <br />
            <p>
              Most web browsers and some mobile operating systems [and our
              mobile applications] include a Do-Not-Track ("DNT") feature or
              setting you can activate to signal your privacy preference not to
              have data about your online browsing activities monitored and
              collected. No uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a
              revised version of this Privacy Policy. Most web browsers and some
              mobile operating systems include a Do-Not-Track ("DNT") feature or
              setting you can activate to signal your privacy preference not to
              have data about your online browsing activities monitored and
              collected. If you set the DNT signal on your browser, we will
              respond to such DNT browser signals.
            </p>

            <br />
            <br />
            <span className="privPolHeading">
              OPTIONS REGARDING YOUR INFORMATION
            </span>
            <br />
            <br />
            <b>Account Information</b>
            <p>
              You may at any time review or change the information in your
              account or terminate your account by:
            </p>
            <br />
            <ul>
              <li>
                Logging into your account settings and updating your account
              </li>
              <li>
                Contacting us using the contact information provided below
              </li>
            </ul>
            <p>
              Upon your request to terminate your account, we will deactivate or
              delete your account and information from our active databases.
              However, some information may be retained in our files to prevent
              fraud, troubleshoot problems, assist with any investigations,
              enforce our Terms of Use and/or comply with legal requirements.
            </p>
            <br />
            <b>Emails and Communications</b>
            <p>
              If you no longer wish to receive correspondence, emails, or other
              communications from us, you may opt-out by:
            </p>
            <br />
            <ul>
              <li>
                Contacting us using the contact information provided below
              </li>
            </ul>
            <p>
              If you no longer wish to receive correspondence, emails, or other
              communications from third parties, you are responsible for
              contacting the third party directly.
            </p>

            <br />
            <br />
            <span className="privPolHeading">CALIFORNIA PRIVACY RIGHTS</span>
            <br />
            <br />
            <p>
              California Civil Code Section 1798.83, also known as the "Shine
              The Light" law, permits our users who are California residents to
              request and obtain from us, once a year and free of charge,
              information about categories of personal information (if any) we
              disclosed to third parties for direct marketing purposes and the
              names and addresses of all third parties with which we shared
              personal information in the immediately preceding calendar year.
              If you are a California resident and would like to make such a
              request, please submit your request in writing to us using the
              contact information provided below.
            </p>
            <p>
              If you are under 18 years of age, reside in California, and have a
              registered account with the Site, you have the right to request
              removal of unwanted data that you publicly post on the Site. To
              request removal of such data, please contact us using the contact
              information provided below, and include the email address
              associated with your account and a statement that you reside in
              California. We will make sure the data is not publicly displayed
              on the Site, but please be aware that the data may not be
              completely or comprehensively removed from our systems.
            </p>

            <br />
            <br />
            <span className="privPolHeading">CONTACT US</span>
            <br />
            <br />
            <p>
              If you have questions or comments about this Privacy Policy,
              please contact us at:
            </p>
            <br />
            <p>Email: administrator@weloveeats.com</p>
          </Modal.Body>
        </Modal>
        &nbsp;|&nbsp;
        <Button variant="link" onClick={handleShowTwo}>
          Advertising Disclaimer
        </Button>
        <Modal show={showTwo} onHide={handleCloseTwo}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <span>
              This site may contain third party advertisements and links to
              third party sites. We Love Eats does not make any representation
              as to the accuracy or suitability of any of the information
              contained in these advertisements or sites and does not accept any
              responsibility or liability for the conduct or content of those
              advertisements and sites and the offerings made by the third
              parties. Third party advertisements and links to other sites where
              goods or services are advertised are not endorsements or
              recommendations by We Love Eats of the third party sites, goods or
              services. We Love Eats takes no responsibility for the content of
              the ads, promises made, or the quality/reliability of the
              products, services, or positions offered in all advertisements.
            </span>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Policies;
