import './contact.css'
import { useEffect, useRef, useState} from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';

function Contact() {
  const [loadingMap, setLoadingMap] = useState(true);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Verificar se o mapa já foi inicializado
    if (document.querySelector('.ol-viewport')) {
      setLoadingMap(false);
      return;
    }
    if (mapRef.current) {
      const map = new Map({
        layers: [ new TileLayer({ source: new OSM()}) ],
        view: new View({
          center: fromLonLat([-46.6333, -23.5505]), // Coordenadas do endereço
          zoom: 18 // Aumentando o zoom
        }),
        target: mapRef.current // Usando a ref da div como target
      });
      const iconStyle = new Style({
        image: new Icon({
          anchor: [0.5, 46],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: 'https://openlayers.org/en/latest/examples/data/icon.png' // Ícone do marcador
        })
      });
      const iconFeature = new Feature({
        geometry: new Point(fromLonLat([-46.6333, -23.5505])), // Coordenadas do endereço
      });
      const vectorSource = new VectorSource({
        features: [iconFeature]
      });
      const vectorLayer = new VectorLayer({
        source: vectorSource,
        style: iconStyle // Aplicar estilo diretamente aqui
      });
      map.addLayer(vectorLayer);
      setLoadingMap(false);
    }}, [loadingMap]);


  return (
    <div className='about'>
      <div className='about-body'>
        <div className='contact-content'>
          <div className='title'><h2>Contatos</h2></div>
          <div className='contacts'>
              <div className='contacts-list'>
                <p>Whatsapp : (11)99979-7305</p>
                <p>Celular : (11)99979-7305</p>
                <p>Telefone fixo : (11)3242-1871</p>
                <p>Instagram: @lap_facetar</p>
                <p>Facebook: facebook.com/facetar</p>
                <p>Email: adm@facetar.com.br</p>
                <p>
Especialistas em transformar pedras brutas em jóias deslumbrantes, oferecemos um serviço completo e personalizado. Com profundo conhecimento da extração e lapidação das pedras à criação final, garantimos excelência em cada projeto, aliando qualidade, eficiência e o melhor custo-benefício.</p>
              </div>
          </div>
        </div>
        <div className='contact-map'>  
          <p className='map-text'>Rua Senador Paulo Egidio, 15 -- Cep: 01006-903</p>
          <div ref={mapRef} id='map' style={{ width: '100%', height: '380px' }}></div>
      </div>
      </div>
    </div>
  );
}

export default Contact;