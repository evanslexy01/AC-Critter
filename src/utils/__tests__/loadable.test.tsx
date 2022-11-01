import { lazyLoad } from '../loadable';
import { render } from '@testing-library/react';
import * as React from 'react';

const LazyComponenWithDefaultExport = lazyLoad(
  () => import('../../pages/CollectionsPage'),
  m => m.default
);

const LazyComponentWithExportedFunction = lazyLoad(
  () => import('../../pages/CollectionsPage'),
  m => m.default
);

const LazyComponentWithFallback = lazyLoad(
  () => import('../../pages/CollectionsPage'),
  m => m.default,
  <div>Loading</div>
);

describe('loadable', () => {
  it('should render null by default', async () => {
    const {
      container: { firstChild },
    } = render(<LazyComponenWithDefaultExport />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render null by default with empty options', async () => {
    const {
      container: { firstChild },
    } = render(<LazyComponentWithExportedFunction />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render fallback if given one', async () => {
    const {
      container: { firstChild },
    } = render(<LazyComponentWithFallback />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render LazyComponent after waiting for it to load', async () => {
    const {
      container: { firstChild },
    } = render(<LazyComponentWithExportedFunction />);
    LazyComponentWithExportedFunction({});
    expect(firstChild).toMatchSnapshot();
  });
});
