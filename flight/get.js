const { FlightProvider } = require('../../providers/flight');
const httperror = require('http-errors');

class GetFlight {
    constructor(flightId) {
        this.flightId = flightId;
    }
    async execute() {
        try {
            const flightProvider = new FlightProvider();
            const result = await flightProvider.getById(this.flightId);
            if (!result) {
                throw new httperror(404, `Flight not exists.`);
            }
            return result;
        } catch (error) {
            throw error;
        }
    }
}

exports.GetFlight = GetFlight;