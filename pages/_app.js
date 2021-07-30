import '../app/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
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
    <QueryClientProvider client={queryClient}>
      <LayoutHandle>
        <Component {...pageProps} />
      </LayoutHandle>
    </QueryClientProvider>
  );
}

export default MyApp;
