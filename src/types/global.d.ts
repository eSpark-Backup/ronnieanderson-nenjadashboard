export { };

declare global {
    type ReactNode =
        | React.ReactElement<unknown>
        | FunctionComponent<unknown>
        | React.ComponentClass<unknown>
        | null;

    interface ISidebar {
        open: boolean;
        onClose?: () => void;
    }

    interface ISidebarItem {
        href: string;
        icon: ReactNode | null;
        activeIcon: ReactNode | null;
        title: string;
        childs: { href: string; title: string }[] | null;
        type?: string;
    }
}