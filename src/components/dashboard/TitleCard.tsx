

interface ITitleCardProps {
    title: string;
    children: React.ReactNode | React.ReactNode[];
    topMargin?: string;
    TopSideButtons?: React.ReactNode | React.ReactNode[] | null;
}

function TitleCard({title, children, topMargin = "", TopSideButtons = null}: ITitleCardProps) {
    const titleClasses: string = "text-xl text-base-100 font-semibold mb-1" + (TopSideButtons ? "inline-block" : "");
    return (
      <div
        className={
          "card w-full bg-base-100 p-6 shadow-xl  " + (topMargin || "mt-6")
        }
      >
        {/* Title for Card */}
        <div className={titleClasses}>
          {title}
          {/* Only show buttons if they're passed */}
          {TopSideButtons && (
            <div className="float-right inline-block">{TopSideButtons}</div>
          )}
        </div>

        <div className="divider mt-2"></div>

        {/** Card Body */}
        <div className="h-full w-full rounded-md bg-base-100 p-3">
          {children}
        </div>
      </div>
    );
}
  
  
  export default TitleCard
