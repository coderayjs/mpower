"use client";
import {
  AttachMoney,
  Inventory,
  Note,
  Print,
  ShoppingCart,
} from "@mui/icons-material";
import CheckroomIcon from "@mui/icons-material/Checkroom";

export default function SectionTwo() {
  return (
    <>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 border-b sm:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
                <ShoppingCart className="text-5xl" />
              </div>
              <h6 className="mb-2 font-bold leading-5 text-2xl">
                Unlimited Stores
              </h6>
              <p className="mb-3 text-lg text-black">
                Create unlimited stores for yourself or your clients.
              </p>
            </div>
          </div>
          <div className="p-8 border-b lg:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
                <CheckroomIcon className="text-5xl" />
              </div>
              <h6 className="mb-2 font-bold leading-5 text-2xl">
                Unlimited Products
              </h6>
              <p className="mb-3 text-lg text-black">
                Add unlimited products for company stores or setup your store
                with over 60,000 products.
              </p>
            </div>
          </div>
          <div className="p-8 border-b sm:border-r lg:border-r-0">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
                <Note className="text-5xl" />
              </div>
              <h6 className="mb-2 font-bold leading-5 text-2xl">
                Unlimited Pages
              </h6>
              <p className="mb-3 text-lg text-black">
                Create and design unlimited pages using our advanced page
                designer.
              </p>
            </div>
          </div>

          <div className="p-8 border-b lg:border-b-0 lg:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
                <Print className="text-5xl" />
              </div>
              <h6 className="mb-2 font-bold leading-5 text-2xl">
                Print on Demand
              </h6>
              <p className="mb-3 text-lg text-black">
                Create print on demand stores with no minimums.
              </p>
            </div>
          </div>
          <div className="p-8 border-b sm:border-b-0 sm:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
                <Inventory className="text-5xl" />
              </div>
              <h6 className="mb-2 font-bold leading-5 text-2xl">
                Live Inventory
              </h6>
              <p className="mb-3 text-lg text-black">
                Stock is never a concern with real-time inventory.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
                <AttachMoney className="text-5xl" />
              </div>
              <h6 className="mb-2 font-bold leading-5 text-2xl">
                Live Pricing
              </h6>
              <p className="mb-3 text-lg text-black">
                Stay up to date on price changes with our real-time pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
