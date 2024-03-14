/* eslint-disable max-params */
import { Component } from './component';

export interface Cards {
  selector: string;
  title: string;
  creator: string;
  year: number;
  poster: string;
}

export class Card extends Component {
  title;
  creator;
  year;
  poster;
  constructor(
    selector: string,
    title: string,
    creator: string,
    year: number,
    poster: string
  ) {
    super(selector);
    this.title = title;
    this.creator = creator;
    this.year = year;
    this.poster = poster;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<li class="serie">
              <img class="serie__poster"
                src="${this.poster}"
                alt="${this.title} poster" />
              <h4 class="serie__title">${this.title} ${this.creator}</h4>
              <p class="serie__info">${this.year}</p>
              <ul class="score">
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="5/5"></i>
                </li>
              </ul>
              <i class="fas fa-times-circle icon--delete"></i>
            </li>`;
  }
}
