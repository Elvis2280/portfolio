import '../app/styles/globals.css';
import Layout from '../app/components/layouts/layout-main/Layout-main';
import Layout_empty from '../app/components/layouts/layout_empty/Layout_empty.jsx';
import Head from 'next/head';
import { QueryClientProvider, QueryClient } from 'react-query';

const layouts = {
  L1: Layout,
  L2: Layout_empty,
};

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const LayoutHandle =
    layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <>
      <Head>
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.15.3/js/all.js"
          integrity="sha384-haqrlim99xjfMxRP6EWtafs0sB1WKcMdynwZleuUSwJR0mDeRYbhtY+KPMr+JL6f"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <QueryClientProvider client={queryClient}>
        <LayoutHandle>
          <Component {...pageProps} />
        </LayoutHandle>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
