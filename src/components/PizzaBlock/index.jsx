import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import Button from '../button'


function PizzaBlock({id, name, imageUrl, price, types, sizes, onClickAddPizza, addedCount}) {

    const typesNames = ['тонкое', 'традиционное']
    const [activType, setActivType] = React.useState(types[0])
 

    const pizzaSizes = [26, 30, 40]
    const [activeSizes, setActiveSizes] = React.useState(0)

    const onSelectTpye = (index) => {
       setActivType(index)
        
    }
    const onSelectSizes = (index) => {
        setActiveSizes(index)
        
    }
    
    const onAddPizza = () => {
      const obj ={
        id,
        name,
        imageUrl,
        price,
        size: pizzaSizes[activeSizes],
        type: typesNames[activType],
      }
      onClickAddPizza(obj)
    }

    return (
        <div className="pizza-block">
        <img
          className="pizza-block__image"
          src={imageUrl}
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
              {typesNames.map((type, index) => (
                  <li 
                  key={`${name}_${index}`}
                    onClick={() => onSelectTpye(index)}
                  className={classNames({
                      active: activType === index,
                      disabled: !types.includes(index)
                  })}>{ type }</li>
              ))}
           
          </ul>
          <ul>
                {pizzaSizes.map((size, index) => (
                    <li
                        key={index}
                        onClick = {() => onSelectSizes(index)}
                        className={classNames({
                            active: activeSizes === index, 
                            disabled: !sizes.includes(size)
                        })}
                    > { size } см. </li>
                ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <Button onClick={onAddPizza} className='button--add' outline> 
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount && <i>{addedCount}</i>}
            </Button>
        </div>
        </div>
          
    );
}

PizzaBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
   
}

PizzaBlock.defaultProps = {
  name: '---',
  price: 0,
  sizes: [],
  types: [],
}

export default PizzaBlock;