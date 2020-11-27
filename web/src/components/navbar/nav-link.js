import { Link, useRoute } from 'wouter'

export const NavLink = ({ className, children, ...props }) => {
  const [isActive] = useRoute(props.href)

  return (
    <Link href={props.href} {...props}>
      <a className={isActive ? 'active ' + className : className}>{children}</a>
    </Link>
  )
}
