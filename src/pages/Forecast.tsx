import { IonButton, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar, IonText } from '@ionic/react';
import axios from "axios";
import { refreshCircleSharp } from 'ionicons/icons';
import { Geolocation } from '@capacitor/geolocation';
import { useState, useEffect } from 'react';
import WeatherForecast from '../components/ShowForecast';

const Forecast: React.FC = () => {
  const [weather, setWeather] = useState<boolean>(false);

  useEffect(() => {
    getCurrentPosition();
  }, []);

  const getCurrentPosition = async () => {
    setWeather(false);
    const coordinates = await Geolocation.getCurrentPosition();
    getAddress(coordinates.coords);
  }

  const getAddress = async (coords: any) => {
    const query = `${coords.latitude}, ${coords.longitude}`;
    const response = await axios(`https://api.weatherapi.com/v1/forecast.json?key=fe9f21bb87504bf8b8e195529222305&q=${query}`);
    setWeather(response.data);
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className="ion-justify-content-center ion-text-center" size="large">Ilmaennustus</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow className="ion-justify-content-center ion-text-center">
          <IonCol size="10">
            <h4>Homne ilmateade:</h4>
          </IonCol>

          <div style={{ marginTop: "1rem" }}>
            {weather ? <WeatherForecast weatherData={weather} /> : "Uuendan..."}
          </div>

        </IonRow>
      </IonContent>
      <IonButton color="light" onClick={() => getCurrentPosition()}>
        <IonIcon icon={refreshCircleSharp} color="secondary" />
        <IonText color="secondary"><h6>Uuenda asukoha päringut</h6></IonText>
      </IonButton>
    </IonPage>
  );
};

export default Forecast;
