/* eslint-disable array-callback-return */
/* eslint-disable no-new */
import { Card } from './components/card';
import { Header } from './components/header';
import { Main } from './components/main';
import { series } from './data';
import './styles.css';

const mainTitle = 'My Series';

new Header('.container', mainTitle);
new Main('.main');

series.map((item) => {
  new Card('.unWatched', item.name, item.creator, item.year, item.poster);
});
