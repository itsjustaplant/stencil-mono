import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'plant-list',
  shadow: false,
  scoped: true,
})
export class ListComponent {
  render() {
    return (
      <Host>
        <plant-card>
          <slot name="header" />
          <slot />
          <slot name="footer" />
        </plant-card>
      </Host>
    );
  }
}
