import * as React from "react";
import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";
import { cn } from "../lib/utils";

// O segredo aqui é o Omit, para que o nosso componente aceite 'className' como string,
// mas o RouterNavLink interno continue recebendo a função dele.
interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        {...props}
        className={(state: { isActive: boolean; isPending: boolean }) =>
          cn(
            className, // Este é a string vinda das props do seu componente
            state.isActive && activeClassName,
            state.isPending && pendingClassName
          )
        }
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };