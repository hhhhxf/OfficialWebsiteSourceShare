import React from 'react';
import '../style/containers/WhiteContainer.scss'

class CannotFind extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <div className="white-container">
                <p>404, 小R没找到这篇文章！</p>
            </div>
        );
    }
}

export default CannotFind;