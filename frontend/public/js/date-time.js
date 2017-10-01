$(function () {
	let date = new Date();
	let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    $('#datetimepicker1').datetimepicker({
        format: 'YYYY-MM-DD',
        //minDate: today,
        ignoreReadonly: true,
        allowInputToggle: true,
        icons: {
            up: "ion-ios-arrow-thin-up",
            down: "ion-ios-arrow-thin-down",
            next: 'ion-ios-arrow-thin-right',
            previous: 'ion-ios-arrow-thin-left'
        }
    });
});

$(function () {
    let date = new Date();
    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    $('#datetimepicker3').datetimepicker({
        format: 'YYYY-MM-DD',
        minDate: today,
        ignoreReadonly: true,
        allowInputToggle: true,
        icons: {
            up: "ion-ios-arrow-thin-up",
            down: "ion-ios-arrow-thin-down",
            next: 'ion-ios-arrow-thin-right',
            previous: 'ion-ios-arrow-thin-left'
        }
    });
});

$(function () {
    $('#datetimepicker2').datetimepicker({
        format: 'HH:mm',
        enabledHours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        stepping: 15,
        ignoreReadonly: true,
        allowInputToggle: true,
        icons: {
            up: "ion-ios-arrow-thin-up",
            down: "ion-ios-arrow-thin-down",
            next: 'ion-ios-arrow-thin-right',
            previous: 'ion-ios-arrow-thin-left'
        }
    });
});

/*
$(function () {
    let date = new Date();
    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    $('#datetimepicker1').datetimepicker({
        format: 'YYYY-MM-DD',
        ignoreReadonly: true,
        allowInputToggle: true,
        icons: {
            up: "ion-ios-arrow-thin-up",
            down: "ion-ios-arrow-thin-down",
            next: 'ion-ios-arrow-thin-right',
            previous: 'ion-ios-arrow-thin-left'
        }
    });
});
*/