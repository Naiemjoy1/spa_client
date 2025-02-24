import crd1 from "../../../assets/Images/card/crd1.jpg";
import crd2 from "../../../assets/Images/card/crd2.jpg";
import crd3 from "../../../assets/Images/card/crd3.jpg";

const Cards = () => {
  return (
    <div className="container mx-auto space-y-4">
      <div className="flex items-center justify-center text-center">
        <div>
          <p className="text-lg font-semibold">Welcome to Our</p>
          <p className="text-2xl font-bold">Massage Therapy Center</p>
          <p className="max-w-md mt-2 text-gray-600">
            You deserve better than a rushed massage by a rookie therapist in a
            place that makes you feel more stressed.
          </p>
        </div>
      </div>
      <div className="container mx-auto flex justify-center gap-6">
        <div className="w-1/3">
          <img
            src={crd1}
            alt="Card 1"
            className="w-full h-auto object-cover aspect-[4/3] shadow-2xl border-8 border-white"
          />
        </div>

        <div className="w-1/3">
          <img
            src={crd2}
            alt="Card 2"
            className="w-full h-auto object-cover aspect-[4/3] shadow-2xl border-8 border-white"
          />
        </div>
        <div className="w-1/3">
          <img
            src={crd3}
            alt="Card 3"
            className="w-full h-auto object-cover aspect-[4/3] shadow-2xl border-8 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
