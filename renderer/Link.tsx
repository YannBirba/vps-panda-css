import { cx } from '../styled-system/css';
import { LinkVariant, link } from '../styled-system/recipes/link';
import { usePageContext } from './usePageContext'

export type LinkProps = LinkVariant & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export { Link };

function Link({ href, className, children, variant, ...props }: LinkProps) {
  const pageContext = usePageContext();
  let base = import.meta.env.BASE_URL;
  let processedHref = href;

  if (href && base && href.startsWith("/")) {
    if (base.endsWith("/")) {
      base = base.slice(0, -1);
    }
    processedHref = `${base}${href}`;
  }

  return (
    <a href={processedHref} data-active={pageContext.urlPathname === href ? true : undefined} className={cx(className, link({ variant }))} {...props}>
      {children}
    </a>
  );
}
