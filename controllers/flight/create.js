const { FlightProvider } = require('../../providers/flight');
const httperror = require('http-errors');

class CreateFlight {
    constructor(createObj) {
        this.createObj = createObj;
    }

    async execute() {
        try {
            const flightProvider = new FlightProvider();
            await flightProvider.create(this.createObj);
            return 'Flight Created Successfully';
        } catch (error) {
            throw error;
        }
    }
}

exports.CreateFlight = CreateFlight;