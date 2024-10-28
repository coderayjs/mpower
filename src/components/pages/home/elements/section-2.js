import { ArrowRightAltSharp } from "@mui/icons-material";
import Link from "next/link";

export default function SectionTwo() {
  return (
    <>
      <div className="px-4 py-8 mx-auto max-w-6xl md:px-24 lg:px-8 lg:py-8">
        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
          <div
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img
                src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/64f7a4347a320067e63568f0/Application-Board-1693954731750.png"
                className="object-cover w-full h-60 bg-[#36b37e]"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-5 font-semibold leading-5 text-bold text-3xl">
                    ERP
                  </h6>
                  <p className="text-md leading-6 text-gray-900">
                    Order management & tracking.
                    <br />
                    CRM, presentations & email marketing.
                    <br />
                    Invoicing & payments.
                    <br />
                    Accounting & commissions.
                  </p>

                  <div className="mt-10">
                    <Link
                      href="/platform"
                      aria-label="View Item"
                      className="text-sm text-blue-700"
                    >
                      Learn more about our application
                      <ArrowRightAltSharp />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img
                src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/64f7a4347a320067e63568f0/Home-Stores-1693954723508.png"
                className="object-cover w-full h-60 bg-[#ffab00]"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-5 font-semibold leading-5 text-bold text-3xl">
                    Online Stores
                  </h6>
                  <p className="text-md leading-6 text-gray-900">
                    Distributor stores.
                    <br />
                    Company stores.
                    <br />
                    Swag box builder.
                    <br />
                    Print on demand.
                  </p>

                  <div className="mt-10">
                    <Link
                      href="/stores"
                      aria-label="View Item"
                      className="text-sm text-blue-700"
                    >
                      Learn more about our application
                      <ArrowRightAltSharp />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full ">
              <img
                src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5e4ef3017141a025da6882b3/Home-Integrations-1694014064702.png"
                className="object-cover w-full h-60 bg-[#172b4d] "
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-5 font-semibold leading-5 text-bold text-3xl">
                    Integrations
                  </h6>
                  <p className="text-md leading-6 text-gray-900">
                    Realtime inventory and pricing.
                    <br />
                    Print labels, estimate and track shipping.
                    <br />
                    Automatically track orders.
                    <br />
                    Sync with accounting software.
                  </p>

                  <div className="mt-10">
                    <Link
                      href="/integrations"
                      aria-label="View Item"
                      className=" text-sm text-blue-700"
                    >
                      Learn more about our application
                      <ArrowRightAltSharp />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
