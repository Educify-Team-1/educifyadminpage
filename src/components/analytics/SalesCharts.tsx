import React from 'react'

const SalesCharts = () => {
  return (
    <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-2">
                <p>Revenue Analytics </p>
                <div className="flex flex-row gap-2">
                    <h4>$415,250</h4>
                    <div className="bg-green-300 rounded-[20px] h-[] w-[]">
                        +23.40% {/* icon should be here */}
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly items-center gap-2">
                {/* not really necessary to create labels yourself, it will  most likely accompany the library, remove this code when needed */}
                <p> <div className="rounded-full h-[4px] w-[4px] bg-blue-800"></div> Income</p>
                <p> <div className="rouned-full h-[4px] w-[4px] bg-yellow-700"></div> Expense</p>
                <button className="cursor-pointer"> {/*icon should here */} Jan 2024 - Jun 2024</button>
            </div>
        </div>
        {/* this one displays the map*/}
        <div></div>
    </div>
  )
}

export default SalesCharts