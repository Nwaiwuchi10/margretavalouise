import user_image from "../assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>

      <h2 className="text-center text-5xl font-Ovo">About Me</h2>

      <div className="max-w-7xl mx-auto">
        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
          {/* Image Section – Original Big Responsive Style */}
          <div className="w-full lg:w-[38%] mx-auto lg:mx-0 flex justify-center">
            <img
              src={user_image}
              alt="Margret Ava Louise Trading Desk"
              className="
                   rounded-3xl shadow-2xl object-cover
         
                   w-[94%] h-[400px]
                   sm:w-[90%] sm:h-[520px]
                   md:w-[85%] md:h-[620px]
                   lg:w-full lg:h-[720px]"
            />
          </div>

          {/* Text Content – Back to Original Fonts */}
          <div className="flex-1 text-left">
            <p className="mb-10 max-w-2xl font-Ovo">
              With over 17 years of experience in the financial markets, Margret
              Ava Louise has established herself as a renowned crypto trading
              expert. At 53 years old, she has spent the better part of two
              decades honing her skills and building a reputation for astute
              market insights and strategic trading approaches.
              <br />
              <br />
              Margret’s journey into trading began in the early 2000s, where she
              quickly developed a passion for technical analysis and risk
              management. As cryptocurrency emerged, she was among the early
              adopters who recognized blockchain technology’s potential to
              disrupt traditional finance.
              <br />
              <br />
              Over the years, Margret has worked with institutional clients,
              hedge funds, and private investors, providing expert guidance on
              crypto market trends, trading strategies, and portfolio
              management. Her expertise spans major assets including Bitcoin,
              Ethereum, and selected altcoins.
              <br />
              <br />
              A sought-after international conference speaker, Margret is known
              for her ability to simplify complex financial concepts into
              actionable intelligence. She holds a degree in Economics and
              Finance and remains an active contributor to industry
              publications.
              <br />
              <br />A devoted Christian, Margret credits her faith with guiding
              her approach to both trading and life.
            </p>

            {/* Skill Badges – Unchanged */}
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 rounded-full border shadow-sm text-sm">
                Technical Analysis
              </span>
              <span className="px-4 py-2 rounded-full border shadow-sm text-sm">
                Crypto Markets
              </span>
              <span className="px-4 py-2 rounded-full border shadow-sm text-sm">
                Risk Management
              </span>
              <span className="px-4 py-2 rounded-full border shadow-sm text-sm">
                Portfolio Strategy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
