import {
  ArticleOutlined,
  Calculate,
  Drafts,
  LocalShipping,
  Payments,
  Receipt,
  ScheduleSend,
} from "@mui/icons-material";
import React from "react";

export default function SectionTwo() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-bold text-5xl font-bold leading-none tracking-tight text-black sm:text-5xl md:mx-auto">
            Order Management
          </h2>
          <p className="text-base text-black md:text-xl font-medium">
            MPower helps manage every aspect of an order from creation to
            completion all in one platform.
          </p>
        </div>
        <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
          <div className="space-y-6 sm:px-16">
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 ">
                  <ArticleOutlined />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Create Complex Orders
                </h6>
                <p className="text-sm text-gray-900">
                  Easily create purchase orders with multiple shipping
                  addresses, product colors, & multiple decorations.
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 ">
                  <ScheduleSend />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Submit Orders
                </h6>
                <p className="text-sm text-gray-900">
                  Send purchase orders to suppliers via PromoStandards or email
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12">
                  <LocalShipping />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Track Orders & Shipments
                </h6>
                <p className="text-sm text-gray-900">
                  Get instant status updates and tracking information through
                  our PromoStandards integration
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12">
                  <Receipt />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">Invoices</h6>
                <p className="text-sm text-gray-900">
                  Send realtime invoices to customers with a link to pay online.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6 sm:px-16">
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 ">
                  <Drafts />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Commissions
                </h6>
                <p className="text-sm text-gray-900">
                  Easily track commissions. Set different commission amounts per
                  employee.
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 ">
                  <LocalShipping />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">Shipping</h6>
                <p className="text-sm text-gray-900">
                  Quicly and effortestly calculate shipping wiht our FedEx, UPS,
                  and USPS integrations.
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 ">
                  <Calculate />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">Tax</h6>
                <p className="text-sm text-gray-900">
                  With our TaxJar integration calculating and filing quarterly
                  tax across multiple states is simple and easy.
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 ">
                  <Payments />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">Payments</h6>
                <p className="text-sm text-gray-900">
                  Process credit card, eCheck, PO and paper check payments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
