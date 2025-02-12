import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'
import Button from '../components/Button'

function ButtonPage() {

    return <div>
        <div>
            <Button success rounded className="mb-5" >
                <GoBell />
                Click Me
                </Button>
        </div>
        <div>
            <Button danger>
                <GoCloudDownload />
                Buy Now
                </Button>
        </div>
        <div>
            <Button warning>
                <GoDatabase />
                See Deal
                </Button>
        </div>
        <div>
            <Button secondary>Hide Ads</Button>
        </div>
        <div>
            <Button primary rounded>Something</Button>
        </div>
        </div>
}

export default ButtonPage