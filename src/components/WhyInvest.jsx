import why_invest_img from "../assets/avalousise.jpg";
const WhyInvest = () => {
  return (
    <div className="w-full text-center mx-auto py-16 px-[10%] scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo">Why Invest With Me</h2>

      <p className="font-Ovo text-lg mb-16 mt-4">
        Trusted financial management under Margret Ava Louise
      </p>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* First Container – Image */}
          <div className="w-full lg:w-[38%] mx-auto lg:mx-0 flex justify-center">
            <img
              src={why_invest_img}
              alt="Margret Ava Louise Trading Desk"
              className="
          rounded-3xl shadow-2xl object-cover

          w-[94%] h-[400px]
          sm:w-[90%] sm:h-[520px]
          md:w-[85%] md:h-[620px]
          lg:w-full lg:h-[720px]"
            />
          </div>

          {/* Second Container – Content */}
          <div className="flex-1 w-full">
            <h3 className="font-Ovo text-xl md:text-2xl mb-6">
              Here are key reasons to invest under Margret’s management:
            </h3>

            <ul className="font-Ovo space-y-6 md:space-y-8 leading-relaxed ">
              <li>
                <strong className="block mb-2">Proven Track Record:</strong>
                With 16+ years of hands-on experience in financial markets,
                Margret has a consistent history of navigating volatility and
                generating sustainable returns.
              </li>

              <li>
                <strong className="block mb-2">Crypto Expertise:</strong>
                An early adopter of cryptocurrency with deep understanding of
                blockchain, Bitcoin, Ethereum, and altcoin ecosystems.
              </li>

              <li>
                <strong className="block mb-2">
                  Strategic Investment Approach:
                </strong>
                Combines advanced technical analysis with disciplined risk
                management to optimize portfolio growth.
              </li>

              <li>
                <strong className="block mb-2">
                  Personalized Client Guidance:
                </strong>
                Every investment plan is tailored to individual goals, capital
                size and risk tolerance.
              </li>

              <li>
                <strong className="block mb-2">
                  Integrity and Transparency:
                </strong>
                Responsible investing, clear reporting and honest communication
                remain top priorities.
              </li>

              <li>
                <strong className="block mb-2">Industry Influence:</strong>
                Regular conference speaker and contributor to leading financial
                publications, always ahead of emerging trends.
              </li>
            </ul>

            {/* Centered Caption */}
            <div className="mt-14 text-center">
              <span className="inline-block px-8 py-3 border rounded-full shadow-sm text-sm font-Ovo">
                “Your financial growth is my priority.”
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyInvest;
