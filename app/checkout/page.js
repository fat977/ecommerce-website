// checkout/page.js

import getUser from "../_lib/user";
import Checkout from "./Checkout";

export const metadata = {
  title: "Checkout",
};
export default async function MainCheckout() {
  const user = await getUser();

  return <Checkout user={user} />;
}

