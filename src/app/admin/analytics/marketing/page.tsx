import React from 'react';
// import UserMap from '@/components/dashboard/UserMap';
import OverviewCountry from '@/components/dashboard/OverviewCountry';
import DashboardSeparator from '@/components/analytics/DashboardSeparator';
import { tutorData, studentData } from '@/data/constant';
import MarketingCard from '@/components/analytics/MarketingCard';
import PieChart from '@/components/analytics/PieChart';


const page = () => {
  return (
    <div>
      <section>
        <div>headers</div>
        <div>
          {/* <UserMap/> */}
          <DashboardSeparator className="my-4" height="4px" />
          <div>
            <OverviewCountry role={"Students"} data={studentData} />
            <OverviewCountry role={"Tutors"} data={tutorData} />
          </div>
        </div>

      </section>

      <div className="mt-4 flex justify-between py-2 px-2 ">
        <h3 className="text-bold">Key Performance Indicators(KPIs) </h3>
        <div>
          {/* change this button to input later */}
          <p>View <button className="cursor-pointer">all time</button></p>
        </div>
        </div>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <MarketingCard number={"50000"} title={"Total Reach"}  />
          <MarketingCard number={"1200"} title={"conversions"}/>
          <MarketingCard number={"$5000"} title={"Marketing Spend"}/>
          <MarketingCard number={"240%"} title={"ROI"} />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <PieChart />
        <PieChart />
        <PieChart />
      </section>
    </div>
  )
}

export default page