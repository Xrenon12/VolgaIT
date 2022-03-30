import React from "react"
import ReactDOM from 'react-dom';
import '../src/newWidget.css'
import '../src/ProgressBar.js'
import Otimax from '../src/img/Otimax Dev logo 3.png'
import ArrowRight from '../src/img/arrow_right.png'
import HappySee from '../src/img/HappySee.png'


function handleClick(e) {
	e.preventDefault();
}

function NewWidget() {
	return (
		<div className="Parent" style={{minWidth: '375px'}}>
			<div className="FirstSlide">
				<div className="HeaderFrame" style={{height: '66px', maxWidth: '375px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
					<img src={Otimax} className="OtimaxLogo" style={{maxWidth: '120px', maxHeight: '38px', margin: '14px 0 14px 25px'}}></img>
					<img src={ArrowRight} className="ArrowRight" style={{maxWidth: '10px', maxHeight: '18px', marginRight: '24px', cursor: 'pointer'}}></img>
				</div>
				<div className="BodyFrame" style={{background: 'linear-gradient(180deg, #E8F0F2 0%, rgba(232, 240, 242, 0) 100%)', maxWidth: '375px', display: 'flex', flexDirection: 'column', fontFamily: 'Open Sans', fontStyle: 'normal', fontWeight: 700, textAlign: 'center'}}>
					<img src={HappySee} className="HappySee" style={{maxWidth: '312px', maxHeight: '153px', margin: '0 auto', marginTop: '67px', marginBottom: '48px', textAlign: 'center'}}></img>
					<h1 className="FindPair" style={{fontSize: '24px', lineHeight: '31px', color: '#2196F3'}}>Let's find your perfect pair!</h1>
					<p className="BodyText" style={{fontSize: '15px', color: '#3A4850'}}>Take the quiz to easily discover your perfect fit from thousands of styles</p>
					<button className="StartButton" onClick={handleClick} style={{background: 'linear-gradient(270deg, #45C7FA 0%, #2196F3 100%)', boxShadow: '0px 0px 4px 1px rgba(0, 0, 0, 0.03)', borderRadius: '24px', fontFamily: 'Roboto', fontStyle: 'normal', fontSize: '18px', lineHeight: '21px', color: '#FFFFFF', border: 'none', maxWidth: '177px', minWidth: '177px', minHeight: '48px', margin: '0 auto', marginBottom: '122px', marginTop: '29px', cursor: 'pointer'}}>Start Now</button>
				</div>
			</div>	
		</div>
	)
}

export default NewWidget