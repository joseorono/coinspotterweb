// when you use IconType, then the linter complains about "IconType not assignable to ReactNode"
// import { IconType } from "react-icons";

import { FaUserAlt } from "react-icons/fa";

interface ISmallStatsCardProps {
    title: string,
    icon: React.ReactNode,
    value: string,
    description: string,
    colorIndex: number,
}

function SmallStatsCard({
    title,
    icon = <FaUserAlt />,
    value = "0",
    description = "",
    colorIndex = 0,
}: ISmallStatsCardProps){

    const COLORS = ["primary", "primary"]

    const getDescStyle = (description: string) => {
        if(description.includes("↗︎"))return "font-bold text-green-700 dark:text-green-300"
        else if(description.includes("↙"))return "font-bold text-rose-500 dark:text-red-400"
        else return ""
    }

    return(
        <div className="stats shadow">
            <div className="stat">
                <div className={`stat-figure dark:text-slate-300 text-${COLORS[colorIndex%2]}`}>{icon}</div>
                <div className="stat-title dark:text-slate-300">{title}</div>
                <div className={`stat-value dark:text-slate-300 text-${COLORS[colorIndex%2]}`}>{value}</div>
                <div className={"stat-desc  " + getDescStyle(description)}>{description}</div>
            </div>
        </div>
    )
}

export default SmallStatsCard