import { SpeedDialIcon } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import { Group, MenuBook, Savings } from "@mui/icons-material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AnalyticsIcon from "@mui/icons-material/Analytics";

export default function SectionThree() {
  return (
    <>
      <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
        <h2 className="max-w-lg font-sans text-5xl font-bold leading-none tracking-tight text-black md:mx-auto">
          ERP
        </h2>
        <p className="text-base text-black font-medium md:text-lg">
          Our application was built from the ground up to make decorators,
          distributors and suppliers of promotional products and apparel more
          efficient.
        </p>
      </div>

      <div className="px-4 py-8 mx-auto max-w-6xl md:px-24 lg:px-8">
        <div className="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4">
              <SpeedIcon />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-2xl">
              Dashboards
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Easily track sales, leads and other key metrics through multiple
              dashboards.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full">
              <Group />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-2xl">CRM</h6>
            <p className="mb-3 text-sm text-gray-900">
              Lightweight CRM fully integrated with orders and stores
              superpowers your buisiness development efforts.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 ">
              <MenuBook />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-2xl">
              Order Management
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Track and orders from start to finish placed from a store or
              created manually. Send orders to suppliers via email or
              PromoStandrds.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 ">
              <Savings />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-2xl">
              Accounting
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Easily sync customer invoices and supplier bills with QuickBooks
              Online.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4">
              <LocalGroceryStoreIcon />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-2xl">
              Store Builder
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Build UNLIMITED custom stores using our intuitive and flexible
              store builder.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 ">
              <AnalyticsIcon />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-2xl">Reporting</h6>
            <p className="mb-3 text-sm text-gray-900">
              Gain valuable insight it customer, product and supplier sales.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
