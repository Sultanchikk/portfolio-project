import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import SectionSubtitle from './SectionSubtitle';
import Image from 'next/image';

import img01 from '../../public/images/For Sula.jpg';
import img02 from '../../public/images/For Sula.jpg';
import img03 from '../../public/images/For Sula.jpg';
import img04 from '../../public/images/For Sula.jpg';

import classes from '../../styles/about.module.css';

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="Обо мне" />
            <h3 className="mt-4">Я здесь</h3>
            <h3 className="mb-4">чтобы помочь вашей крутой идее</h3>
            <p>
              Я очень люблю кодить, это то чем я буду заниматься всю свою жизнь! Создавать разные
              красивые сайты, стилизовывать их, а также добавлять логику работы этих сайтов - это
              просто не передаваемые чувтсва. Особенно если у тебя получается. Еще люблю спорт, к
              примеру Волейбол и Баскетбол
            </p>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Решение проблем
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Поиск информации
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Креативные идеи
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Качественный результат
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn-2">
                <Link target="_blank" href="#portfolio">
                  Моё портфолио
                </Link>
              </button>

              <button className="secondary__btn">
                <Link
                  href="https://drive.google.com/file/d/1T4n15ELTPko6LR9FAGxf0DmGjYCUsiiu/view?usp=share_link"
                  download
                  target="_blank">
                  Скачать резюме
                </Link>
              </button>
            </div>
          </Col>

          <Col lg="6">
            <div className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}>
              <div className=" d-flex flex-column mb-3">
                <div className={`${classes.about__img} ${classes.about__img__box}`}>
                  <Image src={img01} alt="about-img" />
                </div>

                <div className={`${classes.about__img} ${classes.about__img__box}`}>
                  <Image src={img02} alt="about-img" />
                </div>
              </div>

              <div className=" d-flex flex-column mb-3">
                <div className={`${classes.about__img} ${classes.about__img__box}`}>
                  <Image src={img03} alt="about-img" />
                </div>

                <div className={`${classes.about__img} ${classes.about__img__box}`}>
                  <Image src={img04} alt="about-img" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
