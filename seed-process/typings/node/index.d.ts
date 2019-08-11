// borrowed from:
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/globals.d.ts
declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV?: 'development' | 'production' | 'test'
    BABEL_ENV?: 'development' | 'production' | 'test'
    EXAMPLE_ENV?: string
  }
}

// -----------------------------------------------------------------------------
