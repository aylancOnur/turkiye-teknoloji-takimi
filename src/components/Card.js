import React from "react";
import { Button } from "./Button";
import "./card.css";
import { FaBook, FaAvianex } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function Card() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="card__section">
        <div className="card__wrapper">
          <div className="card__container">
            <Link to="/" className="card__container-card">
              <div className="card__container-cardInfo">
                <div className="icon">
                  <FaAvianex />
                </div>
                <h3>DENE YAP</h3>
                <h4>TEKNOLOJİ ATÖLYELERİ</h4>

                <ul className="card__container-features">
                  <li>
                    Temmuz 2017 tarihinden bu yana faaliyette bulunan DENEYAP
                    Teknoloji Atölyeleri’mizde, geleceğin teknoloji yıldızları
                    yetişiyor.
                  </li>
                </ul>
                <div className="card__container-button">
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Fazlasını Keşfet
                  </Button>
                </div>
              </div>
            </Link>
            <Link to="/" className="card__container-card">
              <div className="card__container-cardInfo">
                <div className="icon">
                  <BsXDiamondFill />
                </div>
                <h3>T3</h3>
                <h4>GİRİŞİM MERKEZİ</h4>

                <ul className="card__container-features">
                  <li>
                    Bir ülkenin teknolojik açıdan kendine yeterliliğinin en
                    temel unsuru yetişmiş insan kapasitesidir. T3 bu inançla
                    yola çıkarak, Türkiye’nin yetişmiş insan kapasitesini
                    artırmaya yönelik çalışmalar gerçekleştirmektedir.
                  </li>
                </ul>
                <div className="card__container-button">
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Fazlasını Keşfet
                  </Button>
                </div>
              </div>
            </Link>
            <Link to="/" className="card__container-card">
              <div className="card__container-cardInfo">
                <div className="icon">
                  <FaBook />
                </div>
                <h3>ÖZDEMİR BAYRAKTAR MİLLİ TEKNOLOJİ</h3>
                <h4>BURS PROGRAMI</h4>

                <ul className="card__container-features">
                  <li>
                    Türkiye Teknoloji Takımı Vakfı olarak, her eğitim döneminde
                    ihtiyaç sahibi ortaokul, lise ve üniversite öğrencilerine
                    burs desteği sağlıyoruz.
                  </li>
                </ul>
                <div className="card__container-button">
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Fazlasını Keşfet
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Card;
