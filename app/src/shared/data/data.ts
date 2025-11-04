import type { Contacts } from '../types'

import { AiOutlineGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaTelegramPlane, FaVk } from "react-icons/fa";

// Images

import onlyLogo from '../images/only.png'
import placestartLogo from '../images/placestart.png'
import sbertechLogo from '../images/sbertech.jpeg'

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
    link: "https://vk.com/blackevildragon",
    icon: FaVk,
  },
};





//* Персональные проекты, коммерческие не включал _____________________________
export const CHATS = [
  {
    id: "interval-slider-task",
    name: "Interval Slider Task",
    messages: [
      {
        id: "1",
        text: "Тестовое задание от компании only.digital, блок 'Слайдер'",
        senderId: "system"
      },
      {
        id: "2",
        text: "Repo: https://github.com/black-evil-dragon/interval-slider-task",
        senderId: "system"
      }
    ]
  },
  {
    id: "duckling-bot",
    name: "Duckling Bot",
    messages: [
      {
        id: "1",
        text: "Telegram-бот для выдачи занятий ВоГУ и ее рассылки",
        senderId: "system"
      },
      {
        id: "2",
        text: "Repo: https://github.com/black-evil-dragon/duckling-bot",
        senderId: "system"
      }
    ]
  },
  {
    id: "neuro-veil",
    name: "Neuro Veil",
    messages: [
      {
        id: "1",
        text: "LSTM-модель для предсказания цен активов на фондовом рынке, интеграция TinkoffInvest API",
        senderId: "system"
      },
      {
        id: "2",
        text: "Repo: https://github.com/black-evil-dragon/neuro-veil-demo",
        senderId: "system"
      }
    ]
  },
  {
    id: "other-repos",
    name: "Other Repositories",
    messages: [
      {
        id: "1",
        text: "Также вы можете посетить мой GitHub: https://github.com/black-evil-dragon",
        senderId: "system"
      }
    ]
  }
];





//* Опыт работы
export const EXPREIENCE = [
  {
    title: "Only",
    bio: "Стажер Frontend | Next, TS",
    url: "https://only.digital/",
    description: "Познакомился с React, scss, typescript, с продуктом компании и методологией БЭМ",

    image: onlyLogo,

    date: {
      start: "Август 2022",
      // end: "Август 2022"
    },
  },

  {
    title: "PLACESTART",
    bio: "Django-разработчик | Python, Django",
    url: "https://place-start.ru/",
    description: "",

    image: placestartLogo,

    date: {
      start: "Август 2023",
      end: "По текущее время",
    },
  },
  {
    title: "СберТехнологии",
    bio: "Практика | 2 курс",
    url: "https://sbertech.ru/",
    description: "Летняя практика в СберТех'е, знакомство с Java",

    image: sbertechLogo,

    date: {
      start: "Июль 2025",
      end: "Август 2025",
    },
  },
];


// Мой стек
export const stack = [
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

export const wishlist = [
  {
    title: "Java",
    description: "Проходил практику в СберТехнологии, изучал Java",
  },
  {
    title: "SOLID",
    description: "Активно изучаю на практике",
  },
];

