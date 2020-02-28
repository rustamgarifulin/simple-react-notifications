import "./styles.css";
declare type Animation = {
    in?: string;
    out?: string;
    duration?: number;
    timingFunction?: string;
};
export interface RenderProps {
    id: number;
    onClose: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}
export declare type Config = {
    message?: string;
    type?: string;
    position?: string;
    autoClose?: number;
    delay?: number;
    render?: (props: RenderProps) => any;
    onlyLast?: boolean;
    width?: string;
    animation?: Animation;
    newestOnTop?: boolean;
    closeOnClick?: boolean;
    pauseOnHover?: boolean;
    rtl?: boolean;
};
declare type EventArg = {
    id: number;
    callback: () => void;
};
export declare const eventManager: {
    ids: EventArg[];
    add: (id: number, callback: () => void) => void;
    remove: (id?: number | undefined) => void;
};
declare const _default: (props: Config & {
    id: number;
    cleared: () => void;
}) => JSX.Element;
export default _default;
