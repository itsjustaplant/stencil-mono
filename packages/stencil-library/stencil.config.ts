import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  autoprefixCss: true,
  taskQueue: 'congestionAsync',
  extras: {
    tagNameTransform: true,
    experimentalSlotFixes: true,
    experimentalScopedSlotChanges: true,
    enableImportInjection: true,
    experimentalImportInjection: true
  },
  sourceMap: false,
  buildEs5: true,
  enableCache: true,
  hydratedFlag: { selector: 'attribute' },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../plants-react-library/lib/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
      includePolyfills: true,
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
