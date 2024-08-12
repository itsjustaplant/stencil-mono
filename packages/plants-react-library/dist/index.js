import { createReactComponent } from './react-component-lib';
import { applyPolyfills, defineCustomElements } from 'stencil-library/loader';
applyPolyfills().then(() => defineCustomElements());
export const LeafComponent = createReactComponent('leaf-component');
export const ParentComponent = createReactComponent('parent-component');
//# sourceMappingURL=index.js.map