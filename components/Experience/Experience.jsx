"use client"
import React from "react";
import { motion } from "framer-motion";
import TrouveTavoie from "./Descriptions/TrouveTavoie";
import FeverTokens from "./Descriptions/FeverTokens";
import IdealFresh from "./Descriptions/IdealFresh";
import AdvancedAgroManagement from "./Descriptions/AdvancedAgroManagement";
import Fantasia from "./Descriptions/Fantasia";
import SuperBerry from "./Descriptions/SuperBerry";
import EnsVision from "./Descriptions/EnsVision";
import { Waypoints } from '..';

const experience ="< Experience />"
export default function WhereIHaveWorked() {
  const GetDescription = () => {
    switch (DescriptionJob) {
      case "ENSVision":
        return <EnsVision />;
      case "TrouveTavoie":
        return <TrouveTavoie />;
      case "FeverTokens":
        return <FeverTokens />;
      case "IdealFresh":
        return <IdealFresh />;
      case "Advanced Agro Management":
        return <AdvancedAgroManagement />;
      case "Fantasia":
        return <Fantasia />;
      case "SuperBerry":
        return <SuperBerry />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState("ENSVision");
  
  return (
		<div className="bg-primary-background">
			
			<Waypoints target={"toexperience"}>
				<div
					className="flex flex-col items-center justify-center py-24 space-y-12 bg-primary-background"
					id="experience"
				>
					<section className="flex flex-col items-center " data-aos="fade-up">
						<span className="px-3 text-lg font-bold tracking-wider text-white opacity-85 md:text-2xl">
							{experience}
						</span>
						<div
							className="bg-primary-text w-[200px] h-[5px]"
							data-aos="fade-up"
							data-aos-duration="1000"
						></div>
					</section>
					<section
						data-aos="fade-up"
						className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 md:justify-center md:items-start "
					>
						<CompaniesBar setDescriptionJob={setDescriptionJob} />
						{GetDescription()}
					</section>
				</div>
			</Waypoints>
			
		</div>
	);
}

const CompaniesBar = props => {
  const [barAbovePosition, setBarAbovePosition] = React.useState(0);
  const [companyNameBackgroundColorGold, setCompanyNameBackgroundColorGold]= React.useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const CompanyButton = props => {
    return (
			<button
				onClick={() => {
					setBarAbovePosition(props.BarAvobePosition);
					props.setDescriptionJob(props.DescriptionJob);
					setCompanyNameBackgroundColorGold(
						props.CompanyNameBackgroundColorGold
					);
				}}
				className={`flex-none sm:text-sm text-xs text-white/90 font-medium text-center md:text-left  hover:text-secondary-text hover:bg-color-grey rounded  py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500 ${
					companyNameBackgroundColorGold[
						props.ButtonOrderOfcompanyNameBackgroundColorGold
					] && "bg-primary-text/80 text-white"
				}`}
			>
				{props.CompanyName}
			</button>
		);
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className="flex flex-col items-start justify-start w-screen pb-4 overflow-auto md:flex-row lg:w-auto scrollbar-hide md:overflow-hidden md:pb-0 sm:justify-center sm:items-center"
    >
      {/* // ? left bar Holder */}
      {/* // ? Companies name as buttons */}
      <div className="flex flex-col order-1 pl-8 space-y-1 md:order-2 md:pl-0 ">
        <div className="flex flex-row md:flex-col">
        <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGold={0}
            CompanyName="ENS Vision"
            BarAvobePosition={1}
            DescriptionJob="ENSVision"
            CompanyNameBackgroundColorGold={[true,false, false, false, false, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGold={1}
            CompanyName="TrouveTavoie"
            BarAvobePosition={129}
            DescriptionJob="TrouveTavoie"
            CompanyNameBackgroundColorGold={[false,true, false, false, false, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGold={2}
            CompanyName="FeverTokens"
            BarAvobePosition={257}
            DescriptionJob="FeverTokens"
            CompanyNameBackgroundColorGold={[false,false, true, false, false, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGold={3}
            CompanyName="IdealFresh"
            BarAvobePosition={385}
            DescriptionJob="IdealFresh"
            CompanyNameBackgroundColorGold={[false, false, false, true, false, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGold={4}
            CompanyName="SuperBerry"
            BarAvobePosition={513}
            DescriptionJob="SuperBerry"
            CompanyNameBackgroundColorGold={[false, false, false, false, true, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGold={5}
            CompanyName="AA Management"
            BarAvobePosition={641}
            DescriptionJob="Advanced Agro Management"
            CompanyNameBackgroundColorGold={[false, false, false, false, false, true]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGold={6}
            CompanyName="Fantasia SME"
            BarAvobePosition={769}
            DescriptionJob="Fantasia"
            CompanyNameBackgroundColorGold={[false, false, false, false, false, false, true]}
            setDescriptionJob={props.setDescriptionJob}
          />
        </div>
        <div className="block md:hidden h-0.5 rounded bg-gray-500 " >
          <motion.div animate={{ x: barAbovePosition }} className="w-[128px] h-0.5 rounded bg-primary-text"></motion.div>
        </div>
      </div>
    </div>
  );
};
