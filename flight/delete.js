const { FlightProvider } = require('../../providers/flight');
const httperror = require('http-errors');

class DeleteFlight {
    constructor(flightId) {
        this.flightId = flightId;
    }
    async execute() {
        try {
            const flightProvider = new FlightProvider();
            const flight = await flightProvider.delete(this.flightId);
            if (!flight) {
                throw new httperror(400, `Bad Request.`);
            }
            return 'Deleted Successfully.';
        } catch (error) {
            throw error;
        }
    }
}

exports.DeleteFlight = DeleteFlight;