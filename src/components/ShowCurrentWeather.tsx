import { IonCard, IonCardContent, IonGrid, IonText, IonCardTitle } from "@ionic/react";

const Weather = ({ weatherData }: any) => (

    <IonGrid>
        <IonCard>
            <IonCardContent className="ion-text-center">
                <IonText color="primary">
                    <h1>{weatherData.location.name}, {weatherData.location.country}</h1>
                    <h1>{weatherData.location.region}</h1>
                </IonText>
                <div className="ion-margin-top">
                    <img alt="" src={weatherData.current.condition.icon.replace("//", "https://")} />
                    <IonText color="dark">
                        <h1 style={{ fontWeight: "bold" }}>{weatherData.current.condition.text}</h1>
                    </IonText>
                    <IonText color="medium">
                        <p>{new Date(weatherData.location.localtime).toLocaleDateString()}</p>
                        <p>{new Date(weatherData.location.localtime).toLocaleTimeString()}</p>
                    </IonText>
                </div>
                <IonCardTitle style={{ fontSize: "3rem" }} className="ion-margin-top">{weatherData.current.temp_c}&#8451;</IonCardTitle>
                <h2 style={{ fontSize: "1rem" }}>Tajutav temperatuur: {weatherData.current.feelslike_c}&#8451;</h2>
            </IonCardContent>
        </IonCard>
    </IonGrid>
);

export default Weather;