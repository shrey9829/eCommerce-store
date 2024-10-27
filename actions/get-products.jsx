
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (query) => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  
  const res = await fetch(url);

  return res.json();
};

export default getProducts;
