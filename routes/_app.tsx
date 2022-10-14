import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";
import { createContext } from "preact";
import state, { type AppStateType } from "../state.ts";

export const AppState = createContext<AppStateType>({} as AppStateType);

export default function AppLayout({ Component }: AppProps) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <title>Fresh </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href={asset("style.css")} />
      </Head>
      <body>
        <main>
          <AppState.Provider value={state}>
            <Component/>
          </AppState.Provider>
        </main>
      </body>
    </html>
  );
}
