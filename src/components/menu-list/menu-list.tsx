import './menu-list.css';
import MenuItem from '../menu-item/menu-item';
import { MENU } from '../../data/menu';
import Filters from '../filters/filters';
import React from 'react';
import { IFilters } from '../../models/filters.interface';
import { getFromLocalStorage, setToLocalStorage } from '../../api/localStorage';
import { IMenuItem, LIST_MAP } from '../../models/menu-item.interface';

function MenuList() {
    if (!getFromLocalStorage('filters')) {
        setToLocalStorage('filters', {
            category: [],
            season: [],
            price: [],
            difficulty: [],
        });
    }
    const predefinedFilters = {
        category: [],
        season: [],
        price: [],
        difficulty: [],
    };
    const filtersFormLocalStorage = getFromLocalStorage<IFilters>('filters');
    for (let key in filtersFormLocalStorage) {
        const filterValues = filtersFormLocalStorage[key];
        if (!filterValues.length) continue;

        predefinedFilters[key] = filterValues;
    }

    const [filters, setFilters] = React.useState<IFilters>(predefinedFilters);

    const mapFilters = (filter: IFilters) => {
        const mappedFilters: IFilters = {
            category: [],
            season: [],
            price: [],
            difficulty: [],
        };
        for (let key in filter) {
            mappedFilters[key] = filter[key];
        }

        setFilters(mappedFilters);
    };

    const applyFilter = (): IMenuItem[] => {
        const validFilters = Object.keys(filters)
            .filter((el) => filters[el].length && filters[el][0] !== '')
            .map((f) => ({ key: f, value: filters[f] }));
        if (!validFilters.length) return MENU;

        const fn = (
            menu: IMenuItem,
            obj: { key: string; value: any },
        ): boolean =>
            obj.value
                .map((v) => {
                    const list = LIST_MAP[obj.key];
                    const onlySelectedFromList = list.filter(
                        (l) => l.label === v,
                    );
                    const onlyKeys = onlySelectedFromList.map(({ key }) => key);
                    return onlyKeys.includes(menu[obj.key]);
                })
                .some(Boolean);
        let filteredMenu = [...MENU];
        for (let obj of validFilters) {
            filteredMenu = filteredMenu.filter((el) => fn(el, obj));
        }
        return filteredMenu;
    };

    return (
        <>
            <Filters onFilterChange={(e) => mapFilters(e)} />
            <div className="menu-list">
                {applyFilter().map((item) => (
                    <MenuItem key={item.id} {...item} />
                ))}
            </div>
        </>
    );
}

export default MenuList;
