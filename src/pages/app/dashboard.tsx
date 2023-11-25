
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
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
      title: "Numero de Usuarios",
      value: "1.9k",
      description: "Usuarios Registrados",
      colorIndex: 0,
    },
    {
      title: "Año",
      value: "2023",
      description: "Año Actual",
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
  const { data: sessionData } = useSession(); 
  console.log("props", props);
  const { statsData } = props;

  return (
    <AppLayout pageTitle="CoinSpotter">
        {sessionData?.user && 
      <div className="grid">
        <div className="m-4 rounded-3xl bg-slate-100">
          <ul className="m-6 flex flex-row justify-between text-center align-middle text-black md:justify-evenly">
            <li className="cursor-pointer">Usuarios</li>
            <li className="cursor-pointer">Lugares</li>
            <li className="cursor-pointer">Estadísticas</li>
            <li className="cursor-pointer">Favoritos</li>
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
                Hola, {session?.user?.name || "Invitado"}!
              </div>
            </TitleCard>
          </div>
          <div className="col-span-1 mt-10">
            <TitleCard title="Number of Users">
              <div className="text-lg font-semibold">
                Número de Usuarios: {100}
              </div>
            </TitleCard>
          </div>
          <div className="col-span-1 mt-10">
            <TitleCard title="Lugares Favoritos">
              <div className="text-lg font-semibold">
                Lugares Favoritos: {5}
              </div>
            </TitleCard>
          </div>
        </div>
      </div>
      </div>
        }
    </AppLayout>
  );
}

/*

*/