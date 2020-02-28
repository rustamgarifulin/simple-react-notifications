import { Config } from "./NotificationContainer/NotificationContainer";
declare type NotifierBase = (cfg?: Config) => number;
interface Notifier extends NotifierBase {
    info: (message: string) => number;
    error: (message: string) => number;
    success: (message: string) => number;
    warn: (message: string) => number;
    configure: (cfg: Config) => void;
    dismiss: (id?: number) => void;
}
declare const notifier: Notifier;
export default notifier;
