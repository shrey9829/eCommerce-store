const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async () => {
  const res = await fetch(URL);

  return res.json();
};

export default getBillboard;
