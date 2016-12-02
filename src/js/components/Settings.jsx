import React, {Component} from 'react';

class Settings extends Component {

    componentDidMount() {
        this.drawTick();
    }

    componentDidUpdate() {
        this.drawTick();
    }

    drawTick() {
        const elems = this.settings.children;
        const {color} = this.props;

        for (let i = 0; i < elems.length; i++) {
            if (getComputedStyle(elems[i]).backgroundColor === color) {
                elems[i].classList.add('active');
            } else {
                elems[i].classList.remove('active');
            }
        }
    }

    handleColorChange (e) {
        const {onColorChange} = this.props;
        onColorChange(getComputedStyle(e.currentTarget).backgroundColor);
    }

    render() {
        const colors = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
        const {mobile} = this.props;

        return (
            <div
                className="settings"
                ref={(ref) => { this.settings = ref; }}
            >
                {colors.map((elem, i) => (
                    <div
                        key={i}
                        className={`settings__color ${elem} ${mobile ? 'mobile' : ''}`}
                        onClick={::this.handleColorChange}
                    >
                        <div className='settings__text'>&#10003;</div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Settings;