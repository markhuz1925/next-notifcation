import { ReactNode, useEffect } from "react";
import { SWRConfig } from "swr";

import fetcher from "@/lib/fetcher";

export default function SWRProvider({ children }: { children: ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        use: [trackLiveQueries],
        onErrorRetry: (err, key, config, revalidate, { retryCount }) => {
          if (err?.response?.status === 401) return;
          if (retryCount >= 3) return;
          setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 5000);
        },
      }}
    >
      {children}
    </SWRConfig>
  );
}

const liveQueries = new Set();

function trackLiveQueries(useSWRNext: any) {
  return (key: any, fetcher: any, config: any) => {
    const swr = useSWRNext(key, fetcher, config);

    useEffect(() => {
      liveQueries.add(key);

      return () => {
        liveQueries.delete(key);
      };
    }, [key]);

    return swr;
  };
}
