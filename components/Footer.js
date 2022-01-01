import Image from 'next/image';

import {
  GitHub as GithubIcon,
  Linkedin as LinkedinIcon,
  Dribbble as DribbbleIcon,
  Mail as MailIcon
} from 'react-feather';

export default function Footer() {
  return (
    <div className="py-5 border-t-3/2 ">
      <div className="flex justify-center items-center mb-5 flex-shrink-0">
        <div className="ml-3 text-bluegray text-sm font-display leading-4">
          Awal Hossain
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <a className="mr-5" href="https://github.com/AwalHossain">
          <GithubIcon color="black" size={18} />
        </a>
        <a className="mr-5" href="https://linkedin.com/in/braydentw">
          <LinkedinIcon color="black" size={18} />
        </a>
        <a href="mailto:182204.te@student.just.edu.bd">
          <MailIcon color="black" size={18} />
        </a>
      </div>
    </div>
  );
}
