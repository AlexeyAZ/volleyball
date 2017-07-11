/*global $*/

$(function() {

    $(".js-main-news-list").mCustomScrollbar();
    $(".js-press-list").mCustomScrollbar();

    $(".js-main-news-gallery").slick({
        prevArrow: ".js-main-news-gallery-arrow-left",
        nextArrow: ".js-main-news-gallery-arrow-right",
        dots: true,
        appendDots: ".js-main-news-gallery-dots"
    });

    $(".js-gallery-imgs").slick({
        prevArrow: ".js-gallery-block-arrow-left",
        nextArrow: ".js-gallery-block-arrow-right",
        slidesToShow: 6,
        swipeToSlide: true
    });

    $(".js-teams-slider").slick({
        prevArrow: ".js-teams-slider-arrow-left",
        nextArrow: ".js-teams-slider-arrow-right",
        slidesToShow: 1,
    })

    $(".js-teams-select").styler();

    (function () {
        var calendarItems = $(".js-calendar-month");
        var eventDates = [
            {
                days: [9, 19, 24],
                classes: ["blue", "red", "bluered"],
                events: [
                    [
                        "КМЛ Группа А",
                        "ЧР Play Off за 5-ое место"
                    ],
                    [
                        "event1",
                        "event2"
                    ],
                    [
                        "event3"
                    ]
                ],
                show: [false, false, false]
            }, 
            {
                days: [9],
                classes: ["blue"],
                events: [
                    [
                        "event5"
                    ],
                ],
                show: [false]
            },
            {
                days: [9],
                classes: ["blue"],
                events: [
                    [
                        "event6"
                    ],
                ],
                show: [false]
            }
        ];

        calendarItems.each(function(i) {
            var self = $(this);
            self.attr("data-number", i);

            self.datepicker({
                navTitles: {
                    days: 'MM',
                    months: 'yyyy',
                    years: 'yyyy1 - yyyy2'
                },
                startDate: new Date(new Date().getFullYear(), new Date().getMonth() + i),
                moveToOtherMonthsOnSelect: false,
                selectOtherYears: false,

                onRenderCell: function(date, cellType) {
                    var currentDate = date.getDate();

                    if (cellType == 'day' && eventDates[i].days.indexOf(currentDate) != -1) {
                        
                        var eventsElem = '<div class="calendar__events' + (eventDates[i].show[eventDates[i].days.indexOf(date.getDate())] === true ? " calendar__events_show" : "") + '"><div>' + currentDate + " " + $.fn.datepicker.language['ru'].monthsShort[date.getMonth()] + " " + date.getFullYear() + '</div>';

                        for (var j = 0; j < eventDates[i].events[eventDates[i].days.indexOf(currentDate)].length; j++) {
                            var event = eventDates[i].events[eventDates[i].days.indexOf(currentDate)][j];

                            eventsElem += '<div class="calendar__events-event"><a href="">' + event + '</a></div>';
                        }

                        eventsElem += '</div>';

                        return {
                            classes: "calendar__day-event",
                            html: '<div class="calendar__day calendar__day_' + eventDates[i].classes[eventDates[i].days.indexOf(currentDate)] + '">' + currentDate + '</div>' + eventsElem
                        }
                    }
                },

                onSelect: function(formattedDate, date, inst) {
                    var calendarNumber = inst.$el.closest(".js-calendar-month").data("number");

                    for (var i = 0; i < eventDates.length; i++) {

                        for (var j = 0; j < eventDates[i].show.length; j++) {

                            eventDates[i].show[j] = false;
                        }

                        calendarItems.eq(i).datepicker().data("datepicker").update();
                    }

                    if (date) {
                        eventDates[calendarNumber].show[eventDates[calendarNumber].days.indexOf(date.getDate())] = true;
                    }
                }
            });
        });
    })();

});

