import { cx } from '../styled-system/css';
import { LinkVariant, link } from '../styled-system/recipes/link';
import { usePageContext } from './usePageContext'

export type LinkProps = LinkVariant & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export { Link };

function Link({ href, className, children, variant, ...props }: LinkProps) {
  const pageContext = usePageContext();
  return (
    <a href={href} data-active={pageContext.urlPathname === href ? true : undefined} className={cx(className, link({ variant }))} {...props}>
      {children}
    </a>
  );
}
