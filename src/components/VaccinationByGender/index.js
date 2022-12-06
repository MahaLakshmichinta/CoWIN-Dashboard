// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderDetails} = props
  return (
    <div className="vaccination-gender-container">
      <h1 className="heading-gender">Vaccination by gender</h1>
      <PieChart height={1000} width={300}>
        <Pie
          cx="50%"
          data={vaccinationByGenderDetails}
          cy="60%"
          innerRadius="30%"
          outerRadius="60%"
          startAngle={180}
          endAngle={0}
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontFamily: 'Roboto', fontSize: 12}}
        />
      </PieChart>
    </div>
  )
}
export default VaccinationByGender
