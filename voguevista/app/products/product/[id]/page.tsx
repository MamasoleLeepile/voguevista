"use client";

import ProductDetail from "@/components/ProductListing/Productdetails";



export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ProductDetail params={{
        id: "*"
      }}/>
    </div>
  );
}