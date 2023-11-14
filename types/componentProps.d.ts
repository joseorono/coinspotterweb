
interface ISmallStatsCardProps {
    title: string,
    icon?: React.ReactNode,
    value: string,
    description: string,
    colorIndex: number,
}

interface ILayoutComponentProps {
    pageTitle: string,
    pageDescription?: string,
    children?: ReactNode
}

interface IPageLayoutComponentProps extends ILayoutComponentProps {
    includeHero?: boolean,
    useHomePageHeader?: boolean,
}

interface ILandingHeroProps {
    heading: string,
    message: string
} 

interface GoogleMapEmbedProps {
    width?: number;
    height?: number;
    locationQuery?: string;
    latitude?: number | string;
    longitude?: number | string;
    className?: string;
}