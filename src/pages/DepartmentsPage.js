import React from 'react'
import HeaderComponent from '../component/HeaderComponent'
import FooterCompoentn from '../component/FooterCompoentn'
export default function DepartmentsPage() {
  return (
    <div>
      <HeaderComponent/>
      <div className='Departmentcontainer'>
      <h1>Departments</h1>
      <table>
        <tr>
        <th>Department</th>
        <th>Count</th>
        </tr>
        <tr>
          <td>AIDS</td>
          <td>120</td>
        </tr>
        <tr>
          <td>ECE</td>
          <td>150</td>
        </tr>
        <tr>
          <td>AI&IOT</td>
          <td>110</td>
        </tr>
        <tr>
          <td>Medical Electronic</td>
          <td>100</td>
        </tr>
        <tr>
          <td>BME</td>
          <td>110</td>
        </tr>
        <tr>
          <td>EEE</td>
          <td>90</td>
        </tr>
        <tr>
          <td>MECH</td>
          <td>80</td>
        </tr>
        <tr>
          <td>EIE</td>
          <td>120</td>
        </tr>
        <tr>
          <td>AIML</td>
          <td>140</td>
        </tr>
        <tr>
          <td>AICS</td>
          <td>180</td>
        </tr>
        <tr>
          <td>CSE</td>
          <td>135</td>
        </tr>
      </table>
    </div>
      <FooterCompoentn/>
    </div>
  )
}
