import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shell',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  remotes: [
  ['remote1', 'remote1@https://club-bayer-poc-remote1.vercel.app/remoteEntry.js'],
  ['remote2', 'remote2@https://club-bayer-poc-remote2.vercel.app/remoteEntry.js'],
  ],
  shared: (libraryName, sharedConfig) => {
    if (['react', 'react-dom', 'styled-components'].includes(libraryName)) {
      return {
        singleton: true,
        eager: true,
        requiredVersion: sharedConfig.requiredVersion,
      };
    }
    return false;
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;