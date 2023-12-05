'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Components from '@/components';
import styles from '@/styles/modules/product.module.scss';

// const products = [
//   { title: 'Item 1', id: 1, color: 'white' },
//   { title: 'Item 2', id: 2, color: 'blue' },
//   { title: 'Item 3', id: 3 },
//   { title: 'Item', id: 4, color: 'red' },
// ]

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <div>
      <h4>{category}</h4>
    </div>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name : <span className={styles.red}>{product.name}</span>;
  return (
    <Components.Grid cols="2">
      <Components.Col>{name}</Components.Col>
      <Components.Col>{product.price}</Components.Col>
    </Components.Grid>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }

    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    );
    lastCategory = product.category;
  });

  return (
    <div>
      <Components.Grid cols="2">
        <Components.Col>
          <strong>Name</strong>
        </Components.Col>
        <Components.Col>
          <strong>Price</strong>
        </Components.Col>
      </Components.Grid>
      {rows}
    </div>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        placeholder="Search..."
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        {' '}
        Only show products in stock.
      </label>
    </form>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragon fruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passion fruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
]

export default function Product() {
  // const [count, setCount] = useState(0);
  // function handleClick() {
  //   setCount(count + 1);
  // }
  // const productColors = products.map(productColor => productColor.color);
  // const listItems = products.map(product =>
  //   <Components.Grid cols='2' key={product.id}>
  //     <Components.Col>
  //       <label className={styles.name}>{product.title}</label>
  //     </Components.Col>
  //     <Components.Col><div className={clsx([!!product.color && `${styles[`${product.color}`]}`])}>{`color: ${product.color}`}</div></Components.Col>
  //   </Components.Grid>
  // );

  return (
    <Components.Container>
      <Components.Grid cols="12" gap="4">
        <Components.Col colSpan="4">
          <aside><FilterableProductTable products={PRODUCTS} /></aside>
        </Components.Col>
        <Components.Col colSpan="8">
          {/* <section>{listItems}</section> */}
          list
        </Components.Col>
      </Components.Grid>
      {/* <ButtonCountClick count={count} onClick={handleClick} />
      <ButtonCountClick count={count} onClick={handleClick} /> */}
    </Components.Container>
  );

  function ButtonCountClick({ count, onClick }) {

    return (
      <Components.Button onClick={onClick} label={`Clicked ${count} times`} />
    )
  }
}