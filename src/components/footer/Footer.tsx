import "./Footer.css";

const Footer = () => {
  const socialMediaLinks = [
    {
      name: "Facebook",
      src: "https://img.shields.io/badge/facebook-blue?style=for-the-badge&logo=facebook",
    },
    {
      name: "Instagram",
      src: "https://img.shields.io/badge/instagram-white?style=for-the-badge&logo=instagram",
    },
    {
      name: "LinkedIn",
      src: "https://img.shields.io/badge/linkedin-blue?style=for-the-badge&logo=linkedin",
    },
  ];

  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>For Business</h4>
            <a href="/">
              <p>Employer</p>
            </a>
            <a href="/">
              <p>Healt Plan</p>
            </a>
            <a href="/">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Resources</h4>
            <a href="/">
              <p>Resouce Center</p>
            </a>
            <a href="/">
              <p>Testimonials</p>
            </a>
            <a href="/">
              <p>STV</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Partners</h4>
            <a href="/">
              <p>Swing Tech</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Company</h4>
            <a href="/">
              <p>About</p>
            </a>
            <a href="/">
              <p>Press</p>
            </a>
            <a href="/">
              <p>Carrer</p>
            </a>
            <a href="/">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              {socialMediaLinks.map((social) => (
                <p key={social.name}>
                  <img src={social.src} alt={social.name} />
                </p>
              ))}
            </div>
          </div>
        </div>

        <hr />

        <div className="sb_footer-bellow">
          <div className="sb_footer-copyright">
            <p>
              @{new Date().getFullYear()} Lupasil. Todos os direitos reservados.
            </p>
          </div>
          <div className="sb_footer-bellow-links">
            <a href="/">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
