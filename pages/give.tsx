import Image from "next/image";
import GiveBanner from "../photos/give.svg";
import dollarCoin from "../photos/dollar-coin.png";
import shortHandLogo from "../photos/shortHandLogo.svg";
import bubble from "../photos/messageBubble.svg";
import { Navbar } from "../components/Navbar";

const Give = () => {
  return (
    <div className="giveContainer">
      <div className="giveBanner">
        <Image src={GiveBanner} alt="give banner" />
        <h1>GIVING</h1>
      </div>
      <section className="giveWhy">
        <h2>Why We Give</h2>
        <p>
          Remember this: Whoever sows sparingly will also reap sparingly, and
          whoever sows generously will also reap generously. Each of you should
          give what you have decided in your heart to give, not reluctantly or
          under compulsion, for God loves a cheerful giver. <br /> 2 Corinthians
          9:6-8
        </p>
      </section>
      <section className="giveOnline">
        <h2>Give Online</h2>
        <p>
          Simple and secure. Give a single gift, or schedule recurring giving
          using your checking account, debit, or credit card.
        </p>
        <button>
          <div className="dollarCoinImgDiv">
            <Image src={dollarCoin} alt="dollar coin" />
          </div>
          Give Online
        </button>
      </section>
      <section className="inPersonGive">
        <h2>In Person</h2>
        <p>
          You can give in person at church. Before, During, or After service on
          Wednesday, or Sunday just Talk with a team member!{" "}
        </p>
        <Image src={shortHandLogo} alt="short-hand logo" />
      </section>
      <section className="textToGive">
        <div>
          <h2>Text To Give</h2>
          <p>*Currently only available in the US</p>
        </div>
        <div className="textToGiveBottom">
          <div className="textToGiveBottomLeft">
            <div className="messageBubble">
              <Image src={bubble} alt="" />
            </div>
            <p>
              Text <b>Give</b> and the <b>AMOUNT</b> to (833)904-3132 (example
              GIVE 200).{" "}
            </p>
          </div>
          <div className="textToGiveBottomRight">
            <h6>
              Smart Giving uses industry-leading security to protect your
              personal information,and is never charged to your phone bill.
              Currently only available in the US.
            </h6>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Give;
