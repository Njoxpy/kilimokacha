import React from 'react';
import Footer from '../../components/Footer';

const Weather = () => {
    // Sample weather data
    const weatherData = [
        {
            day: "Monday",
            temperature: "25°C",
            condition: "Sunny",
            humidity: "60%",
            wind: "10 km/h",
        },
        {
            day: "Tuesday",
            temperature: "22°C",
            condition: "Partly Cloudy",
            humidity: "55%",
            wind: "15 km/h",
        },
        {
            day: "Wednesday",
            temperature: "24°C",
            condition: "Rainy",
            humidity: "70%",
            wind: "5 km/h",
        },
        {
            day: "Thursday",
            temperature: "23°C",
            condition: "Cloudy",
            humidity: "65%",
            wind: "12 km/h",
        },
        {
            day: "Friday",
            temperature: "26°C",
            condition: "Sunny",
            humidity: "50%",
            wind: "8 km/h",
        },
    ];

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold text-green-500 text-center mt-8">Weather Data</h1>

                    {/* Weather Data Section */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold text-gray-700">Weekly Weather Forecast</h2>
                        <p className="mt-2 text-gray-600">
                            Check the latest weather updates to plan your farming activities effectively.
                        </p>
                    </div>

                    {/* Weather Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        {weatherData.map((day, index) => (
                            <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md p-4">
                                <h3 className="text-xl font-semibold text-gray-800">{day.day}</h3>
                                <p className="text-lg text-green-600">{day.temperature}</p>
                                <p className="text-gray-600">{day.condition}</p>
                                <p className="text-gray-500">Humidity: {day.humidity}</p>
                                <p className="text-gray-500">Wind: {day.wind}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Weather;
