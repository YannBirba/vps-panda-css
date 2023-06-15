import { Counter } from "./Counter";
import { Link } from "../../renderer/Link";
import { panda } from '../../styled-system/jsx';

export { Page };

function Page() {
  return (
    <>
      <panda.h1>
        🐼 vite-plugin-ssr with{" "}
        <Link
          variant="unstyled"
          href="https://twitter.com/panda__css"
          target="_blank"
          rel="noopener noreferrer"
        >
          Panda CSS
        </Link>
        🐼
      </panda.h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
        <li>
          Works with :
          <br />
          <ul>
            <li>Server side rendering (ssr)</li>
            <li>Static site generation (ssg)</li>
          </ul>
          💡Prerendered by default using global plugin configuration
        </li>
        <li>Small theming example with `panda.config.ts`</li>
        <li>Including Dark theme ssr compliant 🌕</li>
        <li>Variant example with the { '"Link"' } component</li>
        <li>JSX styled system example with the { '"panda"' } component to build the { '"Counter"' } component</li>
        <li>Global CSS</li>
        <li>Runtime free ⚡</li>
      </ul>
    </>
  );
}