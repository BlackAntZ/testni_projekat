import React from 'react';
import {redirect, useNavigate, useSubmit} from "react-router-dom";
import ConfirmDelete from "../modals/ConfirmDelete";

const SellerDelete = () => {
  const navigation = useNavigate();

  const submit = useSubmit();

  const deleteHandler = () => {
    submit(null, {method: "delete"});
  }

  return (
    <>
      <ConfirmDelete text={'Surely delete seller?'} confirmAction={deleteHandler} cancelAction={() => navigation('/sellers')} />
    </>
  );
};

export default SellerDelete;

export async function action ({params, request}) {
  const allIds = params.id.split(',');

  for (const allId of allIds) {
    await fetch(`https://63ce9ae9fdfe2764c726a809.mockapi.io/sellers/${allId}`, {
      method: request.method
    })
  }

  return redirect('/sellers');
}