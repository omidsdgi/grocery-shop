export interface MenuItemType  {
    id: number;
    created_at: Date;
    link: string;
    icon_name:string;
    title: string;
    rank: number;
    icon_path:number;
    menuId:number;
}
export  interface MenuGroups  {
    mainMenu: MenuItemType[];
    browseCategory: MenuItemType[];
}