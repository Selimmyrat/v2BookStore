import { useState } from "react"

export default function Filter() {
  const [accordionOpen, setAccordionOpen] = useState();
  return <div className="basis-3/12 mr-5">
  <div className="w-full">
    <h1 className="text-3xl mb-10">Filter Option</h1>
    <div className="bg-white border rounded-xl mt-2 p-3">
      <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full">
        <h1>Categories</h1>
        {accordionOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${accordionOpen ? "block mt-3 border-t" : "hidden"}`}>
        <ul className="mt-2">
          {/* {categories.map((n, index) => (
            <Categories key={index} categories_name={n.name} />
          ))} */}
        </ul>
      </div>
    </div>
  </div>
</div>
}