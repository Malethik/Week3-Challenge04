import { Component } from './component';

export class Main extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<section class="series">
        <h2 class="section-title">Series list</h2>
        <section class="series-pending">
          <h3 class="subsection-title">Pending series</h3>
          <p class="info">You have 4 series pending to watch</p>
          <ul class="series-list unWatched">
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
