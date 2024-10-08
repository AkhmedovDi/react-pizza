import React from "react";
import { Categories, SortPizza, PizzaBlock, LoadingBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filter";
import { fetchPizzas } from "../redux/actions/pizzas";

const categoriesNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { sortBy, category } = useSelector(({ filters }) => filters);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  const onSelectSortBy = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  };

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [sortBy, category]);



  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activCategory={category}
          onClickCategory={onSelectCategory}
          items={categoriesNames}
        />

        <SortPizza
          activSortType={sortBy.type}
          items={sortItems}
          onClickSort={onSelectSortBy}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
            <PizzaBlock
              onClickAddPizza={handleAddPizzaToCart}
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              {...obj}
            />
          ))
          : Array(12)
            .fill(0)
            .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
