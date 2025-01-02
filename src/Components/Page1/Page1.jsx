import CheckInScreen_func from "../CheckInScreen"
import get_data from "../../Utils/get_data"
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from "react-chartjs-2"

let data,planets_per_year = get_data()

let chart1_labels = []
let chart1_dataset = []

for (const [k,v] of Object.entries(planets_per_year)){
  if (!(k in chart1_labels)){
    chart1_labels.push(k);
    chart1_dataset.push(v);
  }
}


let chart1_data = {
  labels: chart1_labels,
  datasets:[
    {
      label: "Planets discovered",
      data: chart1_dataset,
      
    }
  ]
}

function Page1(){
    return (<div><center>
        <h1>Lorem ipsum dolor set amet</h1>
        <CheckInScreen_func><p className='Explaining_Text'>Lorem ipsum odor amet, 
          consectetuer adipiscing elit. Tristique nisl ultricies 
          nulla suscipit mauris sed curabitur blandit. Purus 
          elementum natoque dictum nullam sed integer. Viverra 
          arcu felis, morbi lacinia habitant maecenas. 
          Ut venenatis sociosqu elementum phasellus sociosqu 
          quisque maximus convallis.</p></CheckInScreen_func>
          <br/>
          <CheckInScreen_func><p className='Explaining_Text'>Lorem ipsum odor amet, 
          consectetuer adipiscing elit. Tristique nisl ultricies 
          nulla suscipit mauris sed curabitur blandit. </p></CheckInScreen_func>
      <br/><br/><br/><br/><br/>
          <CheckInScreen_func><Line data={chart1_data} id="Planets Discovered Per Year"/></CheckInScreen_func>
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