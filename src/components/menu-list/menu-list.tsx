import './menu-list.css';
import MenuItem from "../menu-item/menu-item";
import {MENU} from "../../data/menu";
import Filters from "../filters/filters";
import React from "react";
import {IFilters} from "../../models/filters.interface";

function MenuList() {
    const [filters, setFilters] = React.useState<IFilters<string[]>>({ category: [], season: [], price: [], difficulty: [] });

    const mapFilters = (filter: IFilters) => {
        const mappedFilters: IFilters<string[]> = {
            category: [],
            season: [],
            price: [],
            difficulty: [],
        };
        for (let key in filter) {
            mappedFilters[key as keyof IFilters] = filter[key as keyof IFilters].split(',');
        }

        setFilters(mappedFilters);
    }


    const applyFilter = () => {
        const validFilters = Object.keys(filters).filter((el) => filters[el as keyof IFilters].length && filters[el as keyof IFilters][0] !== '').map((f) => ({ key: f, value: filters[f as keyof IFilters] }));
        if (!validFilters.length) return MENU;

        let filteredMenu = [...MENU];
        for (let obj of validFilters) {
            filteredMenu = filteredMenu.filter((menu) => obj.value.includes(menu[obj.key as keyof IFilters]));
        }
        return filteredMenu;
    }

    return (
        <>
            <Filters onFilterChange={(e) => mapFilters(e)} />
            <div className="menu-list">
                {
                    applyFilter().map((item) => (
                        <MenuItem key={item.id} {...item}/>
                    ))
                }
            </div>
        </>
    );
}

export default MenuList;
