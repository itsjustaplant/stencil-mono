import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'parent-component',
  shadow: false,
  scoped: true
})
export class ParentComponent {
  clickHandler() {
    console.log('parent click');
  }
  render() {
    return (
      <Host onClick={this.clickHandler}>
        <span>parent component</span>
        <slot />
    </Host>
    );
  }
}
