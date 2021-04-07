import neuron from './neuron.svg';
import neuronBack from './neuron-back.svg';
import background from './background.svg';
import './Home.css';
import React from 'react';

class NeuronLink extends React.Component{
    constructor(props){
        super(props);
        this.big = this.big.bind(this);
        this.small = this.small.bind(this);
        this.state = props.state.hovered;
    }

    big(x){
        this.setState({isBig: true});
    }

    small(x){
        this.setState({isBig: false});
    }

    render(){
        let className;
        this.state.isBig ? className = "neuronLinksHovered" : className="neuronLinks";
        return(
            <a href="." class={className} onMouseOver={this.big} onMouseOut={this.small}>{this.props.name}</a>
        )
    }
}

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={hovered: false}
    }

    render() {
        let backgroundClassName="";
        this.state.hovered ? backgroundClassName="backgroundHovered" : backgroundClassName="background";
        return (
            <body className = "Home">
                <div class="container">
                    <img src={background} className={backgroundClassName} alt="background" />
                    <img src={neuronBack} className="neuron-back" alt="dendritas" />
                    <img src={neuron} className="neuron" alt="neuron" />
                    <div class="Contact">
                        <NeuronLink name="Contacto" state={this.state}/>
                    </div>
                    <div class="FirstApp">
                        <NeuronLink name="First App" state={this.state}/>
                    </div>
                </div>
            </body>
        )
    }
}
export default Home;