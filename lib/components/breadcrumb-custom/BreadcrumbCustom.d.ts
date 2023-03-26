import { FC } from "react";
type PropsType = {
    className?: string;
    items: BreadcrumbItem[];
};
export type BreadcrumbItem = {
    className?: string;
    isActive?: boolean;
    toPage?: string;
    title?: string;
};
declare const BreadcrumbCustom: FC<PropsType>;
export default BreadcrumbCustom;
