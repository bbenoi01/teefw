import { connect } from 'react-redux';
import App from '../App';

function mapStoreToProps(store) {
    return {
        topic: store.app.topic
    }
}

export default connect(mapStoreToProps)(App);