import React from "react";
import Conractusbanner from "../Components/Pagecomponents/Conractusbanner";
import Contactdetail from "../Components/Pagecomponents/Contactdetail";
import Contactfrom from "../Components/Pagecomponents/Contactfrom";
import PageHead from "../Pagehead";

const Pagemeta = {
  title : 'Contact FlipTrade Support | Help Desk & Customer Care',
  description : 'Reach FlipTrade support via email, phone, or live chat. Get assistance with trading accounts, technical issues, deposits, and withdrawals. Reliable help for all traders.'
}
export default function() {
  return (
    <div>
      <PageHead PageMeta={Pagemeta} />
      <Conractusbanner />
      <Contactdetail />
      <Contactfrom/>
    </div>
  );
}
