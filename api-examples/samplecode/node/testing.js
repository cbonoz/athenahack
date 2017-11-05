#!/usr/bin/env nodejs

//	  Copyright 2014 athenahealth, Inc.
//
//	 Licensed under the Apache License, Version 2.0 (the "License"); you
//	 may not use this file except in compliance with the License.  You
//	 may obtain a copy of the License at
//
//		 http://www.apache.org/licenses/LICENSE-2.0
//
//	 Unless required by applicable law or agreed to in writing, software
//	 distributed under the License is distributed on an "AS IS" BASIS,
//	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
//	 implied.  See the License for the specific language governing
//	 permissions and limitations under the License.


var athenahealthapi = require('./athenahealthapi')
var events = require('events')

////////////////////////////////////////////////////////////////////////////////////////////////////
// Setup
////////////////////////////////////////////////////////////////////////////////////////////////////

const key = process.env.ATHENA_KEY; // 'CHANGEME: YOUR_API_KEY'
const secret = process.env.ATHENA_SECRET; // 'CHANGEME: YOUR_API_SECRET'
const version = 'preview1'
const patientid = 3373;
const practiceid = 1128700; // sandbox sample id: 195900
const departmentid = 1;

const api = new athenahealthapi.Connection(version, key, secret, practiceid)
api.status.on('ready', main)
api.status.on('error', function(error) {
	console.log(error)
})

// If you want to change which practice you're working with after initialization, this is how.
// api.practiceid = 000000

// Before we start, here's a useful function
function path_join() {
	// trim slashes from arguments, prefix a slash to the beginning of each, re-join (ignores empty parameters)
	var args = Array.prototype.slice.call(arguments, 0)
	var nonempty = args.filter(function(arg, idx, arr) {
		return typeof(arg) != 'undefined'
	})
	var trimmed = nonempty.map(function(arg, idx, arr) {
		return '/' + String(arg).replace(new RegExp('^/+|/+$'), '')
	})
	return trimmed.join('')
}

function log_error(error) {
	console.log(error)
	console.log(error.cause)
}
function main() {
	var signal = new events.EventEmitter


	////////////////////////////////////////////////////////////////////////////////////////////////
	// GET with parameters
	////////////////////////////////////////////////////////////////////////////////////////////////
	var today = new Date()
	var nextyear = new Date()
	nextyear.setFullYear(today.getFullYear() + 1)

	function formatDate(date) {
		return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()
	}

	const allergyRoute = `/chart/${patientid}/allergies`;
	const orderStays = `/stays/active/orders/diet`;
	const configurationOrderStays = `/stays/configuration/orders/diet`

	api.GET(allergyRoute, {
		params: {
			departmentid: departmentid
		}
	}).on('done', function (response) {
		console.log('allergy response: ' + JSON.stringify(response));
	}).on('error', (err) => {
		console.log('error: ' + err);
	});

	return;
	console.log('getting: ' + allergyRoute)
	// Allergies
	api.GET(allergyRoute, {
		params: {
			departmentid: departmentid
		}
	}).on('done', function (response) {
		console.log('allergy response: ' + JSON.stringify(response));
	}).on('error', log_error);

	// Configuration Order Stays
	api.GET(configurationOrderStays, {
		params: {
			searchvalue: 'diet'
		}
	}).on('done', function (response) {
		console.log('configuration order stays response: ' + JSON.stringify(response));
	}).on('error', log_error);

	const exampleOrderId = 392856;
	// Order Stays.
	api.GET(orderStays, {
		params: {
			ordertypeid: exampleOrderId
		}
	}).on('done', function (response) {
		console.log('order type response: ' + JSON.stringify(response));
	}).on('error', log_error);
}
