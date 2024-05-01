import React from "react";
import Dropdown from "../../shared/dropdown/dropdown";
import {CategoryFilter, DifficultyFilter, PriceFilter, SeasonFilter} from "../../models/menu-item.interface";
import {IFilters} from "../../models/filters.interface";
import './filters.css';

function Filters({ onFilterChange }: { onFilterChange: (filters: IFilters) => void }) {
    const [filters, setFilters] = React.useState({ category: '', season: '', price: '', difficulty: '' });

    const updateFilter = (value: string, key: string) => {
        setFilters({ ...filters, [key]: value });
        onFilterChange({ ...filters, [key]: value });
    }

    return (
        <div className="filters">
            <Dropdown list={CategoryFilter} label={'Категория'} onSelect={(val) => updateFilter(val, 'category')} />
            <Dropdown list={SeasonFilter} label={'Сезонность'} onSelect={(val) => updateFilter(val, 'season')} />
            <Dropdown list={PriceFilter} label={'Цена'} onSelect={(val) => updateFilter(val, 'price')} />
            <Dropdown list={DifficultyFilter} label={'Сложность'} onSelect={(val) => updateFilter(val, 'difficulty')} />
        </div>
    );
}

export default Filters;
