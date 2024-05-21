function getImageUrl(image) {
  return new URL(`../../public/uploads/${image}`, import.meta.url).href;
}

return (
  <img
    src={getImageUrl(product.image)}
    alt={product.name}
    className="w-[30rem] rounded"
  />
);
