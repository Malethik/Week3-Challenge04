/* eslint-disable no-new */
import { Card, Cards } from './components/card';
import { Header } from './components/header';
import { Main } from './components/main';
import { series } from './data';
import './styles.css';

const mainTitle = 'My Series';

new Header('.container', mainTitle);
new Main('.main');
new Card('.unWatched', title, creator, year, poster);
Cards.map((item) => {
  new Card('.unWatched', item);
});
