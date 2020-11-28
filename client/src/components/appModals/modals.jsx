import React from 'react';
import MenuModal from '../modalMenu/menu';
import CardDetails from '../modalCardDetails/cardDetails';
import AddEditCard from '../modalAddEditCard/addEdit';

export default function modals() {
  return (
    <>
      <MenuModal />
      <CardDetails />
      <AddEditCard />
    </>
  )
}