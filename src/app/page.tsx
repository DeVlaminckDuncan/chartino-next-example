'use client';

import styles from './page.module.css'
import { useEffect } from 'react';
import { ChartLine, LineChart, LineData } from 'chartino';

const dataOne: LineData = {
  1672502400000: 5, // September 1, 2023
  1672588800000: 10, // September 2, 2023
  1672675200000: 13, // September 3, 2023
  1672761600000: 9, // September 4, 2023
  1672848000000: 4, // September 5, 2023
};

const dataTwo: LineData = {
  1672502400000: -15, // September 1, 2023
  1672588800000: 8, // September 2, 2023
  1672675200000: 6, // September 3, 2023
  1672761600000: -7, // September 4, 2023
  1672848000000: 20, // September 5, 2023
};

const lineChart = new LineChart('chart'); // 'chart' points to a div with chart as id.
const chartLineOne = new ChartLine(dataOne);
const chartLineTwo = new ChartLine(dataTwo);
chartLineOne.color = '#FF0000'; // color red
chartLineTwo.color = '#008000'; // color green
lineChart.addChartLine(chartLineOne).addChartLine(chartLineTwo);

export default function Home() {
  useEffect(() => {
    lineChart.draw();
  }, []);
  

  return (
    <div id='chart' className={styles.chart}></div>
  )
}
