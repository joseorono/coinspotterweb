
import React from "react";
import { useSession } from "next-auth/react";
import TitleCard from "~/components/dashboard/TitleCard";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import SmallStatsCard from "~/components/dashboard/SmallStatsCard";



export const getServerSideProps: GetServerSideProps<{
    statsData: ISmallStatsCardProps
  }> = async () => {
    /*
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    */
    const repo = {name: 'test'}
    return { props: { repo } }
}


export default function Dashboard() {
    //const { data: session } = useSession();
    const { data: session, status } = useSession();

    return (
        <>

        <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
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