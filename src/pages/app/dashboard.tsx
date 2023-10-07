
import React from "react";
import { useSession } from "next-auth/react";
import TitleCard from "~/components/dashboard/TitleCard";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import SmallStatsCard from "~/components/dashboard/SmallStatsCard";
import { BsFillBagFill } from "react-icons/bs";
import AppLayout from "~/components/layout/AppLayout";

export const getServerSideProps: GetServerSideProps<{
  statsData: ISmallStatsCardProps[];
}> = async () => {
  const statsData: ISmallStatsCardProps[] = [
    {
      title: "Next.js",
      value: "1.9k",
      description: "Number of Users",
      colorIndex: 0,
    },
    {
      title: "Year",
      value: "2023",
      description: "Number of Users",
      colorIndex: 0,
    },
  ];
  return { props: { statsData } };
};

export default function Dashboard(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  //export default function Dashboard(props:any) {
  //const { data: session } = useSession();
  const { data: session, status } = useSession();
  console.log("props", props);
  const { statsData } = props;

  return (
    <AppLayout pageTitle="CoinSpotter">
      <div className="grid">
        <div className="m-4 rounded-3xl bg-slate-100">
          <ul className="m-6 flex flex-row justify-between text-center align-middle text-black md:justify-evenly">
            <li className="cursor-pointer">Users</li>
            <li className="cursor-pointer">Places</li>
            <li className="cursor-pointer">Stats</li>
            <li className="cursor-pointer">Favorites</li>
          </ul>
        </div>
        <div className="dashboardContent">
          <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <BsFillBagFill />
            {statsData.map((d, k) => {
              return <SmallStatsCard key={k} {...d} colorIndex={k} />;
            })}
          </div>

          <div className="mb-10 grid place-content-center gap-4 space-y-4 md:flex md:flex-row">
            <div className="col-span-1 mt-6">
              <TitleCard title="Welcome" topMargin="mt-4">
                <div className="text-lg font-semibold">
                  Hello, {session?.user?.name || "Guest"}!
                </div>
              </TitleCard>
            </div>
            <div className="col-span-1 mt-10">
              <TitleCard title="Number of Users">
                <div className="text-lg font-semibold">
                  Number of Users: {100}
                </div>
              </TitleCard>
            </div>
            <div className="col-span-1 mt-10">
              <TitleCard title="Favorite Places">
                <div className="text-lg font-semibold">
                  Favorite Places: {5}
                </div>
              </TitleCard>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

/*

*/