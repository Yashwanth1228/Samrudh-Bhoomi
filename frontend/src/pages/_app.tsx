import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo } from "react";

import createEmotionCache from "@/createEmotionCache";
import theme from "@/theme";

import AdminLayout from "@/layouts/AdminLayout";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const emotionCache = useMemo(() => createEmotionCache(), []);

  const isAdminRoute = router.pathname.startsWith("/admin");

  const page = isAdminRoute ? (
    <AdminLayout>
      <Component {...pageProps} />
    </AdminLayout>
  ) : (
    <Component {...pageProps} />
  );

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {page}
      </ThemeProvider>
    </CacheProvider>
  );
}
