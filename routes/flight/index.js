const express = require('express');
const router = express.Router();

const {
	flightIdValidation,
	createFlightValidation,
	updateFlightValidation,
} = require('../helper/request-validation/flight');
const { ControllerManager } = require('../../controllers/controller-manager');

const { GetAllFlights } = require('../../controllers/flight/list');
const { GetFlight } = require('../../controllers/flight/get');
const { CreateFlight } = require('../../controllers/flight/create');
const { UpdateFlight } = require('../../controllers/flight/update');
const { DeleteFlight } = require('../../controllers/flight/delete');

router.route('/:id').get(flightIdValidation, function (req, res, next) {
	const flightId = req.params.id;
	const controller = new GetFlight(flightId);
	ControllerManager.execute(controller)
		.then(data => {
			const response = {
				data: data
			};
			res.status(200).send(response);
		})
		.catch(error => {
			const response = {
				data: error.message
			};
			res.status(error.status || 400).send(response);
		});
});

router.route('/').get(function (req, res, next) {
	const controller = new GetAllFlights();
	ControllerManager.execute(controller)
		.then(data => {
			const response = {
				data: data
			};
			res.status(200).send(response);
		})
		.catch(error => {
			const response = {
				data: error.message
			};
			res.status(error.status || 400).send(response);
		});
});

router.route('/').post(createFlightValidation, function (req, res, next) {
	const createObj = req.body;
	const controller = new CreateFlight(createObj);
	ControllerManager.execute(controller)
		.then(data => {
			const response = {
				data: data
			};
			res.status(200).send(response);
		})
		.catch(error => {
			const response = {
				data: error.message
			};
			res.status(error.status || 400).send(response);
		});
});

router.route('/:id').patch(flightIdValidation, updateFlightValidation, function (req, res, next) {
	const flightId = req.params.id;
	const updateObj = req.body;
	const controller = new UpdateFlight(flightId, updateObj);
	ControllerManager.execute(controller)
		.then(data => {
			const response = {
				data: data
			};
			res.status(200).send(response);
		})
		.catch(error => {
			const response = {
				data: error.message
			};
			res.status(error.status || 400).send(response);
		});
});

router.route('/:id').delete(flightIdValidation, function (req, res, next) {
	const flightId = req.params.id;
	const controller = new DeleteFlight(flightId);
	ControllerManager.execute(controller)
		.then(data => {
			const response = {
				data: data
			};
			res.status(200).send(response);
		})
		.catch(error => {
			const response = {
				error: error.message
			};
			res.status(error.status || 400).send(response);
		});
});


module.exports = router