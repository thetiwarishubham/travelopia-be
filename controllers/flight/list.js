const { FlightProvider } = require('../../providers/flight');

class GetAllFlights {
    constructor() {
    }
    async execute() {
        try {
            const flightProvider = new FlightProvider();
            const result = await flightProvider.list();
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.GetAllFlights = GetAllFlights;