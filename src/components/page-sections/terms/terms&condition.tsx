import React from "react";

const postListItems = [
  "Driving measurable impact through rigorous research methods, strategic collaboration, and continuous scienti.",
  "Harnessing next-generation technologies to turn complex data into clear, actionable insights for real-world.",
  "Driving measurable impact through rigorous research methods, strategic collaboration, and continuous scienti.",
  "Harnessing next-generation technologies to turn complex data into clear, actionable insights for real-world.",
  "Driving measurable impact through rigorous research methods, strategic collaboration, and continuous scienti.",
];


const TermsAndCondition: React.FC = () => {
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
                  Terms and Conditions
                </h2>

                <p className="wow fadeInUp" data-wow-delay="1s">
                  Welcome to clt academy privacy notice.
                </p>
                <div className="text-black" style={{paddingLeft: "20px"}}>
                  <ul style={{listStyleType: "decimal"}} className="number-index-list">
                    <li>
                      <p>
                        This Terms of Use, the privacy policy, the disclaimer
                        and any other applicable policies (the{" "}
                        <strong>“Policies”</strong>) is published in accordance
                        with Rule of the Information Technology 2017, which
                        requires the publication of rules and regulations,
                        privacy policy and terms of service for access or usage
                        of the website which is clt-academy.com
                      </p>
                    </li>
                    <li>
                      <p>
                        The terms “We/Us/Our” shall refer to clt academy
                        Management Development Training, “You/Your” shall refer
                        to the users and any other persons accessing or seeking
                        to use the Platform.
                      </p>
                    </li>
                    <li>
                      <p>Registration and eligibility</p>
                      <div className="text-black" style={{paddingLeft: "20px"}}>
                        <ul style={{listStyleType: "lower-alpha"}} className="alpha-index-list">
                          <li>
                            <p>
                              To become a member, you must be at least 17 years
                              old and should be invited by a member of CLT Academy
                              after the complete payment of fee.
                            </p>
                          </li>
                          <li>
                            <p>
                              You are responsible for safeguarding and
                              maintaining the confidentiality of your username,
                              password and corresponding Account information.
                              You agree not to disclose your password to anyone.
                              You agree that you are entirely and solely
                              responsible for any and all activities or actions
                              that occur under your Account, whether or not you
                              have authorized such activities or actions. If any
                              of the contents are misused or shared, it will be
                              considered as an offense and membership will be
                              terminated and will be charged by law.
                            </p>
                          </li>
                          <li>
                            <p>
                              You will provide true, accurate and complete
                              registration information and will maintain as
                              current and promptly update relevant personal
                              information provided to us.
                            </p>
                          </li>
                          <li>
                            <p>
                              You will not use false identities or impersonate
                              any other person or use a name that you are not
                              authorized to use.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <p>Termination; cancellation</p>
                      <div className="text-black" style={{paddingLeft: "20px"}}>
                        <ul style={{listStyleType: "lower-alpha"}} className="alpha-index-list">
                          <li>
                            <p>
                              We may immediately terminate or suspend your
                              access to the Program and Services and remove any
                              material (including User Submissions) from the
                              Site or our servers, in the event that you breach
                              these Terms of Service.
                            </p>
                          </li>
                          <li>
                            <p>
                              Being a part of any community or same niche
                              business - immediate termination of membership
                              will be done
                            </p>
                          </li>
                          <li>
                            <p>
                              Any behaviour that spread hatred or negativity by
                              a student, permanent ban of members will the
                              action. in this case, the decision of trainers
                              will be final.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tags & Social Links */}
              <div className="post-tag-links">
                <div className="row align-items-center">
                  <div className="col-lg-8"></div>

                  <div className="col-lg-4">
                    <div
                      className="post-social-sharing wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      {/* <ul>
                        {socialLinks.map((link, index) => (
                          <li key={index}>
                            <a href={link.href}>
                              <i className={link.icon}></i>
                            </a>
                          </li>
                        ))}
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End Tags & Social */}
            </div>
            {/* End Post Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
