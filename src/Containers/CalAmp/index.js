import { connect } from 'react-redux';
import CalAmp from './calamp';

function mapStoreToProps(store) {
    return {
        topic: store.app.topic,
        calamp: store.app.calamp
    }
}

export default connect(mapStoreToProps)(CalAmp);