export { };

declare global {
    type ReactNode =
        | React.ReactElement<unknown>
        | FunctionComponent<unknown>
        | React.ComponentClass<unknown>
        | null;

    interface IDynamicTable<T> {
        title: string;
        rightNode?: ReactNode;
        data: T[];
        columns: IColumn[];
        isLoading: boolean;
        handlePageChange?: (newPage: number) => void;
        total?: number;
    }

    interface IColumn {
        name: string;
        key: string;
        component?: (any: any) => ReactNode;
        width?: string;
    }

    interface IBase extends Record<string, unknown> {
        id: string | number;
    }

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

    interface IStatusCard {
        icon: string | ReactNode,
        heading: string,
        value: string,
        focus?: boolean,
        extraInfo?: ReactNode
        notIcon?: boolean
    }

    interface IUserData {
        sponsorName: string;
        username: string;
        firstName: string;
        lastName: string;
        country: string;
        phone: string;
        email: string;
        password: string;
        confirmPassword: string;
      }

      interface ICustomButton {
        children: ReactElement | string
        sx?: any,
        variant?: "contained" | "text" | "outlined",
        color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined,
        onClick?: MouseEventHandler<HTMLButtonElement>,
        type?: any,
        startIcon?: ReactNode;
        endIcon?: ReactNode;
    }
    interface ICustomInput {
        required?: boolean
        label?: string
        placeholder: string,
        type: string
        sx?: any
        startIcon?: ReactNode,
        onChange: ChangeEventHandler<HTMLInputElement>,
        onBlur?: FocusEventHandler<HTMLInputElement>,
        name: string,
        value?: string,
        error?: boolean,
        helperText?: string
      }

      interface ICustomPhone {
        onChange: any
        name: string;
    }
    interface ICustomSelector {
        label?: string;
        placeholder?: string;
        options: any;
        required?: boolean;
        name?: string; // Add the 'name' attribute to the interface
        onChange: (event: SelectChangeEvent<any>, child: ReactNode, name: string) => void; // Update the 'onChange' type
        className?: string
        sx?: any
    }

    interface IPackage extends IBase {
        date: string,
        package: string,
        status: boolean,
    }

    interface IDirectTeam extends IBase {
        date: string,
        userName: string,
        email: string,
        activationDate: string,
        country: string,
        position: string,
        rank: string
    }
}