export enum ItemType {
    PRIVATE = 'private',
    PUBLIC = 'public',
};

export type Item = {
    name: string;
    owner: string;
    type: ItemType;
    isEnabled: boolean;
};

export type User = {
    username: string;
    id: string;
};