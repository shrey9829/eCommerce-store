import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import getCategory from "@/actions/get-category";
import React from "react";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";

export const revalidate = 0;

const CategoryPage = async ({ params, searchParams }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboardId} />
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 p-8">
          <MobileFilters sizes={sizes} />
          <div className="hidden lg:block">
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-8">
            {products.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((item) => (
                <ProductCard key={item._id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
