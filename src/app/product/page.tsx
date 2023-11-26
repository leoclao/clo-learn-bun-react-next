'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Components from '@/components';
import styles from '@/styles/modules/product.module.scss';

const products = [
  {title: 'Item 1', id: 1, color: 'white'},
  {title: 'Item 2', id: 2, color: 'blue'},
  {title: 'Item 3', id: 3},
  {title: 'Item', id: 4, color: 'red'},
]

export default function Product() {
  const [count, setCount] = useState(0);
    function handleClick() {
      // alert('You clicked me!');
      setCount(count + 1);
    }
  const productColors = products.map( productColor => productColor.color);
  const listItems = products.map(product => 
    <Components.Grid display={'flex'} key={product.id}>
      <Components.Col>{product.title}</Components.Col>
      <Components.Col><div className={clsx({[`${styles[`${product.color}`]}`]: !!product.color})}>{`color: ${product.color}`}</div></Components.Col>
    </Components.Grid>
  );

  return (
    <>
      <section>{listItems}</section>
      <ButtonCountClick count={count} onClick={handleClick} />
      <ButtonCountClick count={count} onClick={handleClick} />
    </>
  );

  function ButtonCountClick({count, onClick}) {
    
    return (
      <Components.Button onClick={onClick} label={`Clicked ${count} times`} />
    )
  }
}