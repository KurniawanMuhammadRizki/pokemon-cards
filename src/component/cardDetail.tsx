import healthBarImg from "../assets/Rectangle 63.png";
import barImg from "../assets/Vector 23.png";

interface CardDetailProps {
  health: number;
  attack: number;
  defence: number;
}
const CardDetail: React.FC<CardDetailProps> = ({ health, attack, defence }) => {
  return (
    <div className="bg-card-detail mb-20 mx-6 rounded-lg px-4 pt-4 pb-2">
      <div className="font-DM-sans text-search-color text-base font-normal">
        Health
      </div>
      <img className="mt-1" src={healthBarImg} alt="" />
      <div className="flex flex-row gap-2 content-center">
        <div className="text-font-white font-DM-sans font-bold text-2xl ">
          {health}
        </div>
        <div className="text-font-white font-DM-sans text-base font-normal">
          from 1000
        </div>
      </div>
      <img className="mt2 mb-4" src={barImg} alt="" />
      <div className="grid grid-cols-2 mt-4">
        <div className="flex flex-col">
          <div className="text-search-color font-DM-sans text-base font-normal">
            Attack
          </div>
          <div className="text-font-white font-DM-sans font-bold text-2xl ">
            {attack}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-search-color font-DM-sans text-base font-normal">
            Defence
          </div>
          <div className="text-font-white font-DM-sans font-bold text-2xl ">
            {defence}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardDetail;
