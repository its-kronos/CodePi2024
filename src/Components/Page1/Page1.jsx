import CheckInScreen_func from "../CheckInScreen"
import get_data from "../../Utils/get_data"
import { Chart as ChartJS,defaults} from 'chart.js/auto'
import { Line , Bar, Chart} from "react-chartjs-2"
import { useState } from "react"

defaults.responsive = true

let data= get_data()

function create_chart_lbls_data(data){
  let Xlabels = [];
  let data_set = [];

  for (const[k,v] of Object.entries(data)){
    Xlabels.push(k);
    data_set.push(v);
  }

  return [Xlabels,data_set];
}

let [ppy_chart_Xlabels,ppy_chart_dataset] = create_chart_lbls_data(data["planets_py"]);
let ppy_chart_title = "Planets Discovered";



let [dpy_chart_Xlabels,dpy_chart_dataset] = create_chart_lbls_data(data["dis_avr_py"]);
let dpy_chart_title = "Average Distance from Earth (parsecs)";


let [disc_chart_Xlabels,disc_chart_dataset] = create_chart_lbls_data(data["disc_mthd_ct"]);
let disc_chart_title = "Planets Discovered"


let [transit_chart_Xlabels,transit_chart_dataset] = create_chart_lbls_data(data["transit_py"]);
let transit_chart_title = "Planets Discovered"

function Page1(){
  const [chartData,setChartData] = useState(ppy_chart_dataset)
  const [chartXLabels,setChartXLabels] = useState(ppy_chart_Xlabels)
  const [chartTitle,setchartTitle] = useState(ppy_chart_title)
  const [chartType,setChartType] = useState("line")
    return (<div><center>
        <h1>Exoplanet Data Visualiser</h1>
        <CheckInScreen_func>
          <p className='Explaining_Text'>How has the number of exoplanets discovered changed through time?<br></br>
          Could it be due to new technologies allowing us to find planets farther than ever, or could it be 
          new methods that allow us to see planets hiding right under our noses?<br></br>
          </p>
          </CheckInScreen_func>
          <CheckInScreen_func>
            <p className='Explaining_Text'>These are all great questions, but sadly (or maybe luckily), there are thousands of planets that have been discovered,
          making it great for our progress in learning about space, but painful to sort through it all. However, in this day and age,
          we fortunately have the tools to quickly look through this data in a matter of seconds (the amount of time it took
          to load this page) by utilizing code.</p>
          </CheckInScreen_func>
          <CheckInScreen_func>
            <p className='Explaining_Text'>Below is an interactive graph to help visualize NASA's exoplanet data (click the buttons to change the graph)</p>
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

      <center>
        <CheckInScreen_func>
        <p className='Explaining_Text'>Did you notice that the planets discovered by transit account for almost all
          the planets discovered? I encourage you to take a closer look at the graphs to determine when this method became popular
          and if you're really interested, I encourage you to search it up online (which is what I did when first looking through these graphs!).
        </p>
        </CheckInScreen_func>
        <CheckInScreen_func>
        <p className='Explaining_Text'>Using code like this is an easy way to visualize data that interests you, as exoplanets did for me.
It's essential in statistics, and probably will give new insights on interests that you may have never even considered.
        </p>
        </CheckInScreen_func>
        <CheckInScreen_func>
        <p className='Explaining_Text'>Thank you for taking the time to look at my project, and I hope that at least one of you looking at it
          has been inspired to make a visualizer for other data that they want to see.
        </p>
        </CheckInScreen_func>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </center>
      </div>
      )
}

export default Page1