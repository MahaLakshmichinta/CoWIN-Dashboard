// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props
  return (
    <div className="vaccination-by-age-container">
      <h1 className="heading">Vaccination by age</h1>
      <PieChart height={1000} width={300}>
        <Pie
          data={vaccinationByAgeDetails}
          dataKey="count"
          outerRadius="60%"
          cx="50%"
          cy="30%"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64C2A6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}
export default VaccinationByAge
