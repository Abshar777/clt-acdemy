import { Icon } from "lucide-react";
import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const postListItems = [
  "Driving measurable impact through rigorous research methods, strategic collaboration, and continuous scienti.",
  "Harnessing next-generation technologies to turn complex data into clear, actionable insights for real-world.",
  "Driving measurable impact through rigorous research methods, strategic collaboration, and continuous scienti.",
  "Harnessing next-generation technologies to turn complex data into clear, actionable insights for real-world.",
  "Driving measurable impact through rigorous research methods, strategic collaboration, and continuous scienti.",
];



const Privacypolicy: React.FC = () => {
  return (
    <div className="page-single-post">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 py-20 md:px-20 px-4">
            {/* Featured Image */}

            {/* Post Content */}
            <div className="post-content">
              <div className="post-entry">
                <h2
                  // style={{ fontWeight: 600 }}
                  className="wow fadeInUp text-4xl font-extrabold mb-4"
                  data-wow-delay="0.8s"
                >
                  Privacy Policy
                </h2>

                <div className="text-black pl-5">
                  <ul style={{listStyleType: "decimal"}} className="number-index-list">
                    <li>
                      <p>
                        CLT Academy takes the protection of your personal data very
                        seriously and are committed to protecting and respecting
                        your privacy. The General Data Protection Act of 2016
                        and Data Protection Act of 2018, gives people the right
                        to know what information is held about them, and
                        requires CLT Academy to ensure that personal information
                        related to living individuals is handled properly, held
                        in confidence and is protected from inappropriate
                        disclosure to third parties.
                      </p>
                    </li>
                    <li>
                      <p>
                        This Policy is only applicable to the Users of the
                        Platform, and the information and data gathered from the
                        Users directly and not to any other information or
                        website. You are hereby advised to read this Privacy
                        Policy carefully and fully understand the nature and
                        purpose of gathering and/or collecting sensitive,
                        personal and other information and the usage, disclosure
                        and sharing of such information.
                      </p>
                    </li>
                    <li>
                      <p>
                        This Privacy Policy is an electronic document and does
                        not require any physical, electronic or digital
                        signature. By accessing or using the Platform, you
                        indicate that you understand, agree and consent to the
                        terms and conditions contained in the Privacy Policy. If
                        you do not agree with the terms and conditions of this
                        Privacy Policy, please do not use this Platform.
                      </p>
                    </li>
                    <li>
                      <p>
                        Please note that we are not responsible for, and this
                        Privacy Policy does not govern information provided
                        other than through the Platform.
                      </p>
                    </li>
                  </ul>
                </div>

                <br />

                <p>
                  <b>Commitment</b>
                </p>
                <div className="text-black pl-5">
                  <ul style={{listStyleType: "decimal"}} className="number-index-list">
                    <li>
                      <p>
                        We are committed to ensure that your privacy is
                        protected to all possible, reasonable and commercial
                        extent, as your privacy and data protection is of the
                        utmost importance to us.
                      </p>
                    </li>
                    <li>
                      <p>
                        We gather certain types of information about you in
                        order to provide, maintain and improve the Services (as
                        mentioned in Terms of Use) rendered to you, and hence,
                        we strongly urge you to fully understand the terms and
                        conditions of the Privacy Policy surrounding the capture
                        and use of such information.
                      </p>
                    </li>
                    <li>
                      <p>Collection of information</p>
                    </li>
                  </ul>
                </div>

                <br />

                <p>
                  Inclusion is mandatory and should have the below mentioned
                  points.
                  <br />
                  “All credit/debit cards details and personally identifiable
                  information will NOT be stored, sold, shared, rented or leased
                  to any third parties”.
                  <br />
                  “The Website Policies and Terms &amp; Conditions may be
                  changed or updated occasionally to meet the requirements and
                  standards. Therefore the Customers’ are encouraged to
                  frequently visit these sections in order to be updated about
                  the changes on the website. Modifications will be effective on
                  the day they are posted
                </p>

                <p>
                  Method of Payment, Card Types accepted and Currency: Inclusion
                  is mandatory and should have the below mentioned point.
                  <br />
                  “We accept payments online using Visa and MasterCard
                  credit/debit card in AED (or any other agreed currency)”
                </p>

                <br />

                <p>
                  <b>Refund/Return Policy</b>
                </p>
                <div className="text-black pl-5">
                  <ul style={{listStyleType: "decimal"}} className="number-index-list">
                    <li>
                      <p>
                        Inclusion is mandatory and should have the below
                        mentioned point.
                      </p>
                    </li>
                    <li>
                      <p>
                        Recommended statement is “Refunds will be done only
                        through the Original Mode of Payment”.
                      </p>
                    </li>
                  </ul>
                </div>

                <br />

                <p>
                  <b>Governing Law and Jurisdiction</b>
                </p>
                <div className="text-black pl-5">
                  <ul style={{listStyleType: "decimal"}}  className="number-index-list">
                    <li>
                      <p>
                        Inclusion is mandatory and should have any one of the
                        below mentioned points.
                      </p>
                    </li>
                    <li>
                      <p>
                        “Any purchase, dispute or claim arising out of or in
                        connection with this website shall be governed and
                        construed in accordance with the laws of UAE”.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tags & Social Links */}
      
              {/* End Tags & Social */}
            </div>
            {/* End Post Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacypolicy;
