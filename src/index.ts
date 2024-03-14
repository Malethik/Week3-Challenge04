/* eslint-disable no-new */
import './styles.css';
import { series } from './data.ts';
import { Header } from './components/header';
import { Serie } from './components/serie.ts';
import { Main } from './components/main.ts';

new Header('header');
new Main('main');
const watched = series.filter((item) => item.watched === true);
const pending = series.filter((item) => item.watched === false);

pending.map((item) => new Serie('.series-list--pending', item));
watched.map((item) => new Serie('.series-list--watched', item));
