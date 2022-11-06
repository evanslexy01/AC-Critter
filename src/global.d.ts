/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    USE_ANALYZER: boolean // Building for Bundle Analyzer
    USE_PROFILING: boolean // Building with Code Profiling
    REMOVE_CONSOLE: boolean // Excluding console.* statements
    USE_UNSAFE_MINIFICATION: boolean // Building with unsafe minification
  }
}

// Global Types
type LID = `${string}-${string}-${string}-${string}-${string}`

type CustomerData = {
  firstName?: string
  lastName?: string
  email?: string
  phoneNumber?: string
}

// Prequal Component Type
type PrequalForm<T> = React.DOMAttributes<T> & {
  env?: 'DEFAULT'|'LOCAL'|'Unit-Test'|'GH-PAGES'|'SB'|'sb'|'DEV'|'QA'|'PERF'|'PROD'; /* Default: QA */
  sourceId: string;
  ownerId: 'Showroom' | 'LeadsNav' | 'AutoNav-Web' | 'LeadRemarketing' | 'DAS'; // LeadRemarketing=DAS
  dealer?: import('./services/models/DeepLinkResponse').DealerInfoRequest;
  decisionScreensAreEnabled?: "true" | "false"; /* Default: "false" */
  fraudQuizEnabled?: boolean; /* Default: false */
  personalPageHeaderText?: string; /* Default: `We'd like to get to know you better.` */
  bffBaseUrl?: string; /* Default: '' */
  LNexperience?: 'button' | 'pqts';
  prequalId?: string;
  authTokens?: string; /* string-ified { C1_AT: string; C1_IT: string } */ // Ignores C1_AT
  customerData?: CustomerData;
  isMLPEligibleDealer?: boolean; /* Default: false */
  hasVehicle?: boolean; /* Default: false */
  shouldSendPreliminaryLead?: boolean; /* Default: false */
}; /* prettier-ignore */

// Vehicle Share Types
declare module 'vehicleShare/VehicleShareApp'
type VehicleShare<T> = React.DOMAttributes<T> & {
  lid: LID
  isLocal?: boolean
}

// Declare WebComponents <vehicle-share> & <c1-auto-prequal-form>
/* eslint-disable @typescript-eslint/no-unused-vars */
namespace JSX {
  interface IntrinsicElements {
    ['c1-auto-prequal-form']: PrequalForm<HTMLElement>
    ['vehicle-share']: VehicleShare<HTMLElement>
  }
}

// File Extension Types for Imports
declare module '*.css' {
  const styles: { [className: string]: string }
  export default styles
}

declare module '*.scss' {
  const styles: { [className: string]: string }
  export default styles
}

declare module '*.sass' {
  const styles: { [className: string]: string }
  export default styles
}

declare module '*.avif' {
  const src: string
  export default src
}

declare module '*.bmp' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}
