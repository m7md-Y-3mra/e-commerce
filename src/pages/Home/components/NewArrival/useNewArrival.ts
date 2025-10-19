export const useNewArrival = () => {
  const handleShopNow = (itemId: number) => {
    console.log(`Shop now clicked for item ${itemId}`);
  };

  return {
    handleShopNow,
  };
};
