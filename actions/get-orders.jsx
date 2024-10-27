const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders`;

const getOrderDetail = async (id) => {
  console.log(`${URL}/${id}`);
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getOrderDetail;
