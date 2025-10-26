import type { Contacts } from '../types'

import { AiOutlineGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaTelegramPlane, FaVk } from "react-icons/fa";

//*  Контакты ______________________________________________________________________


export const CONTACTS: Contacts = {
  // Вообще можно придумать, что если link == self, то ссылка вставляется из text
  phone: {
    text: "+7 911 449 39 01",
    link: 'tel:+79114493901',
    icon: AiOutlinePhone,
  },
  mail: {
    text: "blackevildragon@mail.ru",
    link: 'mailto:blackevildragon@mail.ru',
    icon: AiOutlineMail,
  },
  github: {
    text: "Мой Github",
    link: 'https://github.com/black-evil-dragon',
    icon: AiOutlineGithub,
  },
  telegram: {
    text: "Написать в Telegram",
    link: "https://t.me/blackevil_dragon",
    icon: FaTelegramPlane,
  },
  vk: {
    text: "Написать в VK",
    link: "https://vk.com/blackevil_dragon",
    icon: FaVk,
  },
};





//* Персональные проекты, коммерческие не включал _____________________________
export const MESSAGES = [
  {
    userName: "interval-slider-task",
    text:
      'Тестовое задание от компании only.digital, блок "Слайдер". repo: {GITHUB_URL}/interval-slider-task',
  },
  {
    userName: "duckling-bot",
    text:
      "Бот для Telegram для студентов ВоГУ для выдачи расписания и ее рассылки. repo: {GITHUB_URL}/duckling-bot",
  },
  {
    userName: "neuro-veil",
    text:
      "LSTM-модель для предсказания цен активов на фондовом рынке, интеграция TinkoffInvest API. repo: {GITHUB_URL}/neuro-veil",
  },
  {
    userName: "Other repositories",
    text: "Также вы можете посетить мой GitHub: {GITHUB_URL}",
  },
];

// Мой стек
const stack = [
  {
    title: "TS/JS",
    description: "React, Gulp, Webpack",
    duration: "Pet-projects, since 2021",
  },

  {
    title: "Python",
    description: "Django",
    duration: "since 2023",
  },

  {
    title: "Docker",
    description: "Сборка своих pet-проектов, изучение корпаративного CI/CD",
    duration: "since 2024",
  },

  {
    title: "SCSS/SASS",
    description: "БЭМ, Feature-sliced design",
    duration: "since 2021",
  },
];

const wishlist = [
  {
    title: "Java",
    description: "Проходил практику в СберТехнологии, изучал Java",
  },
  {
    title: "SOLID",
    description: "Активно изучаю на практике",
  },
];

// Опыт работы, время
const experience = [
  {
    title: "Стажер | only.digital",
    description:
      "Познакомился с React, scss, typescript, с продуктом компании и методологией БЭМ",
    date: {
      start: "Август 2022",
      // end: "Август 2022"
    },
  },

  {
    title: "Django-разработчик | PlaceStart",
    description: "",

    date: {
      start: "Август 2023",
      end: "По текущее время",
    },
  },
  {
    title: "Практика | СберТехнологии",
    description: "Летняя практика в СберТех'е, знакомство с Java",

    date: {
      start: "Июль 2025",
      end: "Август 2025",
    },
  },
];
