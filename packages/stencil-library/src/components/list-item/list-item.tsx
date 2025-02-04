import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'plant-list-item',
  shadow: false,
  scoped: true,
})
export class ListItemComponent {
  render() {
    return (
      <Host>
        <div>
          <slot />
        </div>
      </Host>
    );
  }
}
