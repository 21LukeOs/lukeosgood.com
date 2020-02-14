import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import email from './assets/email.svg';
import phone from './assets/phone.svg';

export const contacts = [
  {
    type: 'github',
    icon: github,
    link: '/21LukeOs',
    url: 'https://github.com/21LukeOs',
    isPrivate: false
  },
  {
    type: 'linkedin',
    icon: linkedin,
    link: '/luk21',
    url: 'https://www.linkedin.com/in/luk21',
    isPrivate: false
  },
  {
    type: 'email',
    icon: email,
    link: 'lukemosgood@gmail.com',
    url: 'mailto:lukemosgood@gmail.com',
    isPrivate: true
  },
  {
    type: 'phone',
    icon: phone,
    link: '+1 647 892 3299',
    url: 'tel:+16478923299',
    isPrivate: true
  }
];
