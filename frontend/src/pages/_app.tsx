import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo } from "react";

import createEmotionCache from "@/createEmotionCache";
import theme from "@/theme";

import AdminLayout from "@/layouts/AdminLayout";
import UserLayout from "@/layouts/UserLayout";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Toaster } from "react-hot-toast";

// Client-side cache, shared for the whole session
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  const router = useRouter();

  const isAdminRoute = router.pathname.startsWith("/admin");
  const isLoginRoute = router.pathname === "/login";
  const isRegisterRoute = router.pathname === "/register";

  const isAuthPage = isLoginRoute || isRegisterRoute;

  const getLayout = () => {
    if (isAdminRoute) {
      return (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      );
    }

    if (isAuthPage) {
      return <Component {...pageProps} />;
    }

    return (
      <UserLayout>
        <Component {...pageProps} />
      </UserLayout>
    );
  };

  return (
    <>
     <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
        }}
      />
    <Provider store={store}>
       <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout()}
      </ThemeProvider>
    </CacheProvider>
    </Provider>
    
    </>
  );
}
