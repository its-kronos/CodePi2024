import CheckInScreen_func from "../CheckInScreen"
import get_data from "../../Utils/get_data"
import { Chart as ChartJS,defaults, layouts} from 'chart.js/auto'
import { Line } from "react-chartjs-2"
import { useState } from "react"

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

let ppy_chart_title = "Planets discovered"



let dpy_chart_Xlabels = []
let dpy_chart_dataset = []

for (const [k,v] of Object.entries(data["dis_avr_py"])){
  if (!(k in dpy_chart_Xlabels)){
    dpy_chart_Xlabels.push(k);
    dpy_chart_dataset.push(v);
  }
}

let dpy_chart_title = "Average Distance from Earth (parsecs)"

let test = {pain:"pain",
  truth: "truth",
}

function Page1(){
  const [chartData,setChartData] = useState(dpy_chart_dataset)
  const [chartXLabels,setChartXLabels] = useState(dpy_chart_Xlabels)
  const [chartTitle,setchartTitle] = useState(dpy_chart_title)
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
      <br/><br/><br/>
      
      </center>
      <center>
      <CheckInScreen_func>
            <button onClick={function(){

            setChartData(ppy_chart_dataset)
            setChartXLabels(ppy_chart_Xlabels)
            setchartTitle(ppy_chart_title)
            
            }}>Test1</button>
          </CheckInScreen_func>
          <CheckInScreen_func>
            <div className="chart_container">
            <Line data={{
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