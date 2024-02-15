import React from 'react';
import { GrLanguage } from 'react-icons/all.js';

import { IProjectLink } from '@components/ProgrammingCard/ProgrammingCard.js';

import { ITechnology, TECHNOLOGIES } from '@constants/technologies.js';

export interface IProgrammingProject {
  content: string;
  title: string;
  wip?: boolean;
  projectLinks?: IProjectLink[];
  technologies: ITechnology[];
}

function projectLink(
  title: string,
  url: string,
  icon?: React.ElementType,
): IProjectLink {
  return {
    title,
    url,
    icon,
  };
}

function technologies(ids: string[]): ITechnology[] {
  return TECHNOLOGIES.filter((technology) => ids.includes(technology.id));
}

export const PROGRAMMING_PROJECTS: IProgrammingProject[] = [
  {
    title: 'Batbard - Gaming social media application',
    wip: false,
    projectLinks: [projectLink('Official website', 'https://batbard.com')],
    content: `I am currently working on a gaming social media mobile app using React Native with client-side synchronised caching, with plans for an accompanying web application in the near future. The application supports a full feed system including posts, infinite comment chains, reactions, and other social features such as adding friends, following and blocking users. It also supports creating and scheduling game related events, while allowing the user to review, rate and comment on any game.
    
    The backend consists of a vast GraphQL API, custom OAuth server, distributed Redis clusters, sharded MongoDB instances, and a robust social graph data store in Neo4J. I built a performant queue system, similar to AWS SNS/SQS, which delegates non-urgent tasks to separate microservices, with a full dead-letter queue implementation, as well as a retry mechanism. 
      
      Everything in this project was built by me, which was a great learning experience to understand how low level infrastructure is built.
      
      Batbard has been released on both Android and iOS, links for which can be found on batbard.com linked above
      `,
    technologies: technologies([
      'typescript',
      'javascript',
      'redis',
      'mongodb',
      'neo4j',
      'nodejs',
      'docker',
      'graphql',
      'grpc',
      'reactnative',
      'react',
      'vite',
      'eslint',
      'mui',
    ]),
  },
  {
    title: 'This Website!',
    wip: false,
    projectLinks: [
      projectLink('Portfolio project', 'https://github.com/Xmaxer/portfolio'),
    ],
    content:
      "This website, built using React+TS, is a simple static website with the sole purpose of displaying all my work. Maybe I'll add a backend in the future for this, when the requirement arises.",
    technologies: technologies([
      'typescript',
      'javascript',
      'vite',
      'react',
      'eslint',
      'mui',
    ]),
  },
  {
    title: 'Small utility libraries (Logger, Baseline code)',
    wip: false,
    projectLinks: [
      projectLink(
        'Baseline',
        'https://www.npmjs.com/package/@baselinecode/baseline',
        GrLanguage,
      ),
      projectLink(
        'Logger',
        'https://www.npmjs.com/package/@baselinecode/logger',
        GrLanguage,
      ),
    ],
    content:
      'Two libraries. @baselinecode/logger is for simple pretty logging. @baselinecode/baseline is to standardise code via ESLint, Prettier, and TS.',
    technologies: technologies(['typescript', 'javascript', 'eslint']),
  },

  {
    title: 'OS Society Player Management',
    wip: false,
    projectLinks: [
      projectLink(
        'Frontend project',
        'https://github.com/Xmaxer/os-society-app/tree/competitions',
      ),
      projectLink(
        'Backend project',
        'https://github.com/Xmaxer/os-society-api/tree/competitions',
      ),
    ],
    content:
      'A user management system build specifically for the OS Society gaming community administration, which has features to keep track of each community member and their relevant statistics, as well as competition handling and hopefully more feature to come!',
    technologies: technologies([
      'typescript',
      'javascript',
      'react',
      'eslint',
      'mui',
      'jest',
      'ruby',
      'rubyonrails',
      'graphql',
      'travis',
      'postgresql',
    ]),
  },
  {
    title: 'Common Components',
    wip: true,
    projectLinks: [
      projectLink(
        'Common components',
        'https://github.com/Xmaxer/common-components/tree/develop',
      ),
    ],
    content:
      'A common components library based on Material UI. Built with the same principles in mind, with the purpose of extending components to build more specialized, higher (and lower) level components for internal and external projects.',
    technologies: technologies([
      'typescript',
      'javascript',
      'react',
      'eslint',
      'mui',
      'jest',
    ]),
  },
  {
    title: 'Predictive Maintenance ML Application',
    wip: false,
    projectLinks: [
      projectLink('Frontend project', 'https://github.com/Xmaxer/pm_app'),
      projectLink('Backend project', 'https://github.com/Xmaxer/pm_app_api'),
      projectLink(
        'gRPC Server',
        'https://github.com/Xmaxer/pm_app_grpc_server',
      ),
      projectLink('Docker configs', 'https://github.com/Xmaxer/pm_app_docker'),
      projectLink(
        'gRPC Protos configs',
        'https://github.com/Xmaxer/pm_app_grpc_protos',
      ),
    ],
    content:
      'This was my final year project, which uses a lot of technologies combined together! This project was created to receive machine sensory data, create specialized ML models, and output metrics such as the Remaining Useful Life and anything else required visually in Grafana',
    technologies: technologies([
      'javascript',
      'react',
      'eslint',
      'mui',
      'ruby',
      'rubyonrails',
      'graphql',
      'tensorflow',
      'python',
      'postgresql',
      'prometheus',
      'influxdb',
      'grafana',
      'docker',
      'grpc',
    ]),
  },
  {
    title: 'Brackeys Jam 2020.2 (Infinity)',
    wip: false,
    projectLinks: [
      projectLink(
        'Itch.io project',
        'https://xmaxer.itch.io/infinity',
        GrLanguage,
      ),
    ],
    content:
      'My first participation in a Game Jam. This project (game) was created in just 1 week, and involved a lot from design, programming (C++/UE4 blueprints) and 3D design. And a lot of sleepless nights.',
    technologies: technologies(['ue', 'c++']),
  },
  {
    title: 'Transport-AI',
    wip: false,
    projectLinks: [
      projectLink(
        'Frontend project',
        'https://github.com/Xmaxer/TransportAI-Web/tree/development',
      ),
      projectLink(
        'Backend project',
        'https://github.com/Xmaxer/TransportAI-App/tree/development',
      ),
      projectLink(
        'Arduino project',
        'https://github.com/Xmaxer/transportAI-Arduino',
      ),
    ],
    content:
      'An uber-like clone, except automated and simulated using an Arduino instead of a real car (As otherwise that would be expensive for a college project). Build using Rails, Android (Java), and some basic C. The web based portion is the admin portal, to view the fleet. The Android project is the user facing app.',
    technologies: technologies([
      'c',
      'arduino',
      'android',
      'androidstudio',
      'java',
      'ruby',
      'rubyonrails',
      'javascript',
      'firestore',
      'postgresql',
    ]),
  },
  {
    title: 'OSS Bot',
    wip: false,
    projectLinks: [
      projectLink('OSSBot project', 'https://github.com/Xmaxer/OSSBot'),
    ],
    content:
      'A text command orientated bot, reads input from any user within the game (OldSchool RuneScape) and retrieves, and responds with requested data by replying in-game.',
    technologies: technologies(['java']),
  },
  {
    title: 'Basic Flight Booking App',
    wip: false,
    projectLinks: [
      projectLink(
        'Flight Booking App (Java)',
        'https://github.com/Xmaxer/Flight-Booking-App',
      ),
    ],
    content:
      'A basic flight booking application made in Java, an early Database Design project. Utilizes the SkyScanner API to retrieve flight day, and allows you to book outgoing and return flights with dates.',
    technologies: technologies(['java', 'rest']),
  },
];
