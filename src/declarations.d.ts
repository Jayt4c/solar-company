declare module 'isotope-layout' {
  interface IsotopeOptions {
    itemSelector?: string;
    layoutMode?: string;
    filter?: string;
    percentPosition?: boolean;
    transitionDuration?: string | number;
    [key: string]: unknown; // Use unknown instead of any for strict linting
  }

  class Isotope {
    constructor(element: HTMLElement | string, options?: IsotopeOptions);
    arrange(options: IsotopeOptions): void;
    destroy(): void;
  }

  export default Isotope;
}

declare module "bootstrap/dist/js/bootstrap.bundle.min.js";
declare module 'aos';