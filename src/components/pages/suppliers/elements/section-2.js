"use client";
import { CheckCircle } from "@mui/icons-material";

export default function SectionTwo() {
  return (
    <>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="flex flex-col justify-center">
            <h1 className="text-7xl font-bold my-2">1</h1>
            <p className="mb-5 text-xl text-black font-medium">
              Your product data is loaded into our database.
            </p>

            <div className="pb-4 mb-2">
              <h6 className="mb-2 leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Manage products yourself or have our data entry team help.
              </h6>
            </div>
            <div className="pb-4 mb-2">
              <h6 className="mb-2 leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Your products will be PromoStandards compliant.
              </h6>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1">
            <img
              className="object-cover w-full col-span-2  my-auto"
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5fe27f98f791fc18756b2e6e/Suppliers%201%20%282%29-1610391056705.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="flex flex-col justify-center">
            <h1 className="text-7xl font-bold my-2">2</h1>
            <p className="mb-5 text-xl text-black font-medium">
              We provide API access for distributors to pull your product data
              into their systems.
            </p>

            <div className="pb-4 mb-2">
              <h6 className="mb-2 leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Unlimited distributors.
              </h6>
            </div>
            <div className="pb-4 mb-2">
              <h6 className="mb-2 leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Unlimited products.
              </h6>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1">
            <img
              className="object-cover w-full col-span-2  my-auto"
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5fe27f98f791fc18756b2e6e/Suppliers%202-1610390940896.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="flex flex-col justify-center">
            <h1 className="text-7xl font-bold my-2">3</h1>
            <p className="mb-5 text-xl text-black font-medium">
              Instantly reach a large network of distributors who are already
              using promostandards to collect product data.
            </p>

            <div className="pb-4 mb-2">
              <h6 className="mb-2 leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Adopted by top online distributors and buying groups.
              </h6>
            </div>
            <div className="pb-4 mb-2">
              <h6 className="mb-2 leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Increase the visibility of your products overnight.
              </h6>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1">
            <img
              className="object-cover w-full col-span-2  my-auto"
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5fe27f98f791fc18756b2e6e/Suppliers%203-1610392277890.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12 pt-20">
        <h2 className="max-w-4xl mb-2 font-sans text-5xl font-bold leading-none tracking-tight text-black sm:text-5xl md:mx-auto">
          Website
        </h2>
        <p className="text-base text-black md:text-lg">
          We help manage and build your website.
        </p>
      </div>

      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-xl text-black font-medium">
              Our easy to use website builder make it simple to manage and
              market your website.
            </p>

            <div className="pb-4 mb-2">
              <h6 className="mb-2 leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                No additional fees.
              </h6>
            </div>
            <div className="pb-4 mb-2">
              <h6 className="mb-2 leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Unlimited pages.
              </h6>
            </div>
            <div className="pb-4 mb-2">
              <h6 className="mb-2 leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Aquire new distributors.
              </h6>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1">
            <img
              className="object-cover w-full col-span-2  my-auto"
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5fe27f98f791fc18756b2e6e/Suppliers%20Websites-1610392818939.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
