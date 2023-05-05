import React from 'react'
import {
  CategoriesDiv,
  CategoriesIcon,
  CategoriesName,
} from 'components/Cards/Styled'

export const CategoryImageCard = ({ item }) => {
  return (
    <CategoriesDiv>
      <CategoriesIcon>{item.icon}</CategoriesIcon>
      <CategoriesName>{item.name}</CategoriesName>
    </CategoriesDiv>
  )
}
