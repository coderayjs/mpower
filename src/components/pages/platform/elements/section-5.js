import React from "react";

export default function SectionFive() {
  return (
    <div className="text-center max-w-5xl mx-auto py-10">
      <h1 className="font-bold text-4xl">Suppliers</h1>
      <p className="text-xl font-medium">
        ​Find and order products from over 2500 ASI suppliers!
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <img
          className="mx-auto"
          src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5f5feebed847703c038e05bc/alphabroder_logo-1604608616564.png"
        />
        <img
          className="mx-auto"
          src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5f5feebed847703c038e05bc/gemline_logo-1604608631143.png"
        />
        <img
          className="mx-auto"
          src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5f5feebed847703c038e05bc/hit_logo-1604608639591.png"
        />
        <img
          className="mx-auto"
          src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5f5feebed847703c038e05bc/pcna_logo-1604608715278.png"
        />
      </div>
    </div>
  );
}
