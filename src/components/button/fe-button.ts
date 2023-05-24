import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("fe-button")
export default class FeButton extends LitElement {
  render() {
    return html`
      <button @click=${this._onClick}>
        <slot></slot>
      </button>
    `;
  }

  private _onClick() {
    this.dispatchEvent(new CustomEvent("fe-click", {detail: "Any Object Here"}));
  }

  static styles = css`
    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "fe-button": FeButton;
  }
}
