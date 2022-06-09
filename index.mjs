#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
  padding: 1,
  width: 60,
  title: "ayoungh",
  titleAlignment: "center",
  borderStyle: "double",
  borderColor: "#ff0000",
};

const intro = chalk.bold(
  "Hey, I'm Anthony.\n\nA Software Engineer based in London.\n\n"
);

const outro = chalk(
  "\n\nYou can find me everywhere under the handle:"
);

const handle = chalk.bold(
    "\n\nayoungh\n"
);

const links = [
  {
    name: chalk.hex("#fff").bgHex("#0f111a")("Website"),
    url: "  https://ayoungh.co.uk",
  },
  {
    name: chalk.hex("#fff").bgHex("#000")("DEV.to"),
    url: "  https://dev.to/ayoungh",
  },
  {
    name: chalk.hex("#fff").bgHex("#6e5494")("GitHub"),
    url: "  https://github.com/ayoungh",
  },
  {
    name: chalk.hex("#fff").bgHex("#582be8")("Polywork"),
    url: "  https://polywork.com/ayoungh",
  },

  {
    name: chalk.hex("#fff").bgHex("#9146ff")("Twitch"),
    url: "  https://twitch.tv/ayoungh",
  },
  {
    name: chalk.hex("#fff").bgHex("#1DA1F2")("Twitter"),
    url: "  https://twitter.com/ayoungh",
  },
  {
    name: chalk.hex("#fff").bgHex("#ff0000")("YouTube"),
    url: "  https://youtube.com/ayoungh",
  },
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen(intro + linkList + outro + handle, boxenOptions));