import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import SimpleSlider from '../components/SimpleSlider';


const Contact = (props) => (
    <Layout>
        <SimpleSlider></SimpleSlider>
        <div>
            <h1>Contact Page</h1>
            <p>Application Contact</p>
        </div>
    </Layout>
);

export default Contact;