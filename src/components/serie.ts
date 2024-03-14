import { Component } from './component';

interface Series {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
}

export class Serie extends Component {
  serie: Series;
  seriesId: number;
  seriesName: string;
  seriesCreator: string;
  seriesYear: number;
  seriesPoster: string;
  seriesWatched: boolean;
  seriesScore: number;
  seriesEmmies: number;
  constructor(selector: string, serie: Series) {
    super(selector);
    this.serie = serie;
    this.seriesId = this.serie.id;
    this.seriesName = this.serie.name;
    this.seriesCreator = this.serie.creator;
    this.seriesYear = this.serie.year;
    this.seriesPoster = this.serie.poster;
    this.seriesWatched = this.serie.watched;
    this.seriesScore = this.serie.score;
    this.seriesEmmies = this.serie.emmies;
    this.template = this.createTemplate();
    this.render();
  }

  render(position?: 'beforeend') {
    this.template = this.createTemplate();
    super.render(position);
    const deleteButton =
      this.element.querySelector<HTMLButtonElement>('.icon--delete');
    if (deleteButton) {
      deleteButton.addEventListener('click', () => {
        this.delete();
        this.element.remove();
      });
    }
  }

  createTemplate() {
    return `              <li class="serie">
                <img
                  class="serie__poster"
                  src=${this.seriesPoster}
                  alt="${this.seriesName} poster"
                />
                <h4 class="serie__title">${this.seriesName}</h4>
                <p class="serie__info">${this.seriesCreator} ${this.seriesYear}</p>
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
