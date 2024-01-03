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
        boldRank?: boolean;
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
        className?: string[];
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
        className?: string[];
        startIcon?: ReactNode,
        onChange?: ChangeEventHandler<HTMLInputElement>,
        onBlur?: FocusEventHandler<HTMLInputElement>,
        name: string,
        value?: string,
        error?: boolean,
        helperText?: string
      }

      interface ICustomPhone {
        onChange?: any
        name: string;
    }
    interface ICustomSelector {
        label?: string;
        placeholder?: string;
        options: any;
        required?: boolean;
        name?: string; // Add the 'name' attribute to the interface
        onChange?: (event: SelectChangeEvent<any>, child: ReactNode, name: string) => void; // Update the 'onChange' type
        className?: string[];
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
    interface IIncomeReferral extends IBase {
        date: string,
        userName: string,
        country: string,
        amount: string,
    }
    interface IIncomeTeamBonus extends IBase {
        date: string,
        settledBusiness: string,
        amount: string,
    }
    interface IIncomePackageProfit extends IBase {
        date: string,
        tradingProfit: string,
    }
    interface IDeposite extends IBase {
        date: string,
        address: string,
        amount:String,
        status:boolean
    }
    interface IRankBonus extends IBase {
        rank: string;
        qualification: {
            totalPrice: number;
            myPrice: number;
            checks: null | {
                name: string;
                value: boolean;
            }[]
        };
        reward: string;
    }
}