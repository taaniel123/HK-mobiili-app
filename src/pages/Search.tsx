import { IonAlert, IonButton, IonCol, IonContent, IonHeader, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import Weather from '../components/ShowCurrentWeather';

const Search: React.FC = () => {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(false);
  const [error, setError] = useState<string>();

  const performSearch = async () => {

    getAddress(search);
  };

  const getAddress = async (query: string) => {

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=fe9f21bb87504bf8b8e195529222305&q=${query}`);
    const data = await response.json();

    if (response.ok === false) {
      setError('Sisesta korrektne otsing');
      return;
    } else {
      setWeather(data);
    }
  };

  const clearError = () => {
    setError('');
  };

  return (
    <IonPage>
      <IonAlert isOpen={!!error} message={error}
        buttons={[
          { text: 'OK', handler: clearError }
        ]} />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className="ion-justify-content-center ion-text-center" size="large">Otsing</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow className="ion-justify-content-center ion-text-center">
          <IonCol size="7">
            <IonSearchbar placeholder="Otsi..." animated value={search} onIonChange={e => setSearch((e.target as HTMLInputElement).value)} />
          </IonCol>
          <IonCol size="4">
            <IonButton expand="block" className="ion-margin-start ion-margin-end" onClick={performSearch}>Otsi</IonButton>
          </IonCol>
        </IonRow>

        <div style={{ marginTop: "1rem" }}>
          {weather ? <Weather weatherData={weather} /> : <h3 className="ion-text-center">Sinu otsingutulemused ilmuvad siin:</h3>}
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Search;