
import React from "react"

import { BarChart } from 'react-charts-d3';

  let Bardata = [
    { key: 'Fruits', values: [] }
  ];

const Histogram = ({ data }) => {
    const entries = Object.entries(data)
    const barEntry = Object.values(Bardata.values)

    for (const key of entries) {
      var entry = {x:key[0], y:key[1]};
      barEntry.push(entry)
    }

    Bardata[0].values = barEntry
    Bardata = Object.values(Bardata)

    return (
        <div id = "barchart">
            <BarChart data={Bardata} />
        </div>
    )
}

export default Histogram
