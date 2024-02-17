const Flight = require('../models/flight');
const httperror = require('http-errors');

class FlightProvider {

	async list(filter = {}) {
		try {
			const result = await Flight.find(filter).lean();
			return result;
		} catch (error) {
			throw error;
		}
	}

	async getById(flightId) {
		try {
			const result = await Flight.findById({ _id: flightId }).lean();
			return result;
		} catch (error) {
			throw error;
		}
	}

	async count(flightId) {
		try {
			const result = await Flight.countDocuments({ _id: flightId });
			return result;
		} catch (error) {
			throw error;
		}
	}

	async create(createBody) {
		try {
			const result = await Flight.create(createBody);
			return result;
		} catch (error) {
			throw error;
		}
	}

	async update(flightId, updateObj) {
		try {
			const result = await Flight.findOneAndUpdate({ _id: flightId }, updateObj, { new: true }).lean();
			return result;
		} catch (error) {
			throw error;
		}
	}

	async delete(flightId) {
		try {
			const result = await Flight.findOneAndDelete({ _id: flightId });
			return result;
		} catch (error) {
			throw error;
		}
	}
}


exports.FlightProvider = FlightProvider;