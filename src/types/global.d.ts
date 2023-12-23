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
        label: string;
        placeholder: string;
        options: any;
        required?: boolean;
        name: string; // Add the 'name' attribute to the interface
        onChange: (event: SelectChangeEvent<any>, child: ReactNode, name: string) => void; // Update the 'onChange' type
    }
}