import React from "react";
import "./footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../../../assets/t3White.png";
import teknoFest from "../../../assets/teknoFest.png";
import bilimTurkiye from "../../../assets/bilimTurkiye.png";
import bilimUskudar from "../../../assets/bilimUskudar.png";
import kesifKampusu from "../../../assets/kesifKampusu.png";
import deneYap from "../../../assets/deneYap.png";
import deneYap2 from "../../../assets/deneYap2.png";
import t3GirisimMerkezi from "../../../assets/t3GirisimMerkezi.png";
import deneYapKart from "../../../assets/deneYapKart.png";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Bizden Haberdar Olmak İçin E-Postanızı Bırakın
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="E-Posta Adresiniz"
            />
            <Button buttonStyle="btn--outline">Üye Ol</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>HAKKIMIZDA</h2>
            <Link to="/">Biz Kimiz?</Link>
            <Link to="/">Vakıf Senedimiz</Link>
            <Link to="/">Ekibimiz</Link>
            <Link to="/">Merkezimiz</Link>
            <Link to="/">S.S.S</Link>
            <Link to="/">Kurumsal Kimlik</Link>
            <Link to="/">KVK Aydınlatma Metni</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/">
              <img src={teknoFest} alt="logo" />
            </Link>
            <Link to="/">
              <img src={bilimTurkiye} alt="logo" />
            </Link>
            <Link to="/">
              <img src={bilimUskudar} alt="logo" />
            </Link>
            <Link to="/">
              <img src={kesifKampusu} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/">
              <img src={deneYap} alt="logo" />
            </Link>
            <Link to="/">
              <img src={deneYap2} alt="logo" />
            </Link>
            <Link to="/">
              <img src={t3GirisimMerkezi} alt="logo" />
            </Link>
            <Link to="/">
              <img src={deneYapKart} alt="logo" />
            </Link>
          </div>
          <div className="footer-link-items">
            <h2>PROJELERİMİZ</h2>
            <Link to="/">ÖZDEMİR BAYRAKTAR MİLLİ TEKNOLOJİ BURS PROGRAMI</Link>
            <Link to="/">TEKNOLOJİNİN MİLLİ TAKIMLARI DESTEK PROGRAMI</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img src={logo} className="navbar-icon" />
            </Link>
          </div>
          <small className="website-rights">
            TÜRKİYE TEKNOLOJİ TAKIMI © 2022
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to={
                "//www.facebook.com/T3vakfi"
              }
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to={
                "//www.instagram.com/t3vakfi/?hl=tr"
              }
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to={
                "//www.youtube.com/channel/UCvU7axhvcQsvMVfxN5ovQlQ"
              }
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to={"//twitter.com/t3vakfi"}
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to={"//www.linkedin.com/company/t3-vakfi/"}
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
