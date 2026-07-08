"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "Растяжка",
    text: "Мягкая работа с гибкостью, мобильностью и ощущением легкости в теле.",
    detail:
      "Занятие помогает постепенно раскрывать амплитуду, снять лишнее напряжение и почувствовать тело свободнее. Подходит и для первого знакомства, и для регулярной работы над шпагатами, спиной и пластикой.",
    image: "/ballet-stretch.jpg",
  },
  {
    title: "Пилатес",
    text: "Контроль, дыхание и спокойная сила через точное движение.",
    detail:
      "Пилатес укрепляет глубокие мышцы, помогает стабилизировать корпус и улучшить осанку. Формат бережный: без гонки, с вниманием к технике, дыханию и качеству каждого движения.",
    image: "/ballet-stretch.jpg",
  },
  {
    title: "Body sculpt",
    text: "Тонизирующая тренировка для красивого рельефа и собранного тела.",
    detail:
      "Формат для тех, кто хочет добавить силы и подтянутости, сохранив женственную линию движения. Работаем с ягодицами, ногами, руками и корпусом через контролируемую нагрузку.",
    image: "/ballet-stretch.jpg",
  },
  {
    title: "Здоровая спина",
    text: "Мягкое укрепление спины, раскрытие плеч и забота об осанке.",
    detail:
      "Занятие помогает снять бытовое напряжение, вернуть подвижность грудному отделу и почувствовать более свободную вертикаль. Подходит тем, кто много сидит или хочет бережно поддержать спину.",
    image: "/ballet-stretch.jpg",
  },
  {
    title: "Барре и боди-балет",
    text: "Балетная эстетика, работа у опоры и аккуратная силовая нагрузка.",
    detail:
      "Здесь соединяются элементы классики, пластики и функциональной работы. Формат развивает осанку, ноги, стопы, координацию и ощущение грации без необходимости иметь балетный опыт.",
    image: "/ballet-stretch.jpg",
  },
  {
    title: "МФР",
    text: "Миофасциальное расслабление для восстановления и мягкости тканей.",
    detail:
      "Спокойная практика с акцентом на снятие зажимов и улучшение ощущения тела. МФР хорошо дополняет растяжку, пилатес и силовые форматы, помогая восстановиться и двигаться свободнее.",
    image: "/ballet-stretch.jpg",
  },
];

export function ServiceCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="service-grid">
      {services.map((service, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            className={`service-card ${isOpen ? "is-open" : ""}`}
            key={service.title}
          >
            <button
              className="service-card-trigger"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="service-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="service-card-copy">
                <span className="service-title">{service.title}</span>
                <span className="service-text">{service.text}</span>
              </span>
              <span className="service-plus" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div className="service-card-details" aria-hidden={!isOpen}>
              <div>
                <p>{service.detail}</p>
                <a href="#request">Записаться на занятие</a>
              </div>
              <div className="service-card-photo">
                <Image
                  src={service.image}
                  alt="Временное фото для описания занятия"
                  width={360}
                  height={460}
                  sizes="(max-width: 680px) 100vw, 280px"
                />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
