import { IonCard, IonCardContent, IonGrid, IonText } from "@ionic/react";

const WeatherForecast = ({ weatherData }: any) => (

    <IonGrid>
        <IonCard>
            <IonCardContent className="ion-text-center">
                <IonText color="primary">
                    <h1>{weatherData.location.name}, {weatherData.location.country}</h1>
                    <h1>{weatherData.location.region}</h1>
                </IonText>
                <div className="ion-margin-top">
                    <img alt="" src={weatherData.forecast.forecastday[0].day.condition.icon.replace("//", "https://")} />
                    <IonText color="dark">
                        <h1 style={{ fontWeight: "bold" }}>{weatherData.forecast.forecastday[0].day.condition.text}</h1>
                    </IonText>
                </div>
                <h2 style={{ fontSize: "1rem" }}>Minimaalne temperatuur: {weatherData.forecast.forecastday[0].day.mintemp_c}&#8451;</h2>
                <h2 style={{ fontSize: "1rem" }}>Maksimaalne temperatuur: {weatherData.forecast.forecastday[0].day.maxtemp_c}&#8451;</h2>
                <h2 style={{ fontSize: "1rem" }}>Keskmine temperatuur: {weatherData.forecast.forecastday[0].day.avgtemp_c}&#8451;</h2>
            </IonCardContent>
        </IonCard>
    </IonGrid>
);

export default WeatherForecast;