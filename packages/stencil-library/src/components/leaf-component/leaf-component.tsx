import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'leaf-component',
  shadow: false,
  scoped: true
})
export class LeafComponent {
  render() {
    return (
      <Host>
        <span>leaf component</span>
    </Host>
    );
  }
}
