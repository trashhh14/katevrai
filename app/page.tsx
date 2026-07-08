import { ContactForm } from "@/app/contact-form";
import { ServiceCards } from "@/app/service-cards";

const steps = [
  "Заявка",
  "Обсуждение цели",
  "Подбор формата занятия",
  "Первое занятие",
  "Регулярная работа и прогресс",
];

export default function Home() {
  return (
    <main>
      <section className="hero-section" id="top">
        <div className="hero-video-panel" aria-hidden="true">
          <video
            className="hero-video"
            src="/magnific-loop-panel.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="hero-shell">
          <header className="hero-nav" aria-label="Навигация по сайту">
            <a className="hero-logo" href="#top">
              KATE<span>VRAI</span>
            </a>
            <nav>
              <a href="#about">Обо мне</a>
              <a href="#services">Услуги</a>
              <a href="#request">Контакт</a>
            </nav>
          </header>

          <div className="hero-copy reveal">
            <p className="eyebrow">Растяжка • балет • пилатес</p>
            <h1 className="hero-title-logo">
              <span>Kate</span>
              <em>Vrai</em>
            </h1>
            <div className="hero-meta">
              <p className="hero-lead">
                Тренировки с индивидуальным подходом и реальным результатом с
                заботой о своем теле.
              </p>
              <a className="primary-link" href="#request">
                Записаться
              </a>
            </div>
          </div>

          <div />
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-inner about-layout">
          <div>
            <p className="section-kicker">Обо мне</p>
            <h2>Бережный путь к гибкости, силе и красивой линии тела</h2>
          </div>
          <div className="prose-block">
            <p>
              Я педагог по растяжке, балету и пилатесу. В занятиях соединяю
              внимательную работу с телом, эстетику классического движения и
              спокойную систему, в которой прогресс появляется без давления.
            </p>
            <p>
              Для меня важны безопасность, индивидуальный подход и ощущение
              удовольствия от процесса. Мы работаем с вашим уровнем подготовки,
              целями и ритмом жизни.
            </p>
          </div>
          <div className="about-gallery-space" aria-hidden="true" />
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">Услуги</p>
            <h2>Форматы занятий</h2>
          </div>
          <ServiceCards />
        </div>
      </section>

      <section className="section steps-section" id="process">
        <div className="section-inner two-column">
          <div>
            <p className="section-kicker">Этапы работы</p>
            <h2>Все начинается с короткого разговора о вашей цели</h2>
          </div>
          <ol className="step-list">
            {steps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section request-section" id="request">
        <div className="section-inner form-layout">
          <div>
            <p className="section-kicker">Заявка</p>
            <h2>Напишите, и я помогу выбрать удобный формат</h2>
            <p className="form-intro">
              Укажите имя, удобный способ связи и пару слов о том, что хочется
              улучшить: гибкость, осанку, пластику, силу или уверенность в
              движении.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-waves" aria-hidden="true" />
        <div className="footer-inner">
          <div className="footer-brand">
            <a className="footer-logo" href="#top">
              <span className="footer-mark" />
              Kate Vrai
            </a>
            <a className="footer-certificate" href="#request">
              Сертификаты
            </a>
            <p>© 2026 Kate Vrai. Все права защищены.</p>
          </div>

          <nav className="footer-links" aria-label="Навигация в футере">
            <div>
              <h3>Студия</h3>
              <a href="#about">Обо мне</a>
              <a href="#process">Этапы работы</a>
              <a href="#request">Форма заявки</a>
            </div>
            <div>
              <h3>Контакты</h3>
              <a href="https://t.me/" target="_blank" rel="noreferrer">
                Telegram
              </a>
              <a
                href="https://www.instagram.com/katevraii?igsh=MWc4NDRmN3BpMDVncA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a href="mailto:hello@katevrai.ru">hello@katevrai.ru</a>
            </div>
          </nav>
        </div>
        <p className="footer-giant" aria-hidden="true">
          Kate Vrai
        </p>
      </footer>
    </main>
  );
}
