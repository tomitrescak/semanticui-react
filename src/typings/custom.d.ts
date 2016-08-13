///////////////////////////////////////////////////////////////
// jss                                                       //
///////////////////////////////////////////////////////////////

declare module 'jss' {
  interface JssStylesheet {
    attach(): { classes: any };
  }
  interface IJss {
    use(plugin: any): void;
    createStyleSheet(sheet: any): JssStylesheet;

  }
  let jss: IJss;
  export default jss;
}

declare module 'jss-nested' {
  export default function(): any;
}

declare module 'jss-vendor-prefixer' {
  export default function(): any;
}