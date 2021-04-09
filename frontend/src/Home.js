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
        this.state = {isBig:false};
    }

    big(x){
        let dom=document.getElementById('root')
        dom.style.setProperty("--side",this.props.side)

        this.setState({isBig: true});
        this.props.bgAway();
    }

    small(x){
        let dom=document.getElementById('root')
        dom.style.setProperty("--side",this.props.side)

        this.setState({isBig: false});
        this.props.bgBack();
    }

    render(){
        let className;
        this.state.isBig ? className = "neuronLinksHovered" : className="neuronLinks";
        return(
            <a href="." className={className} onMouseOver={this.big} onMouseOut={this.small}>{this.props.name}</a>
        )
    }
}

class Background extends React.Component{
    constructor(props){
        super(props)
        this.state={hovered: false}
    }
    away(){
        this.setState({hovered:true})
    }
    back(){
        this.setState({hovered:false})
    }
    render(){
        let backgroundClassName="";
        this.state.hovered ? backgroundClassName= this.props.Name+"Hovered" : backgroundClassName=this.props.Name;
        return(
            <img src={this.props.src} className={backgroundClassName} alt={this.props.Name} />
        )
    }
}

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={hovered: false}
    }
    backgroundAway(){
        this.BG.away()
        this.NB.away()
    }

    backgroundBack(){
        this.BG.back()
        this.NB.back()
    }

    render() {
        //let backgroundClassName="";
        //this.state.hovered ? backgroundClassName="backgroundHovered" : backgroundClassName="background";
        return (
            <body className = "Home">
                <div class="container">
                    <Background Name="background" src={background} ref={BG => this.BG = BG} />
                    <Background Name="neuronBack" src={neuronBack} ref={NB => this.NB = NB} />
                    <img src={neuron} className="neuron" alt="neuron" />
                    <div className="Contact">
                        <NeuronLink name="Contacto" bgAway={this.backgroundAway.bind(this)} bgBack={this.backgroundBack.bind(this)} side={-1}/>
                    </div>
                    <div className="FirstApp">
                        <NeuronLink name="First App" bgAway={this.backgroundAway.bind(this)} bgBack={this.backgroundBack.bind(this)} side={-1}/>
                    </div>
                </div>
            </body>
        )
    }
}
export default Home;