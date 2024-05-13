import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../language/i18n'; 
import propertiesData from '../language/propertys.json';
import "../App.css";

const Home = () => {
    const { t } = useTranslation(); // t function for translating
    const [currency, setCurrency] = useState('USD');
    const [searchTerm, setSearchTerm] = useState('');
     
    const currencySymbols = {
      USD: '$',
      EUR: '€',
      GBP: '£',
      JPY: '¥',
      INR: '₹', 
      AED: 'د.إ', 
      
    };
  
    const conversionRates = {
      USD: 1,
      EUR: 0.93, 
      GBP: 0.80, 
      JPY: 156.23, 
      INR: 83.49,  
      AED: 3.673,  
  };
  
    const handleChangeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      console.log("hg",lng)
    };
  
  
    // Function to handle currency change
    const handleChangeCurrency = (event, currencyCode) => {
      event.preventDefault();
      setCurrency(currencyCode);
    };
    

  // Get properties data based on selected language
  const properties = propertiesData[i18n.language].properties;

   const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase())
);

    // Function to format currency amount with symbol
    const formatCurrency = (amount) => {
      const convertedAmount = amount * conversionRates[currency];
      return currencySymbols[currency] + convertedAmount.toFixed(2);
    };
  
  return (
    <div>
     <nav class="navbar navbar-default">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">
        <img src="././assets/img/logos.JPG" alt="" className='logo' />
      </a>
    </div>

    <div class="collapse navbar-collapse" id="navigation">
      <ul class="nav navbar-nav">
        <li class="wow fadeInDown" data-wow-delay="0.2s">
          <a class="" href="/" style={{color:'grey',margin:'10px'}}>{t('ButtonTexth')}</a>
        </li>

        <li class="wow fadeInDown" data-wow-delay="0.3s">
          <a class="" href="/" style={{color:'grey',margin:'10px'}}>{t('ButtonTextp')}</a>
        </li>

        <li class="wow fadeInDown" data-wow-delay="0.5s">
          <a href="/" style={{color:'grey',margin:'10px'}}>{t('ButtonTextc')}</a>
        </li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
      <li className="dropdown">
      <a href="#" className="dropdown-toggle navbar-btn nav-button wow fadeInRight Currency" data-toggle="dropdown">
        <i className="fa fa-language"></i> {t('lanuageb')} <i className="fa fa-angle-down"></i>
      </a>
      <ul className="dropdown-menu">
      {/* <li><a href="#" onClick={() => handleChangeLanguage('es')}>Spanish</a></li> */}
        <li><a href="#" onClick={() => handleChangeLanguage('en')}>English</a></li>
        <li><a href="#" onClick={() => handleChangeLanguage('fr')}>French</a></li>
        <li><a href="#" onClick={() => handleChangeLanguage('it')}>Italian</a></li>
        <li><a href="#" onClick={() => handleChangeLanguage('ar')}>Arabic</a></li>
        {/* Add more language options as needed */}
      </ul>
    </li>&nbsp;&nbsp;&nbsp;
    <li className="dropdown">
  <a href="#" className="dropdown-toggle navbar-btn nav-button wow bounceInRight Language login" data-toggle="dropdown">
    <i className="fa fa-money"></i> {t('currenb')}  <i className="fa fa-angle-down"></i>
  </a>
  <ul className="dropdown-menu">
  <li>
  <a href="#" onClick={(event) => handleChangeCurrency(event, 'USD')}>USD - US Dollar</a>
</li>
<li>
  <a href="#" onClick={(event) => handleChangeCurrency(event, 'EUR')}>EUR - Euro</a>
</li>
<li>
  <a href="#" onClick={(event) => handleChangeCurrency(event, 'GBP')}>GBP - British Pound</a>
</li>
<li>
  <a href="#" onClick={(event) => handleChangeCurrency(event, 'JPY')}>JPY - Japanese Yen</a>
</li>
<li>
  <a href="#" onClick={(event) => handleChangeCurrency(event, 'INR')}>INR - Indian Rupees</a>
</li>

  
  </ul>
</li>

      </ul>

      
    </div>
  </div>
</nav>

      <div class="slider-area">
        <div class="slider">
          <div id="bg-slider">
            <img
              src="./ss.jpg"
              alt="GTA V"
              style={{ height: "580px", width: "100%" }}
            />
          </div>
        </div>
        <div class="slider-content">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
            <h2 id="main-heading">{t('mainHeading')}</h2>
              <p>
                <b>
                  {t('description')}
                </b>
              </p>
              <div
                class="search-form wow pulse"
                data-wow-delay="0.8s"
                style={{
                  backgroundColor: "rgba(255, 165, 0, 0.71)",
                  border: " 1px solid rgba(255, 165, 0, 0.71)",
                 
                }}
                id="s4"
              >
                <form action="" class="form-inline">
                  <div class="form-group" id="s1">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Key word"
                      style={{ backgroundColor: "white" }}
                      value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <button class="btn search-btn" type="submit" id="s3">
                    <i class="fa fa-search"></i>
                  </button>

              
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="content-area home-area-1 recent-property"
        style={{
          backgroundColor: "#FCFCFC",
          paddingBottom: "55px",
         
        }}
        id="s2"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
              <h2>{t('secHeading')}</h2>
              <p>
              {t('secDesc')}{" "}
              </p>
            </div>
          </div>

       
      <div class="content-area home-area-1 recent-property">
        {/* Content area */}
        <div class="container">
          <div class="row" >
          <div className="proerty-th">
                {filteredProperties.map((property, index) => (
                    <div key={index} className="col-sm-6 col-md-3 p-3">
                        <div className="box-two proerty-item">
                            <div className="item-thumb">
                                <a href="property-1.html">
                                    <img src={`./assets/img/demo/property-${index + 1}.jpg`} alt={property.title} />
                                </a>
                            </div>
                            <div className="item-entry overflow">
                                <h5>
                                    <a href="property-1.html">{property.title} </a>
                                </h5>
                                <div className="dot-hr"></div>
                                <span className="pull-left">
                                    <b>{property.location}</b>
                                </span>
                                <span className="proerty-price pull-right">{formatCurrency(parseFloat(property.price))}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>

      <div class="count-area">
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
              <h2>{t('tustHeading')} </h2>
            </div>
          </div>
          <div class="row">
            <div
              class="col-md-12 col-xs-12 percent-blocks m-main"
              data-waypoint-scroll="true"
            >
              <div class="row">
                <div class="col-sm-3 col-xs-6">
                  <div class="count-item">
                    <div class="count-item-circle">
                      <span class="pe-7s-users"></span>
                    </div>
                    <div class="chart" data-percent="5000">
                      <h2 class="percent" id="counter">
                        10000+
                      </h2>
                      <h5>{t('happy')} </h5>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-xs-6">
                  <div class="count-item">
                    <div class="count-item-circle">
                      <span class="pe-7s-home"></span>
                    </div>
                    <div class="chart" data-percent="12000">
                      <h2 class="percent" id="counter1">
                        200+
                      </h2>
                      <h5>{t('stock')} </h5>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-xs-6">
                  <div class="count-item">
                    <div class="count-item-circle">
                      <span class="pe-7s-flag"></span>
                    </div>
                    <div class="chart" data-percent="120">
                      <h2 class="percent" id="counter2">
                        340
                      </h2>
                      <h5>{t('city')}  </h5>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-xs-6">
                  <div class="count-item">
                    <div class="count-item-circle">
                      <span class="pe-7s-graph2"></span>
                    </div>
                    <div class="chart" data-percent="5000">
                      <h2 class="percent" id="counter3">
                        5000
                      </h2>
                      <h5>{t('dealer')} </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-area">
        

        <div class="footer-copy text-center">
          <div class="container">
            <div class="row">
              <div class="pull-left">
                <span>{t('right')} </span>
              </div>
              <div class="bottom-menu pull-right">
                <ul>
                  <li>
                    <a
                      class="wow fadeInUp animated"
                      href="#"
                      data-wow-delay="0.2s"
                    >
                      {t('ButtonTexth')}
                    </a>
                  </li>
                  <li>
                    <a
                      class="wow fadeInUp animated"
                      href="#"
                      data-wow-delay="0.3s"
                    >
                      {t('ButtonTextp')}
                    </a>
                  </li>
                  <li>
                    <a
                      class="wow fadeInUp animated"
                      href="#"
                      data-wow-delay="0.4s"
                    >
                      {t('ButtonTextc')}
                    </a>
                  </li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
