
import React from "react";
import { useSession } from "next-auth/react";
import TitleCard from "~/components/dashboard/TitleCard";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import SmallStatsCard from "~/components/dashboard/SmallStatsCard";
import { BsFillBagFill } from "react-icons/bs";

export const getServerSideProps: GetServerSideProps<{
    statsData: ISmallStatsCardProps[]
  }> = async () => {

    const statsData: ISmallStatsCardProps[] = [
        {
            title: 'Next.js',
            value: "1.9k",
            description: "Number of Users",
            colorIndex: 0,
        },
        {
            title: 'Year',
            value: "2023",
            description: "Number of Users",
            colorIndex: 0,
        },

    ];
    return { props: { statsData } }
}



export default function Dashboard(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
//export default function Dashboard(props:any) {
    //const { data: session } = useSession();
    const { data: session, status } = useSession();
    console.log("props", props);
    const { statsData } = props;
   
    return (
        <>
        <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
        <BsFillBagFill />
        {
            
            statsData.map((d, k) => {
                return (
                    <SmallStatsCard key={k} {...d} colorIndex={k}/>
                )
            })
            
        }
        </div>

        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="space-y-4">
            <TitleCard title="Welcome" topMargin="mt-4">
                <div className="text-xl font-semibold">Hello, {session?.user?.name || 'Guest'}!</div>
            </TitleCard>
            <TitleCard title="Number of Users">
                <div className="text-xl font-semibold">Number of Users: {100}</div>
            </TitleCard>
            <TitleCard title="Favorite Places">
                <div className="text-xl font-semibold">Favorite Places: {5}</div>
            </TitleCard>
            </div>
        </div>
        </>
    );
}

/*

*/