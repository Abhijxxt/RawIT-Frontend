import Graph from "../components/graphCard";
import UsersPerMonthAnalyticsPage from "../components/UsersPerMonthAnalytics";

export default function AnalyticsPage() {
    return (
        <div className="bg-white h-screen text-black">
            Analytics Page
            <div className="w-[50%]">
                {/* <Graph /> */}
                <UsersPerMonthAnalyticsPage />
            </div>
        </div>
    )
}