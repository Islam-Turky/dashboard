import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { desktopOS, valueFormatter } from './webUsageStats';
import Marquee from "react-fast-marquee";

function HomeScreen() {
  return (
    <section id='Home' style={{ height:"100%", width: "100%", display: 'flex', flexWrap: 'wrap'  }}>
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
    <PieChart
      series={[
        {
          data: desktopOS,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter,
        },
      ]}
      height={300}
      width={500}
      />
      <Marquee pauseOnHover={true} gradient={true} gradientColor='purple' gradientWidth={50}>
        I can be a React component, multiple React components, or just some text.
      </Marquee>
      </section>
  );
}

export default HomeScreen