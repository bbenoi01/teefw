import { connect } from 'react-redux';
import Xirgo from './xirgo';

function mapStoreToProps(store) {
    return {
        topic: store.app.topic,
        xirgo: store.app.xirgo
    }
}

export default connect(mapStoreToProps)(Xirgo);