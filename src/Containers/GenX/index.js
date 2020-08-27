import { connect } from 'react-redux';
import GenX from './genx';
    function mapStoreToProps(store) {
        return {
            topic: store.app.topic,
            genx: store.app.genx
        }
    }
export default connect(mapStoreToProps)(GenX);