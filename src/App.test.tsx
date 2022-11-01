import App, { processParamLID } from './App';
import { render, waitFor } from '@testing-library/react';
import * as React from 'react';

describe('Landinge page app', () => {
  it('rejects empty lid parameter', async () => {
    render(<App />); // Test for runtime errors (root+reject) //TODO: Fix open handles (use jest --detectOpenHandles)
    await waitFor(() => expect(processParamLID()).toEqual(undefined)); // LID Sanitization rejects empty LID
  });

  it('rejects invalid lid parameter', async () => {
    const invalidLID: LID = 'g993g576-54da-451f-8g35-72f6f56f6420';
    Object.defineProperty(window, 'location', {
      get() {
        return { search: `?lid=${invalidLID}` };
      },
    });
    render(<App />); // Test for runtime errors (root+reject)
    await waitFor(() => expect(processParamLID()).toEqual(undefined)); // LID Sanitization rejects/deletes invalid LID
  });

  it('resolves with error for valid, but missing lid parameter', async () => {
    const missingLID: LID = 'd2cd458b-8921-ee83-110c-4a1c098fa26a';
    Object.defineProperty(window, 'location', {
      get() {
        return { search: `?lid=${missingLID}` };
      },
    });
    render(<App />); // Test for runtime errors (root+resolve with error)
    await waitFor(() => expect(processParamLID()).toEqual(missingLID)); // LID Sanitization accepts valid (missing) LID
  });

  it('accepts valid lid parameter', async () => {
    const validLID: LID = 'b9903576-54da-451f-8835-72f6f56f6420';
    Object.defineProperty(window, 'location', {
      get() {
        return { search: `?lid=${validLID}` };
      },
    });
    render(<App />); // Test for runtime errors (prequal page)
    await waitFor(() => expect(processParamLID()).toEqual(validLID)); // LID Sanitization accepts valid LID
  });
});
