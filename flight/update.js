const { FlightProvider } = require('../../providers/flight');
const httperror = require('http-errors');

class UpdateFlight {
    constructor(flightId, updateObj) {
        this.flightId = flightId;
        this.updateObj = updateObj;
    }
    async execute() {
        try {
            const flightProvider = new FlightProvider();
            const result = await flightProvider.update(this.flightId, this.updateObj);
            if (!result) {
                throw new httperror(400, `Bad Request.`);
            }
            return 'Flight Updated Successfully.';
        } catch (error) {
            throw error;
        }
    }
}

exports.UpdateFlight = UpdateFlight;