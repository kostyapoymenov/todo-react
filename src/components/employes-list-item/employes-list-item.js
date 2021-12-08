import { Component } from 'react';

import classNames from 'classnames';

import './employes-list-item.css';

class EmployesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            promotion: false,
        }
    }

    onIncrease = () => {
        this.setState( ({increase}) => ({
                increase: !increase
            })
        )
    }

    onPromotion = () => {
        this.setState(({promotion}) => ({
            promotion: !promotion
        }));
    }

    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, promotion} = this.state;

        let classesItem = classNames(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            {'increase' : increase},
            {'like': promotion}
        );
        
        return (
            <li className={classesItem}>
                <span className="list-group-item-label" onClick={this.onPromotion}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}
                    >
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button 
                        type="button" 
                        className="btn-trash btn-sm "
                        onClick={onDelete}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployesListItem;