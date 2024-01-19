import { customElement, property } from 'lit/decorators.js'
import { tailwindElement } from '../../shared/tailwind.element'
import style from './nightly-footer.css'
import { LitElement, html } from 'lit'

@customElement('nightly-footer')
export class NightlyFooter extends LitElement {
  static styles = tailwindElement(style)

  @property()
  termsOfServiceLink: string = ""

  @property()
  privacyPolicyLink: string = ""

  render() {
    return html`
      <div class="nc_footerContent">
        <div class="nc_footerText">
          By connecting, you agree to Common's <a href=${this.termsOfServiceLink}>Terms of Service</a> and its <a href=${this.privacyPolicyLink}>Privacy Policy</a>.
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
