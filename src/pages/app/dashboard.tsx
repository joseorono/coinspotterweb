
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
      <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <BsFillBagFill />
        {statsData.map((d, k) => {
          return <SmallStatsCard key={k} {...d} colorIndex={k} />;
        })}
      </div>

      <div className="flex items-center justify-center">
        <div className="mb-10 flex min-w-[992px] flex-row gap-4 space-y-4">
          <div className="mt-6 w-[20%]">
            <TitleCard title="Welcome" topMargin="mt-4">
              <div className="text-lg font-semibold">
                Hello, {session?.user?.name || "Guest"}!
              </div>
            </TitleCard>
          </div>
          <div className="mt-10 w-[30%]">
            <TitleCard title="Number of Users">
              <div className="text-lg font-semibold">
                Number of Users: {100}
              </div>
            </TitleCard>
          </div>
          <div className="mt-10 w-[40%]">
            <TitleCard title="Favorite Places">
              <div className="text-lg font-semibold">Favorite Places: {5}</div>
            </TitleCard>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

/*

*/