import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo_f from './logo_f.png';
import logo_dark_f from './logo_dark_f.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo_f,
    logo_dark_f,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        id: "projet-1",
        title: 'Local Shark ',
        description: 'Plateforme de gestion',
        bgImage: '/work-1.png',
        fullDescription: `Local Shark - Votre réputation locale, automatisée
        Local Shark est une plateforme SaaS tout-en-un conçue pour aider les commerces à gérer leur présence en ligne et à booster leur réputation locale. Elle centralise les avis clients, automatise les réponses grâce à l’IA, et permet de programmer des publications et visuels sur les fiches Google Business.Fonctionnalités principales
        Gestion multi-fiches Google My Agrégation des avis Google
        Réponses automatiques aux avis générées par IA
        Création et planification de posts et photos avec IA
        Dashboard analytique : sentiment, évolution, performance
        Rapports mensuels et alertes en temps réel
        Utilisée par plus de 1200 commerces locaux, Local Shark a permis à ses utilisateurs d’augmenter leur note moyenne en ligne de 0.8 point, tout en gagnant un temps précieux dans la gestion de leur image de marque.`,
        technologies: ["React", "Next.js", "Tailwind"],

    },
    {
        id: "projet-2",
        title: 'Les 24H du Mans',
        description: 'Mobile App',
        bgImage: '/work-2.png',
        fullDescription: "Application métier sécurité et gestion logistique",
        technologies: ["React", "Next.js", "Tailwind"],
    },
    {
        id: "projet-3",
        title: 'Weather project',
        description: 'Carte météo dynamique',
        bgImage: '/work-3.png',
        fullDescription: "Description détaillée du projet à créer...",
        technologies: ["WordPress","","Javascript", "HTML", "CSS","PHP"],
    },
    {
        id: "projet-4",
        title: 'Axway',
        description: 'Refonte app',
        bgImage: '/work-4.png',
        fullDescription: "Ré-Implémentation d'une application interne exclusivement utilisée par l'équipe Support Web, pour la génération de clés d'accès après obtention de produits Axway par les clients..",
        technologies: ["React", "Next.js", "Tailwind"],
        /**
         * periode: "Janvier 2024 - Mars 2024",
        client: "Nom du client",
        screenshots: [
            "/screenshot1.png",
            "/screenshot2.png",
            "/screenshot3.png"
        ]
         */
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Fun Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];