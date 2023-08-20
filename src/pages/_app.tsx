import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
//import { Html, Head, Main, NextScript } from 'next/document'
import { api } from "~/utils/api";
import "~/styles/globals.css";

// From Original Repo...
import { AppProps } from 'next/app';
import { ThemeContextProvider } from "~/themes/themeContext";

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

/*
=========================================
  Wagmi and RainbowKit imports
=========================================

https://www.rainbowkit.com/docs/installation

*/
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  DisclaimerComponent,
} from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, goerli } from 'wagmi/chains';

// WAGMI Providers
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string;
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [
    alchemyProvider({ apiKey: alchemyApiKey }),
    publicProvider()
  ]
);

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECTID as string;

const { wallets } = getDefaultWallets({
  appName: 'CoinSpotter',
  projectId,
  chains,
});

const ConnectWalletDisclaimer: DisclaimerComponent = ({ Text, Link }) => (
  <Text>
    By connecting your wallet, you agree to the{' '}
    <Link href="https://coinspotter.com/terms-of-service">Terms of Service</Link> and
    acknowledge you have read and understand the protocol{' '}
    <Link href="https://coinspotter.com/disclaimer">Disclaimer</Link>
  </Text>
);


const csAppInfo = {
  appName: 'CoinSpotter',
  disclaimer: ConnectWalletDisclaimer
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider modalSize="compact" appInfo={csAppInfo} chains={chains}>
          <ThemeContextProvider>
            <Component {...pageProps} />
          </ThemeContextProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
