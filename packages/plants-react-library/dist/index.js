import { createReactComponent } from './react-component-lib';
import { applyPolyfills, defineCustomElements } from 'stencil-library/loader';
applyPolyfills().then(() => defineCustomElements());
export const PlantCard = createReactComponent('plant-card');
export const PlantList = createReactComponent('plant-list');
export const PlantListItem = createReactComponent('plant-list-item');
//# sourceMappingURL=index.js.map