sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/pooja/rap/travelprocessorrap/test/integration/pages/TravelList",
	"com/pooja/rap/travelprocessorrap/test/integration/pages/TravelObjectPage",
	"com/pooja/rap/travelprocessorrap/test/integration/pages/BookingObjectPage"
], function (JourneyRunner, TravelList, TravelObjectPage, BookingObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/pooja/rap/travelprocessorrap') + '/test/flp.html#app-preview',
        pages: {
			onTheTravelList: TravelList,
			onTheTravelObjectPage: TravelObjectPage,
			onTheBookingObjectPage: BookingObjectPage
        },
        async: true
    });

    return runner;
});

