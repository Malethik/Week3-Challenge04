import { Component } from './component';
import { series } from './data.ts';
import { Serie } from './components/serie.ts';

export class Main extends Component {
  private series: Serie[]
  constructor(selector: string) {
    super(selector);
    this.series = series()
    this.render();
  }

  // Posibles cambios del state

  delete(id: Serie['id']) {
    this.series = this.series.filter(item => item.id !== id)
    // ¿Necesito render() ?
  }

  update(serie: Serie) {
    this.series = this.series.map(item => item.id === serie.id ? serie : item)
    this.element.remove()
    this.render()
  }
  

  render() {
    this.template = this.createTemplate();
    super.render()
    this.series
        .filter((item) => item.watched === false)
        .map((item) => new Serie('.series-list--pending', item, this.delete.bind(this),
        this.update.bind(this)));
    this.series
        .filter((item) => item.watched === true)
        .map((item) => new Serie('.series-list--watched', item));
    }
    

  createTemplate() {
    return `<section class="series">
        <h2 class="section-title">Series list</h2>
        <section class="series-pending">
          <h3 class="subsection-title">Pending series</h3>
          <p class="info">You have 4 series pending to watch</p>
          <ul class="series-list series-list--pending">
          </ul>
        </section>
        <section class="series-watched">
          <h3 class="subsection-title">Watched series</h3>
          <p class="info">You have watched 4 series</p>
          <ul class="series-list series-list--watched">
          </ul>
        </section>
      </section>`;
  }
}
