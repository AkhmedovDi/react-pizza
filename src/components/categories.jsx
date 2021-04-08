import React from 'react';

const Categories = React.memo(function Categories({activCategory, items, onClickCategory}) 
{
    return (
        <div className="categories">
        <ul>
        <li
          className={activCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
          {items && items.map((item, index) =>( 
            
            <li 
                className={activCategory === index ? 'active' : ''}
                onClick={() => onClickCategory(index)}
                key={`${index}_${item}`}> {item} </li>

      ) ) }
          
        </ul>
      </div>

    );
    
})

export default Categories;