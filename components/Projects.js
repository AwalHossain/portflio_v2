import Image from 'next/image';

import { ExternalLink } from 'react-feather';

const projects = [
  {
    key: 0,
    title: 'Lens Kart Glasses Everywhere',
    description: 'MERN Stack Project',
    tools: ['React', 'Node', 'Express', 'MongoDB', 'firebase', 'Heroku'],
    link: 'https://lens-cart.web.app/',
    linkDisplay: 'Live Site',
    githubClient:
      'https://github.com/AwalHossain/sunglass-website-client-side-code',
    githubServer: 'https://github.com/AwalHossain/Sunglass-server-side-code',

    imgUrl: 'https://i.ibb.co/M16bzSx/lenskart.png'
  },
  {
    key: 1,
    title: 'HealthCoach',
    description: 'MERN Stack Project',
    tools: ['React', 'Node', 'Redux', 'Express', 'Mongoose', 'JWT', 'AZURE'],
    link: 'https://healthcare-services-c55cf.web.app/',
    linkDisplay: 'Live site',
    imgUrl: 'https://i.ibb.co/NY9TW9m/healthcoach.png',
    githubClient: 'https://github.com/AwalHossain/heallthcoach_client_side',
    githubServer: 'https://github.com/AwalHossain/healthcoach_server_site'
  },
  {
    key: 2,
    title: 'Your dream place',
    description: 'MERN Stack Project',
    tools: ['React', 'Node', 'Express', 'MongoDB', 'firebase', 'Heroku'],
    link: 'https://your-dream-place.web.app/',
    linkDisplay: 'Live site',
    imgUrl: 'https://i.ibb.co/47tPmBQ/your-dream-place.png',
    githubClient:
      'https://github.com/AwalHossain/tourism-or-delivery-website-client-side-AwalHossain',
    githubServer:
      'https://github.com/AwalHossain/tourism-or-delivery-website-server-side-AwalHossain'
  }
];

export default function Projects() {
  return (
    <div id="mywork" className="w-full">
      <h2 className="text-3xl mt-10 mb-6">Projects I've worked on</h2>
      <div className="grid grid-flow-row grid-cols auto-rows-auto gap-10 items-center justify-start md:justify-center md:grid-cols-2 lg:grid-cols-3">
        {projects.map(
          ({
            key,
            title,
            description,
            githubClient,
            githubServer,
            tools,
            link,
            linkDisplay,
            imgUrl
          }) => {
            return (
              <div key={key}>
                <div className="relative w-full h-60 overflow-hidden">
                  <Image src={imgUrl} layout="fill" objectFit="cover" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl">{title}</h3>
                  <p className="text-xl">{description}</p>
                  <div className="text-bluegray flex flex-row flex-wrap mt-4 mb-2">
                    {tools.map((tool, index) => {
                      return (
                        <span
                          key={index}
                          className="border-3/2 border-bluegray-light px-3 py-1 rounded-lg bg-white mb-2 mr-2"
                        >
                          {tool}
                        </span>
                      );
                    })}
                  </div>
                  <a href={link} target="_blank">
                    <span className="flex items-center justify-start text-green-700 font-bold">
                      <ExternalLink />
                      <span className="pl-2">{linkDisplay}</span>
                    </span>
                  </a>
                  <a href={githubClient} target="_blank">
                    <span className="flex items-center justify-start text-green-700 font-bold">
                      <ExternalLink />
                      <span className="pl-2">Github Client</span>
                    </span>
                  </a>
                  {githubServer ? (
                    <a href={githubServer} target="_blank">
                      <span className="flex items-center justify-start text-green-700 font-bold">
                        <ExternalLink />
                        <span className="pl-2">Github Server</span>
                      </span>
                    </a>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
