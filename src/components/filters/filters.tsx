import React from 'react';
import Dropdown from '../../shared/dropdown/dropdown';
import {
    CATEGORY_FILTER,
    DIFFICULTY_FILTER,
    PRICE_FILTER,
    SEASON_FILTER,
} from '../../models/menu-item.interface';
import { IFilters } from '../../models/filters.interface';
import './filters.css';
import { getFromLocalStorage, setToLocalStorage } from '../../api/localStorage';

function Filters({
    onFilterChange,
}: {
    onFilterChange: (filters: IFilters) => void;
}) {
    const [filters, setFilters] = React.useState({
        category: [],
        season: [],
        price: [],
        difficulty: [],
    });

    const updateFilter = (value: string[], key: string) => {
        setFilters({ ...filters, [key]: value });
        onFilterChange({ ...filters, [key]: value });
        setToLocalStorage('filters', { ...filters, [key]: value });
    };

    return (
        <div className="filters">
            <Dropdown
                list={CATEGORY_FILTER}
                label={'Категория'}
                value={getFromLocalStorage<IFilters>('filters')!.category}
                onSelect={(val) => updateFilter(val, 'category')}
            />
            <Dropdown
                list={SEASON_FILTER}
                label={'Сезонность'}
                value={getFromLocalStorage<IFilters>('filters')!.season}
                onSelect={(val) => updateFilter(val, 'season')}
            />
            <Dropdown
                list={PRICE_FILTER}
                label={'Цена'}
                value={getFromLocalStorage<IFilters>('filters')!.price}
                onSelect={(val) => updateFilter(val, 'price')}
            />
            <Dropdown
                list={DIFFICULTY_FILTER}
                label={'Сложность'}
                value={getFromLocalStorage<IFilters>('filters')!.difficulty}
                onSelect={(val) => updateFilter(val, 'difficulty')}
            />
        </div>
    );
}

export default Filters;
