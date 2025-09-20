import firstBadge from "../../../assets/home/first-badge.png";
import secondBadge from "../../../assets/home/image 7.png";
import thirdBadge from "../../../assets/home/image 8.png";

const TrustBadges = () => {
  return (
    <section className="max-sm:py-14 bg-white">
      <div className="mx-auto max-w-7xl max-sm:px-6">
        <div className="grid grid-cols-1 text-center sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3">
          {/* Support */}
          <div className="md:p-2 lg:p-8">
            <img
              src={firstBadge}
              alt="Support Badge"
              className="mx-auto w-16 h-16 sm:w-[134px] sm:h-[134px] object-contain"
            />
            <h3 className="text-[31px] font-bold text-gray-900 font-pj">
              Safe Payments
            </h3>
            <p className="mt-5 text-[23px] font-bold text-[#767676] font-pj">
              Secure and protected checkout.
            </p>
          </div>

          {/* Sales */}
          <div className="md:p-2 lg:p-8">
            <img
              src={secondBadge}
              alt="Sales Badge"
              className="mx-auto w-16 h-16 sm:w-[125px] sm:h-[125px] object-contain"
            />
            <h3 className="mt-2 text-[31px] font-bold text-gray-900 font-pj">
              Shop with Confidence
            </h3>
            <p className="mt-5 text-[23px] font-bold text-[#767676] font-pj">
              Trusted payments, guaranteed protection.
            </p>
          </div>

          {/* Onboarding */}
          <div className="md:p-2 lg:p-8">
            <img
              src={thirdBadge}
              alt="Onboarding Badge"
              className="mx-auto w-16 h-16 sm:w-[100px] sm:h-[100px] object-contain"
            />
            <h3 className="mt-8 text-[31px] font-bold text-gray-900 font-pj">
              24/7 Support
            </h3>
            <p className="mt-5 text-[23px] font-bold text-[#767676]  font-pj">
              We're here anytime you need us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
