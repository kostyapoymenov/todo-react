import EmployesListItem from "../employes-list-item/employes-list-item";

import './employes-list.css';

const EmployesList = ({data, onDelete, onToggleProp}) => {
    const elements = data.map(item => {
        const {id, prop, ...itemProps} = item;
        return (
            <EmployesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    });

    return (
        <div>
            <ul className="app-list list-group">
                {elements}
            </ul>
        </div>
    )
}

export default EmployesList;