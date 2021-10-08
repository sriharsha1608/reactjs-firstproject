import ChartBar from "./ChartBar";

import './Chart.css';

const Chart = (props) =>{
    const dataPointValues = props.datapoints.map(datapoint => datapoint.value);
    const totalMaximum = Math.max(...dataPointValues); 
    return (<div className='chart'>
        {props.datapoints.map(data => <ChartBar key={data.label} value={data.value} label={data.label} maxValue={totalMaximum} />)}
    </div>
    );
};



export default Chart;