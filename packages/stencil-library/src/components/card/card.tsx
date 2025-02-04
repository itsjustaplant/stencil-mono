import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'plant-card',
  shadow: false,
  scoped: true,
})
export class CardComponent {
  render() {
    return (
      <Host>
        <slot name="header" />
        <div>
          <slot />
        </div>
        <slot name="footer" />
      </Host>
    );
  }
}
