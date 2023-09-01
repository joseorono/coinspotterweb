
interface ISmallStatsCardProps {
    title: string,
    icon: React.ReactNode,
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
    useHomePageHeader?: boolean,
}

