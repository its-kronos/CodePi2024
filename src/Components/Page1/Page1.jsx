import CheckInScreen_func from "../CheckInScreen"
import get_data from "../../Utils/get_data"
import { Chart as ChartJS,defaults} from 'chart.js/auto'
import { Line , Bar, Chart} from "react-chartjs-2"
import { useState } from "react"

//<Chart type=""></Chart>

defaults.responsive = true

let data= get_data()



let ppy_chart_Xlabels = []
let ppy_chart_dataset = []

for (const [k,v] of Object.entries(data["planets_py"])){
  if (!(k in ppy_chart_Xlabels)){
    ppy_chart_Xlabels.push(k);
    ppy_chart_dataset.push(v);
  }
}

let ppy_chart_title = "Planets Discovered"



let dpy_chart_Xlabels = []
let dpy_chart_dataset = []

for (const [k,v] of Object.entries(data["dis_avr_py"])){
  if (!(k in dpy_chart_Xlabels)){
    dpy_chart_Xlabels.push(k);
    dpy_chart_dataset.push(v);
  }
}

let dpy_chart_title = "Average Distance from Earth (parsecs)"


let disc_chart_Xlabels = []
let disc_chart_dataset = []

for (const [k,v] of Object.entries(data["disc_mthd_ct"])){
  if (!(k in disc_chart_Xlabels)){
    disc_chart_Xlabels.push(k);
    disc_chart_dataset.push(v);
  }
}

let disc_chart_title = "Planets Discovered"


let transit_chart_Xlabels = []
let transit_chart_dataset = []

for (const [k,v] of Object.entries(data["transit_py"])){
  if (!(k in transit_chart_Xlabels)){
    transit_chart_Xlabels.push(k);
    transit_chart_dataset.push(v);
  }
}

let transit_chart_title = "Planets Discovered"

function Page1(){
  const [chartData,setChartData] = useState(ppy_chart_dataset)
  const [chartXLabels,setChartXLabels] = useState(ppy_chart_Xlabels)
  const [chartTitle,setchartTitle] = useState(ppy_chart_title)
  const [chartType,setChartType] = useState("line")
    return (<div><center>
        <h1>Lorem ipsum dolor set amet</h1>
        <CheckInScreen_func>
          <p className='Explaining_Text'>Lorem ipsum odor amet, 
          consectetuer adipiscing elit. Tristique nisl ultricies 
          nulla suscipit mauris sed curabitur blandit. Purus 
          elementum natoque dictum nullam sed integer. Viverra 
          arcu felis, morbi lacinia habitant maecenas. 
          Ut venenatis sociosqu elementum phasellus sociosqu 
          quisque maximus convallis.</p>
          </CheckInScreen_func>
          <CheckInScreen_func>
            <p className='Explaining_Text'>Lorem ipsum odor amet, 
          consectetuer adipiscing elit. Tristique nisl ultricies 
          nulla suscipit mauris sed curabitur blandit. </p>
          </CheckInScreen_func>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
      </center>
      <center>
      <CheckInScreen_func>
            <button className="chart_change_btn" onClick={function(){

            setChartType("line")
            setChartData(ppy_chart_dataset)
            setChartXLabels(ppy_chart_Xlabels)
            setchartTitle(ppy_chart_title)
            
            }}>Planets Disovered per Year</button>

            <button className="chart_change_btn" onClick={function(){

            setChartType("line") 
            setChartData(dpy_chart_dataset)
            setChartXLabels(dpy_chart_Xlabels)
            setchartTitle(dpy_chart_title)

            }}>Average Distance of Planets per Year</button>

            <button className="chart_change_btn" onClick={function(){

            setChartType("bar")
            setChartData(disc_chart_dataset)
            setChartXLabels(disc_chart_Xlabels)
            setchartTitle(disc_chart_title)

            }}>Planets Discovered by Discover Method</button>

            <button className="chart_change_btn" onClick={function(){

            setChartType("line")
            setChartData(transit_chart_dataset)
            setChartXLabels(transit_chart_Xlabels)
            setchartTitle(transit_chart_title)

            }}>Planets Discovered by Transit per Year</button>
                      </CheckInScreen_func>
          <CheckInScreen_func>
            <div className="chart_container">
            <Chart type={chartType} data={{
              labels: chartXLabels,
              datasets: [{
                label: chartTitle,
                data: chartData
              }],
            }}/>
            </div>
            </CheckInScreen_func>
      </center>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <a>hi</a>
      </div>
      )
}

export default Page1