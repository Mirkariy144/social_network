export const baseState: {
  Characters: { name: string }[];
  Message: { text: string }[];
  Posts: { text: string }[];
  Users: {
    followed: boolean;
    Name: string;
    Country: string;
    City: string;
    Status: string;
    Birthday: string;
    Education: string;
    Website: string;
    Avatar: string;
  }[];} = {
  Characters: [
    { name: 'Jovani Jorgo' },
    { name: 'Veronika' },
    { name: 'Selester' },
    { name: 'Yoba Kot' },
    { name: 'Kirasa' },
    { name: 'MBT 80' },
  ],
  Message: [
    { text: 'I love you' },
    { text: 'Just try to make my future' },
    { text: 'Can you help me, JS?' },
  ],
  Posts: [
    { text: 'Hey, bitch' },
    { text: 'get out' },
    { text: '.map' },
    { text: 'kurwa' },
    { text: 'props' },
  ],
  Users: [
    {
      followed: false,
      Name: 'Veronika',
      Country: 'Russia',
      City: 'Saint-Petersburg',
      Status: 'I miss Cat, look at me!',
      Birthday: '30.06.1996',
      Education: 'X-ray',
      Website: 'Just for me',
      Avatar:
        'https://sun6-20.userapi.com/s/v1/if1/03iNhTcpEU0rIWtAR3SYQ3fAO3ROzx43ZZ26vEcTHhexJazbty5wbFMcIZgOdvR-KjWZPo1M.jpg?size=428x580&quality=96&crop=0,0,428,580&ava=1',
    },
    {
      followed: false,
      Name: 'Mishanya',
      Country: 'Russia',
      City: 'Saint-Petersburg',
      Status: 'Working? No, just chill. Booooooring',
      Birthday: '15.09.1996',
      Education: 'SPB GASU Builder',
      Website: 'Any',
      Avatar:
        'https://yt3.googleusercontent.com/ytc/AOPolaQNTZFjqrgnapw4glO7vxjdrUIcg4fh4dGOkyaYCQ=s900-c-k-c0x00ffffff-no-rj',
    },
    {
      followed: false,
      Name: 'Kostya',
      Country: 'Russia',
      City: 'Saint-Petersburg',
      Status: 'Studying',
      Birthday: '08.05.1996',
      Education: 'SPB GASU Builder',
      Website: 'This one',
      Avatar: 'http://img.playground.ru/images/9/8/COTE_YOBA.jpg',
    },
  ],
};