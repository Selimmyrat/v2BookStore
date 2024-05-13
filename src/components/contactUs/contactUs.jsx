export default function ContactUs() {
  return (
    <div className="container mx-auto bg-violet-500 w-full h-60 my-24 rounded-3xl flex items-center justify-center text-white text-2xl">
      <div className="text-center">
        <h2>
          Subscribe our newsletter for newest <br /> books updates
        </h2>
        <div className="flex flex-row mt-10 ">
          <input
            className="basis-9 focus-visible:border-none text-white focus:outline-none placeholder:text-white text-sm bg-violet-400 rounded-l-xl py-2.5 px-8"
            type="email"
            name="email"
            placeholder="Type your email here"
          />
          <button className="basis-3 rounded-r-lg text-black text-base bg-white py-2.5 px-6">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
