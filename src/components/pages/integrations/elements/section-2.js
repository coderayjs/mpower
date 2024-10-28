import { ArrowRightAltSharp, CheckCircle } from "@mui/icons-material";
import React from "react";

export default function SectionTwo() {
  return (
    <>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="flex flex-col">
            <img
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5fa383a0103fc87e0819c2b1/QuickBooks-Online-Logo-1604614943839.png"
              className="w-48 my-5"
            />
            <p className="mb-5 text-xl text-black font-medium">
              Our QuickBooks streamlines the accounting and reconciliation
              process giving you an almost real-time overview of your
              financials.
            </p>

            <div className="pb-4 mb-2">
              <h6 className="mb-2 font-semibold leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Generate invoices automatically eliminating additional data
                entry.
              </h6>
            </div>
            <div className="pb-4 mb-2">
              <h6 className="mb-2 font-semibold leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Reconcile supplier invoices in MPower and sync them with
                quickbooks.
              </h6>
            </div>
            <div className="pb-4 mb-2">
              <h6 className="mb-2 font-semibold leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Leverage QuickBooks ECheck payment system to process ACH
                payments at a fraction of the cost of Credit card payments.
              </h6>
            </div>
          </div>

          <div className="flex flex-col">
            <img
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5fa383a0103fc87e0819c2b1/taxjar_logo-1604614953996.png"
              className="w-48 my-5"
            />
            <p className="mb-5 text-xl text-black font-medium">
              Our TaxJar integration makes calculating tax and submitting tax
              payments a breeze.
            </p>

            <div className="pb-4 mb-2">
              <h6 className="mb-2 font-semibold leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Sales users can view their pipeline, sales, commissions and
                other sales specific metrics.
              </h6>
            </div>
            <div className="pb-4 mb-2">
              <h6 className="mb-2 font-semibold leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Managers can easily see performance of all sales people and
                stores.
              </h6>
            </div>
            <div className="pb-4 mb-2">
              <h6 className="mb-2 font-semibold leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Executives have a full view of company sales and growth.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
