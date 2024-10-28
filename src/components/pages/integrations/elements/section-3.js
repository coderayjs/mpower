"use client";
import { CheckCircle } from "@mui/icons-material";

const SectionThree = () => {
  return (
    <>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="flex flex-col justify-center">
            <img
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5fa383a0103fc87e0819c2b1/Slack_Technologies_Logo-1604698024537.png"
              className="w-60 my-5"
            />
            <p className="mb-5 text-xl text-black font-medium">
              Use slack? Our slack bot ensures you never miss an order update.
            </p>

            <div className="pb-4 mb-2">
              <h6 className="mb-2 leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Send notifications to channels or individual users.
              </h6>
            </div>
            <div className="pb-4 mb-2">
              <h6 className="mb-2 leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Receive updates for new orders and requests.
              </h6>
            </div>
            <div className="pb-4 mb-2">
              <h6 className="mb-2 leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Receive updates from artists and customers.
              </h6>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1">
            <img
              className="object-cover w-full col-span-2  my-auto"
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5fa383a0103fc87e0819c2b1/Integrations_slack%20%283%29-1604701893551.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="grid grid-cols-2 gap-1">
            <img
              className="object-cover w-full col-span-2  my-auto"
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5fa383a0103fc87e0819c2b1/Integrations_sendgrid%20%282%29-1604961586963.png"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center">
            <img
              src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/pages/5fa383a0103fc87e0819c2b1/SG_Twilio_Lockup_RGBx1-1604698767887.png"
              className="w-60 my-5"
            />
            <p className="mb-5 text-xl text-black font-medium">
              Send email with confidence through our SendGrid integration.
            </p>

            <div className="pb-4 mb-2">
              <h6 className="mb-2 leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Industry leading deliverability.
              </h6>
            </div>
            <div className="pb-4 mb-2">
              <h6 className="mb-2 leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Marketing automation.
              </h6>
            </div>
            <div className="pb-4 mb-2">
              <h6 className="mb-2 leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Send marketing emails using their intuitive email builder.
              </h6>
            </div>

            <div className="pb-4 mb-2">
              <h6 className="mb-2 leading-5">
                <CheckCircle className="text-green-600 mr-3" />
                Collect subscribers and grow your marketing lists.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
