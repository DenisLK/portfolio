import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let dialogData = [
  { name: 'Vasya', id: 1 },
  { name: 'Petya', id: 2 },
  { name: 'Grischa', id: 3 },
  { name: 'Kolya', id: 4 },
  { name: 'Ivan', id: 5 },
  { name: 'Vitya', id: 6 },
  { name: 'Kostya', id: 7 }

]
let postData = [
  {
      id: 1,
      url: "https://avatars.mds.yandex.net/i?id=00195ec2697cb847cfe72d09840aba08413c05ef-5877286-images-thumbs&n=13&exp=1",
      alt: "avatar",
      message: 'Hi People',
      likesCount: 23
  },
  {
      id: 2,
      url: "https://avatars.mds.yandex.net/i?id=00195ec2697cb847cfe72d09840aba08413c05ef-5877286-images-thumbs&n=13&exp=1", alt: "avatar",
      message: 'Everybody',
      likesCount: 15
  },
  {
      id: 3,
      url: "https://avatars.mds.yandex.net/i?id=00195ec2697cb847cfe72d09840aba08413c05ef-5877286-images-thumbs&n=13&exp=1", alt: "avatar",
      message: 'Everyday',
      likesCount: 3
  },
  {
      id: 4,
      url: "https://avatars.mds.yandex.net/i?id=00195ec2697cb847cfe72d09840aba08413c05ef-5877286-images-thumbs&n=13&exp=1", alt: "avatar",
      message: 'how are you?',
      likesCount: 9
  }
];
const messageData = [
  { id: 1, text: 'Hi!' },
  { id: 2, text: 'Hello' },
  { id: 3, text: 'Bongoure' },
  { id: 4, text: 'Konichiva' },
  { id: 5, text: 'Merhaba' },
  { id: 6, text: 'Привет' },
  { id: 7, text: 'Nihao' }
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialog={dialogData} post = {postData} message={messageData}/>
  </React.StrictMode>
);


