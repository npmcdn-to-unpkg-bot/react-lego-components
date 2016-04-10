import Nav from '../components/nav/index.jsx'
import Group from '../components/group/index.jsx'
import Test from '../components/test/index.jsx'
import Onepicinfo from '../components/one-pic-info/index.jsx'
import Focus from '../components/focus/index.jsx'
import Carousel from '../components/carousel/index.jsx'
import Singlecard from '../components/single-card/index.jsx'
import Blesscard from '../components/bless-card/index.jsx'
import Rankdetailtrend from '../components/rank-detail-trend/index.jsx'
import Rankdetailscore from '../components/rank-detail-score/index.jsx'
import Horrankcard from '../components/hor-rank-card/index.jsx'

const ComponentsMap = {
    'nav': Nav,
    '11': Group,
    'test': Test,
    '5': Focus,
    '3': Onepicinfo,
    '1': Carousel,
    '2': Singlecard,
    '9': Blesscard,
    '7': Rankdetailtrend, //rank-detail-trend
    '8': Rankdetailscore,//rank-detail-score
    '6': Horrankcard,
}
export default ComponentsMap
