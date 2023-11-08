import "./style.scss";

import "./img/favicon.png";

import "./img/cellphone.svg";
import "./img/email.svg";
import "./img/github.svg";
import "./img/linkedin.svg";
import "./img/newspaper-variant.svg";
import "./img/open-in-new.svg";
import "./img/script-text.svg";

import "./img/p2p_energy_trading.png";
import "./img/jumpcut.png";
import "./img/cv-builder.png";
import "./img/battleship.png";
import "./img/calculator.png";
import "./img/tictactoe.png";
import "./img/restaurant.png";
import "./img/letsencrypt.png";
import "./img/duckdns.png";
import "./img/sitz.png";

const setupLinks = () => {
  const cardInfo = [
    {
      cls: "p2p-energy-trading",
      github: null,
      website: "https://doi.org/10.48550/arXiv.2207.08009",
    },
    {
      cls: "jumpcut",
      github: null,
      website: "https://getjumpcut.com",
    },
    {
      cls: "cv-builder",
      github: "https://github.com/maksimstojkovic/cv-builder",
      website: "https://maksimstojkovic.github.io/cv-builder/",
    },
    {
      cls: "battleship",
      github: "https://github.com/maksimstojkovic/battleship",
      website: "https://maksimstojkovic.github.io/battleship/",
    },
    {
      cls: "calculator",
      github: "https://github.com/maksimstojkovic/odin-calculator",
      website: "https://maksimstojkovic.github.io/odin-calculator/",
    },
    {
      cls: "tic-tac-toe",
      github: "https://github.com/maksimstojkovic/odin-tictactoe",
      website: "https://maksimstojkovic.github.io/odin-tictactoe/",
    },
    {
      cls: "restaurant",
      github: "https://github.com/maksimstojkovic/odin-restaurant",
      website: "https://maksimstojkovic.github.io/odin-restaurant/",
    },
    {
      cls: "lets-encrypt",
      github: "https://github.com/maksimstojkovic/docker-letsencrypt",
      website: "https://hub.docker.com/r/maksimstojkovic/letsencrypt",
    },
    {
      cls: "duck-dns",
      github: "https://github.com/maksimstojkovic/docker-duckdns",
      website: "https://hub.docker.com/r/maksimstojkovic/duckdns",
    },
  ];

  const websiteClasses = ["project-screenshot", "project-title", "website"];
  const githubClasses = ["github"];

  cardInfo.forEach((info) => {
    const card = document.querySelector("." + info.cls);

    const visitWebsite = () =>
      window.open(info.website, "_blank", "noopener,noreferrer");
    const visitGithub = () =>
      window.open(info.github, "_blank", "noopener,noreferrer");

    websiteClasses.forEach((cls) => {
      const element = card.querySelector("." + cls);

      if (element) {
        element.addEventListener("click", visitWebsite);
        element.style.cursor = "pointer";
      }
    });

    githubClasses.forEach((cls) => {
      const element = card.querySelector("." + cls);

      if (element) {
        element.addEventListener("click", visitGithub);
        element.style.cursor = "pointer";
      }
    });
  });
};

setupLinks();
