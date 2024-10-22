declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const value: string;
  export default value;
}

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_API_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}