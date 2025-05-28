import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {

    return <div className="mt-20 ml-10">
        <div className="mb-4">
            <Button success rounded >
                <GoBell />
                Click Me
            </Button>
        </div>
        <div className="mb-4">
            <Button danger>
                <GoCloudDownload />
                Buy Now
            </Button>
        </div>
        <div className="mb-4">
            <Button warning>
                <GoDatabase />
                See Deal
            </Button>
        </div>
        <div className="mb-4">
            <Button secondary>Hide Ads</Button>
        </div>
        <div className="mb-4">
            <Button primary rounded>Something</Button>
        </div>
    </div>;
}

export default ButtonPage;