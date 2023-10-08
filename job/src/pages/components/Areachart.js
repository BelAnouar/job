import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"










const AreaChart=({data})=>{
    return(<ResponsiveContainer width="100%" height={300}>
        <BarChart data={3} margin={{top:50}}>
            <CartesianGrid strokeDasharray={"10 10"}/>
            <XAxis dataKey={"date"}/>
            <YAxis allowDecimals={false}/>
            <Tooltip/>
            <Bar dataKey={"count"} fill="#2cb1bc" barSize={75}/>
        </BarChart>
    </ResponsiveContainer>)
}



export default AreaChart
