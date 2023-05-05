import React from 'react'
import Flex from 'components/Flex'
import { decreaseCart } from 'utils/decreaseCartQuantity'

import Button from 'components/Button/index'
import Input from 'components/Form/Input'

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { AddToCart } from 'utils/addProductToCart'
// import { GetTotals } from 'utils/getTotals'

export const QuantityAddDelete = ({ value, item, setCart, cartItem }) => {
  console.log(value, 'QUUUUUUU')

  // const val = GetTotals()   >>>used

  // useEffect(() => {
  //   if (trigger) {
  //   }
  // }, [trigger])

  const handleDecrement = item => {
    // SetQuantity(quantity === 1 ? 1 : quantity - 1)
    decreaseCart(item, cartItem, setCart)
  }

  const handleIncrement = item => {
    // SetQuantity(quantity + 1)
    AddToCart(item, setCart, cartItem)
  }
  return (
    <Flex>
      <Button.Danger
        text={<AiOutlineMinus />}
        onClick={() => handleDecrement(item)}
      />
      <Input width="80px" value={value} disabled />

      <Button.Primary
        text={<AiOutlinePlus />}
        onClick={() => handleIncrement(item)}
      />
    </Flex>
  )
}
