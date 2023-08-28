import '../styles/globals.css';
import { AppProvider } from '../context/context';

import '@rainbow-me/rainbowkit/styles.css';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';

import { infuraProvider } from 'wagmi/providers/infura';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const { chains, provider } = configureChains(
  [chain.goerli],
  [
    infuraProvider({ apiKey: process.env.INFURA_API_KEY, priority: 1 }),
    jsonRpcProvider({
      priority: 2,
      rpc: chain => ({
        http: `https://goerli.infura.io/v3/0afdac94044242cc8000167e9f261815`,
      }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Tiktok',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme()}
        coolMode
      >
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
