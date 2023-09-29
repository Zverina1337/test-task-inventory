export interface InputType {
    value: string;
    name: string;
    placeholder: string;
}
export interface ButtonComponentType {
    size?: "small" | "medium" | "large" | "responsive";
    backgroundColor?: "red" | "white";
    textColor?: "white" | "black";
}
export interface RowType {
    id: number;
    value: number;
    imageUrl: string;
}

export interface PanelType {
    row: RowType;
}

export interface BooleanType {
    value: boolean;
}
export interface SkeletonType {
    height?: "small" | "medium" | "large" | "responsive";
    width?: number;
}

export interface InventoryItemType {
    id: number;
    value: number;
    imageUrl: string;
}