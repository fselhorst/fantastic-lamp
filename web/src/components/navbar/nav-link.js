import { Link, useRoute } from 'wouter'

export const NavLink = ({ className, children, ...props }) => {
  const [isActive] = useRoute(props.href)

  return (
    <Link href={props.href} {...props}>
      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={isActive ? 'active ' + className : className}>{children}</a>
    </Link>
  )
}
