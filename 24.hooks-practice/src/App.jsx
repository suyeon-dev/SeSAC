import ProductFilter from './components/ProductFilter';
import ShoppingCartApp from './components/ShoppingCart';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <>
      {/* useMemo 과제: Products Filter */}
      <ProductFilter />

      {/* useCallback 과제: Shopping cart */}
      <ShoppingCartApp />

      {/* useReducer 과제: To Do App */}
      <TodoApp />
    </>
  );
}

export default App;
