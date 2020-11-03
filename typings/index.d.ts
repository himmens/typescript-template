declare var __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;

// For using custom JSX elements. Documentation: https://www.typescriptlang.org/docs/handbook/jsx.html
declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }
}

// For importing CSS Modules
declare module '*.css' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

// For importing png
declare module '*.png';
