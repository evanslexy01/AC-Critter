// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  Head,
  Html,
  Meta,
  Scripts,
  Title,
} from "solid-start";
import Collections from "./components/Collections";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>AC Critter</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Body>
        <Suspense>
          <ErrorBoundary>
            <Collections />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}