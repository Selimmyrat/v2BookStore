import volt from "../../assets/images/volt.svg";
import shield from "../../assets/images/shield.svg";
import like from "../../assets/images/like.svg";
import stars from "../../assets/images/stars.svg";

export default function AboutUs() {
  return (
    <div className="container mx-auto mt-24">
      <div className="flex flex-row gap-4 mb-10 sm:flex-wrap lg:flex-nowrap sm:justify-center">
        <div className="group flex flex-row items-center hover:bg-purple-100 rounded-lg p-4">
          <div className="min-w-12 min-h-12 flex items-center justify-center rounded-lg mr-6 bg-purple-100 group-hover:bg-white">
            <img className="w-8 h-8" src={volt} width="" alt="" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-base font-semibold">Quick Delivery</h2>
            <p className="text-gray-400 text-sm mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="group flex flex-row items-center hover:bg-purple-100 rounded-lg p-4">
          <div className="min-w-12 min-h-12 flex items-center justify-center rounded-lg mr-6 bg-purple-100 group-hover:bg-white">
            <img className="w-8 h-8" src={shield} width="" alt="" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-base font-semibold">Secure Payment</h2>
            <p className="text-gray-400 text-sm mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="group flex flex-row items-center hover:bg-purple-100 rounded-lg p-4">
          <div className="min-w-12 min-h-12 flex items-center justify-center rounded-lg mr-6 bg-purple-100 group-hover:bg-white">
            <img className="w-8 h-8" src={like} width="" alt="" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-base font-semibold">Best Quality</h2>
            <p className="text-gray-400 text-sm mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="group flex flex-row items-center hover:bg-purple-100 rounded-lg p-4">
          <div className="min-w-12 min-h-12 flex items-center justify-center rounded-lg mr-6 bg-purple-100 group-hover:bg-white">
            <img className="w-8 h-8" src={stars} width="" alt="" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-base font-semibold">Return Guarantee</h2>
            <p className="text-gray-400 text-sm mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
