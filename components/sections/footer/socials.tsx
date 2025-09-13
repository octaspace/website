import { ReactNode } from "react";
import XIcon from "../../logos/x";
import GithubIcon from "../../logos/github";
import RedditIcon from "../../logos/reddit";
import TelegramIcon from "../../logos/telegram";
import DiscordIcon from "../../logos/discord";
import MediumIcon from "../../logos/medium";
import YouTubeIcon from "../../logos/youtube";
import InstagramIcon from "../../logos/instagram";

export const SocialIcons: Record<string, ReactNode> = {
  x: <XIcon />,
  github: <GithubIcon />,
  reddit: <RedditIcon />,
  telegram: <TelegramIcon />,
  discord: <DiscordIcon />,
  medium: <MediumIcon />,
  youtube: <YouTubeIcon />,
  instagram: <InstagramIcon />,
};
