import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'plant-card',
  shadow: false,
  scoped: true,
})
export class CardComponent {
  @Prop({ attribute: 'role' }) hostRole?: 'button' | 'link' = 'button';
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
