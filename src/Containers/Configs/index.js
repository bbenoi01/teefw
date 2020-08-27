import { connect } from 'react-redux';
import Configs from './configs';

function mapStoreToProps(store) {
    return {
        topic: store.app.topic
    }
}

export default connect(mapStoreToProps)(Configs);