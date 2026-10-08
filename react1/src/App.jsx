import React from 'react'
import Card from './Companenets/Card'

const App = () => {
  const data = [
    {
      name: "Net August 2026",
      data: "Aug 5,2026-Dec 5,2026",
      but: "Profsouz",
      but1: "7/7",
      student: "Student",
      but2: "0/7",
      quali:"Quali",
      but3: "Journal",
      month: "Mn,Tu,Wd,Th,Fr,Sa",
      cloc: "4 months (16:00-18:00)",
      ico:" ✈️📝"
    },
    {
      name: "Html-july-kids 1",
      data: "Jul 10,2026-Nov 10,2026",
      but: "Profsouz",
      but1: "8/10",
      student: "Student",
      but2: "3/8",
      quali:"Quali",
      but3: "Journal",
      month: "Mn,Wd,Fr",
      cloc: "4 months (16:30-18:00)",
      ico:" ✈️📝"
    }
  ]

  return (
    <div className="cards">
      {data.map((e, index) => (
        <Card key={index} {...e} />
      ))}
    </div>
  )
}

export default App
