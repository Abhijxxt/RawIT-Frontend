"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function UsersPerMonthAnalyticsPage() {

    
    const options = {
        responsive: true,
        plugins: {
        legend: { position: "top" as const },
        title: { display: true, text: "Monthly Sales" },
        },
    }

    const [labels, setLabels] = useState([])
    const [dataPoints, setDataPoints] = useState([])

    const getUsersPerMonthData = async () => {
        const response = await fetch("/api/analytics/UsersPerMonth")
        const data = await response.json()
        const months = data.map((item: {month: string}) => item.month)
        const usersCreated = data.map((item: {users_created: number}) => item.users_created)
        setLabels(months)
        setDataPoints(usersCreated)
    }

    useEffect(() => {getUsersPerMonthData()},[])

    const data = {
            labels: labels,
            datasets: [
            {
                label: "Users",
                data: dataPoints,
                backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
        ],   
    }

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    )
}