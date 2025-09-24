import leafBg from "@/assets/home/feedback-img.png";

import avatar1 from "../../../assets/home/image 10.png";
import avatar2 from "../../../assets/home/jkjk.png";
import avatar3 from "../../../assets/home/image 11.png";

const FeedBack = () => {
  return (
    <section className="relative py-0">
      {/* Responsive background leaf */}
      <div className="absolute top-0 left-6 bottom-0 w-1/3 -z-10 flex max-lg:hidden">
        <img
          src={leafBg}
          alt="Leaf background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          {/* Heading */}
          <div className="text-center">
            <h2 className="mt-4 text-[63px] font-bold text-activeLink font-pj">
              What Our Customers Say
            </h2>
            <p className="text-[31px] font-medium text-muted font-pj">
              We love hearing from you!
            </p>
          </div>

          {/* Cards */}
          <div className="relative mt-16 grid max-w-lg grid-cols-1 gap-10 mx-auto md:max-w-none md:grid-cols-2 lg:grid-cols-3">
            {/* Left card */}
            <div
              className="relative flex flex-col pt-10"
              style={{
                backgroundColor: "rgba(255, 242, 242, 0.6)",
                boxShadow: "0px 18px 46px 16px rgba(0,0,0,0.25)",
              }}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <img
                  src={avatar1}
                  alt="Nimasha Koralage"
                  className="w-22 h-22 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
              <div className="flex flex-col pt-4 px-6">
                <div className="text-center">
                  <p className="text-[21px] font-bold text-gray-900">
                    Nimasha Koralage
                  </p>
                  <p className="text-[21px] font-bold text-gray-600">Colombo</p>
                </div>
                <div className="flex justify-center">
                  {"★★★★".split("").map((s, i) => (
                    <span key={i} className="text-[#BAC840] text-[23px]">
                      ★
                    </span>
                  ))}
                  <span
                    className="text-[23px]"
                    style={{
                      background:
                        "linear-gradient(90deg, #BAC840 50%, #E8F6E2 50%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ★
                  </span>
                </div>
                <blockquote className="text-[#424743] text-justify text-[21px] font-medium leading-[24px] tracking-[2%]">
                  “The plants arrived fresh and beautiful. I am really happy. I
                  received the plants exactly as I expected. Thank you very much
                  for delivering them exactly as expected.”
                </blockquote>
              </div>
            </div>

            {/* Center card (taller) */}
            <div
              className="relative flex flex-cols shadow-xl bg-[#fff2f2] pt-20 transform scale-105"
              style={{
                backgroundColor: "rgba(255, 242, 242, 0.6)",
                boxShadow: "0px 18px 46px 16px rgba(0,0,0,0.25)",
              }}
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <img src={avatar2} alt="Tharindu Dilshan" className="" />
              </div>
              <div className="flex flex-col justify-between flex-1 p-8 pt-4 pb-6">
                <div className="text-center">
                  <p className="text-[21px] font-bold text-gray-900">
                    Tharindu Dilshan
                  </p>
                  <p className="text-[21px] font-bold text-gray-600">Galle</p>
                </div>
                <div className="flex justify-center">
                  {"★★★★".split("").map((s, i) => (
                    <span key={i} className="text-[#BAC840] text-[23px]">
                      ★
                    </span>
                  ))}
                  <span
                    className="text-[23px]"
                    style={{
                      background:
                        "linear-gradient(90deg, #BAC840 50%, #E8F6E2 50%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ★
                  </span>
                </div>
                <blockquote className="text-[#424743] text-justify text-[21px] font-medium leading-[24px] tracking-[2%]">
                  “Lots of houseplants. Really good choice… very pleasant and a
                  happy start to the day. New life mixed with good ventilation.
                  Incredible beauty.”
                </blockquote>
              </div>
            </div>

            {/* Right card */}
            <div
              className="relative flex flex-col pt-10"
              style={{
                backgroundColor: "rgba(255, 242, 242, 0.6)",
                boxShadow: "0px 18px 46px 16px rgba(0,0,0,0.25)",
              }}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <img
                  src={avatar3}
                  alt="Emma Kahathapititya"
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
              <div className="flex flex-col pt-4 px-6">
                <div className="text-center">
                  <p className="text-[21px] font-bold text-gray-900">
                    Emma Kahathapititya
                  </p>
                  <p className="text-[21px] font-bold text-gray-600">Kandy</p>
                </div>
                <div className="flex justify-center">
                  {"★★★★".split("").map((s, i) => (
                    <span key={i} className="text-[#BAC840] text-[23px]">
                      ★
                    </span>
                  ))}
                  <span
                    className="text-[23px]"
                    style={{
                      background:
                        "linear-gradient(90deg, #BAC840 50%, #E8F6E2 50%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ★
                  </span>
                </div>
                <blockquote className="text-[#424743] text-justify text-[21px] font-medium leading-[24px] tracking-[2%]">
                  “My house has never been better. The ornamental plants I have
                  acquired from your collection have given my house a very
                  unique look. It is absolutely amazing.”
                </blockquote>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10 mb-6 space-x-3">
            <span className="w-3 h-3 bg-[#5C5555] rounded-full"></span>
            <span className="w-3 h-3 bg-[#5C5555] rounded-full"></span>
            <span className="w-3 h-3 bg-[#5C5555] rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
