import React, { useState, useEffect, useContext, createContext } from 'react';
import Client from 'shopify-buy';

const STORAGE_KEY = `ttk_checkout_id`;
const shopifyClient = Client.buildClient({
  domain: `${process.env.SHOPIFY_STORE_NAME}.myshopify.com`,
  storefrontAccessToken: process.env.SHOPIFY_TOKEN,
});

const initialStoreState = {
  shopifyClient,
  isAdding: false,
  isDeleting: false,
  checkout: {
    lineItems: [],
  },
};

const StoreContext = createContext({
  store: initialStoreState,
  setStore: (_) => null,
});

const createNewCheckout = (client) => client.checkout.create();
const fetchCheckout = (client, id) => client.checkout.fetch(id);

const setCheckoutInState = (checkout, setStore) => {
  const isBrowser = typeof window !== `undefined`;
  if (isBrowser) {
    localStorage.setItem(STORAGE_KEY, checkout.id);
  }

  setStore((prevState) => {
    return { ...prevState, checkout };
  });
};

const StoreContextProvider = ({ children }) => {
  const [store, setStore] = useState(initialStoreState);

  useEffect(() => {
    (async () => {
      // Check for an existing cart.
      const isBrowser = typeof window !== `undefined`;
      const existingCheckoutId = isBrowser
        ? localStorage.getItem(STORAGE_KEY)
        : null;

      if (existingCheckoutId) {
        try {
          const checkout = await fetchCheckout(
            shopifyClient,
            existingCheckoutId
          );
          // Make sure this cart hasn’t already been purchased.
          if (!checkout.completedAt) {
            setCheckoutInState(checkout, setStore);
            return;
          }
        } catch (e) {
          localStorage.setItem(STORAGE_KEY, null);
        }
      }

      const newCheckout = await createNewCheckout(shopifyClient);
      setCheckoutInState(newCheckout, setStore);
    })();
  }, []);

  return (
    <StoreContext.Provider value={{ store, setStore }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => {
  const { store } = useContext(StoreContext);
  return store;
};

const useCartItemCount = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext);

  const count = checkout.lineItems.reduce(
    (total, item) => item.quantity + total,
    0
  );

  return count;
};

const useCartTotalCost = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext);

  const tax = checkout.totalTaxV2
    ? `$${Number(checkout.totalTaxV2.amount).toFixed(2)}`
    : '-';
  const total = checkout.totalPriceV2
    ? `$${Number(checkout.totalPriceV2.amount).toFixed(2)}`
    : '-';

  return {
    tax,
    total,
  };
};

const useCartItems = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext);
  return checkout.lineItems;
};

const useIsAdding = () => {
  const {
    store: { isAdding },
  } = useContext(StoreContext);

  return isAdding;
};

const useIsDeleting = () => {
  const {
    store: { isDeleting },
  } = useContext(StoreContext);

  return isDeleting;
};

const useAddItemToCart = () => {
  const {
    store: { checkout, shopifyClient },
    setStore,
  } = useContext(StoreContext);

  const addItemToCart = async (variantId, quantity) => {
    if (variantId === '' || !quantity) {
      throw new Error('Missing either quantity or variant');
    }

    setStore((prevState) => {
      return { ...prevState, isAdding: true };
    });

    const checkoutId = checkout.id;
    const lineItemsToAdd = [{ variantId, quantity }];
    const newCheckout = await shopifyClient.checkout.addLineItems(
      checkoutId,
      lineItemsToAdd
    );

    setTimeout(() => {
      setStore((prevState) => {
        return { ...prevState, checkout: newCheckout, isAdding: false };
      });
    }, 1500);
  };

  return addItemToCart;
};

const useRemoveItemFromCart = () => {
  const {
    store: { checkout, shopifyClient },
    setStore,
  } = useContext(StoreContext);

  const removeItemFromCart = async (itemId) => {
    setStore((prevState) => {
      return { ...prevState, isDeleting: true };
    });

    const newCheckout = await shopifyClient.checkout.removeLineItems(
      checkout.id,
      [itemId]
    );

    setTimeout(() => {
      setStore((prevState) => {
        return { ...prevState, checkout: newCheckout, isDeleting: false };
      });
    }, 1500);
  };

  return removeItemFromCart;
};

const useUpdateCart = () => {
  const {
    store: { checkout, shopifyClient },
    setStore,
  } = useContext(StoreContext);

  const updateCart = async (itemId, quantity) => {
    const newCheckout = await shopifyClient.checkout.updateLineItems(
      checkout.id,
      [{ id: itemId, quantity }]
    );
    setStore((prevState) => {
      return { ...prevState, checkout: newCheckout };
    });
  };

  return updateCart;
};

const useCheckout = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext);

  return () => window.open(checkout.webUrl);
};

export {
  StoreContext,
  StoreContextProvider,
  useAddItemToCart,
  useRemoveItemFromCart,
  useUpdateCart,
  useStore,
  useCartItemCount,
  useCartItems,
  useCartTotalCost,
  useIsAdding,
  useIsDeleting,
  useCheckout,
};
