import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { uiActions } from "./store/UiSlice";
import Notification from "./components/UI/Notification";


let isInitial =  true ;



function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending.",
          title: "Sending..",
          message: "Sending Cart Data!",
        })
      );
      const response = await fetch(
        "https://food-react-880e7-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }

      dispatch(
        uiActions.showNotification({
          status: "success.",
          title: "Success!",
          message: "Sending Cart Data Successfully!",
        })
      );
    };
     
    if(isInitial){
       isInitial = false
       return
     }


    sendCartData().then((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error.",
          title: "Error",
          message: "Sending Cart Data Failed!",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
