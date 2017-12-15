// We do not encourage the use of this.
// Try to use it once per app at most, if you must, contained in a single file.
// This is an escape hatch.
// Only use it for the rare @font-face definition or body styling.
import { injectGlobal } from 'styled-components';

export default injectGlobal`
  body {
    font-family: sans-serif;
  }

  a {
    text-decoration: none;
  }
`;
