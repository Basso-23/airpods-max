import "@/styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>AirPods Max - Apple</title>
        <meta
          name="description"
          content="AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation, Adaptive EQ, Spatial Audio, and free engraving."
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
