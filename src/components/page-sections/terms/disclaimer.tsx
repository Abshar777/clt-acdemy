import React from "react";

const postListItems = [
  "Driving measurable impact through rigorous research methods, strategic collaboration, and continuous scienti.",
  "Harnessing next-generation technologies to turn complex data into clear, actionable insights for real-world.",
  "Driving measurable impact through rigorous research methods, strategic collaboration, and continuous scienti.",
  "Harnessing next-generation technologies to turn complex data into clear, actionable insights for real-world.",
  "Driving measurable impact through rigorous research methods, strategic collaboration, and continuous scienti.",
];

const tags = ["Explore", "Consult", "Quote"];





const Disclaimer: React.FC = () => {
  return (
    <div className="page-single-post">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 py-20 md:px-20 px-4">
            {/* Featured Image */}

            {/* Post Content */}
            <div className="post-content ">
              <div className="post-entry md:text-start text-center">
                <h2
               
                  className="wow fadeInUp text-4xl font-extrabold mb-4"
                  data-wow-delay="0.8s"
                >
                  Disclaimer
                </h2>

                <p className="wow fadeInUp text-lg" data-wow-delay="1s">
                  Welcome to CLT Academy Disclaimer notice We provide
                  news, analysis, and educational content around the financial
                  markets. Although the material contained on the websites
                  namely clt-academy.com and also on our social networking
                  pages (LinkedIn, Facebook, Twitter, YouTube, Instagram,
                  TikTok) (“Social Networking Websites”) are based on
                  information from public sources that we believe to be
                  reliable. We make no representation or warranty (express or
                  implied) as to the accuracy, timeliness, completeness,
                  merchantability, and fitness of the information contained
                  therein, and expressly disclaim any liability in this regard.
                  We also make no representation or warranty that the
                  information contained on this Platform/Social Networking
                  Websites will meet your requirements or is suitable for your
                  needs. By using the information on our Platform and/or Social
                  Networking Websites, you assume full responsibility for any
                  and all liabilities and losses, financial, emotional or
                  otherwise, experienced, suffered, or incurred by you. We
                  expressly disclaim any liability or loss incurred by any
                  individual or entity, who acts on the information provided on
                  our Platform and/or Social Networking Websites whether in
                  contract, tort (including negligence) or others.
                </p>
              </div>

              {/* Tags & Social Links */}
              <div className="post-tag-links">
                <div className="row align-items-center">
                  <div className="col-lg-8">
             
                  </div>

                  <div className="col-lg-4">
                    <div
                      className="post-social-sharing wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
             
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

export default Disclaimer;
