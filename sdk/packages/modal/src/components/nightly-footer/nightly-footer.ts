import { customElement, property } from 'lit/decorators.js'
import { tailwindElement } from '../../shared/tailwind.element'
import style from './nightly-footer.css'
import { LitElement, html } from 'lit'
import { FooterTextData } from '../../utils/types'


@customElement('nightly-footer')
export class NightlyFooter extends LitElement {
  static styles = tailwindElement(style)

  @property({ type: Array })
  footerTextData: ReadonlyArray<FooterTextData> | undefined= [];

  parseTextData = (item: FooterTextData) => {
    if (typeof item === 'string') {
      return html`${item}`;
    } else {
      return html`<a href=${item.url}>${item.name}</a>`;
    }    
  }

  render() {
    return html`
      <div class="nc_footerContent">
        <div class="nc_footerText">
          ${this.footerTextData && this.footerTextData.map(this.parseTextData)}
        </div>
      </div>
      <div class="nc_footerBackground" />
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nightly-footer': NightlyFooter
  }
}
