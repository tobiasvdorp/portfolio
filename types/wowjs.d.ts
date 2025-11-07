declare module "wowjs" {
  export class WOW {
    constructor(options?: { live?: boolean });
    init(): void;
  }
}
