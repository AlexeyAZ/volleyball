/*global $ ymaps moment*/

$(function () {

    /*** main page ***/

    // scroll for intro block news
    $(".js-main-news-list").mCustomScrollbar();

    // scroll for press block
    $(".js-press-list").mCustomScrollbar();

    // gallery in intro block
    $(".js-main-news-gallery").slick({
        prevArrow: ".js-main-news-gallery-arrow-left",
        nextArrow: ".js-main-news-gallery-arrow-right",
        dots: true,
        appendDots: ".js-main-news-gallery-dots"
    });

    // gallery under intro block
    $(".js-gallery-imgs").slick({
        prevArrow: ".js-gallery-block-arrow-left",
        nextArrow: ".js-gallery-block-arrow-right",
        slidesToShow: 6,
        swipeToSlide: true
    });

    // gallery for teams block
    $(".js-teams-slider").slick({
        prevArrow: ".js-teams-slider-arrow-left",
        nextArrow: ".js-teams-slider-arrow-right",
        slidesToShow: 1
    });

    // style for select in teams block
    $(".js-select").styler();

    // calendar
    (function () {
        var calendarItems = $(".js-calendar-month");
        var eventDates = [{
            days: [9, 19, 24],
            classes: ["blue", "red", "bluered"],
            events: [["КМЛ Группа А", "ЧР Play Off за 5-ое место"], ["event1", "event2"], ["event3"]],
            show: [false, false, false]
        }, {
            days: [9],
            classes: ["blue"],
            events: [["event5"]],
            show: [false]
        }, {
            days: [9],
            classes: ["blue"],
            events: [["event6"]],
            show: [false]
        }];

        calendarItems.each(function (i) {
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

                onRenderCell: function (date, cellType) {
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
                        };
                    }
                },

                onSelect: function (formattedDate, date, inst) {
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

    /*** /main page ***/

    /*** news page ***/

    // var newsData = {
    //     item: {
    //         year: 2017,
    //         months: [1,2,3,4,5,6,7,8,9,10,11,12],
    //         news: [
    //             [
    //                 {
    //                     head: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis arcu et ante consectetur, vitae aliquam ante ullamcorper.",
    //                     body: "В Старе-яблоньки Pellentesque ut accumsan neque, eget cursus eros. Nullam vel rutrum neque, vitae vestibulum dolor. Mauris sem arcu, tristique quis elit vitae, cursus euismod enim. Mauris at turpis sed libero vestibulum interdum at non tellus. Phasellus sit amet metus eu sapien lacinia tempus nec aliquam neque. Suspendisse id finibus sem, nec convallis sem. Curabitur mattis tellus sit amet mi tristique mattis."
    //                 },
    //                 {
    //                     head: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis arcu et ante consectetur, vitae aliquam ante ullamcorper.",
    //                     body: "В Старе-яблоньки Pellentesque ut accumsan neque, eget cursus eros. Nullam vel rutrum neque, vitae vestibulum dolor. Mauris sem arcu, tristique quis elit vitae, cursus euismod enim. Mauris at turpis sed libero vestibulum interdum at non tellus. Phasellus sit amet metus eu sapien lacinia tempus nec aliquam neque. Suspendisse id finibus sem, nec convallis sem. Curabitur mattis tellus sit amet mi tristique mattis."
    //                 }
    //             ],
    //             [
    //                 {
    //                     head: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis arcu et ante consectetur, vitae aliquam ante ullamcorper.",
    //                     body: "В Старе-яблоньки Pellentesque ut accumsan neque, eget cursus eros. Nullam vel rutrum neque, vitae vestibulum dolor. Mauris sem arcu, tristique quis elit vitae, cursus euismod enim. Mauris at turpis sed libero vestibulum interdum at non tellus. Phasellus sit amet metus eu sapien lacinia tempus nec aliquam neque. Suspendisse id finibus sem, nec convallis sem. Curabitur mattis tellus sit amet mi tristique mattis."
    //                 }
    //             ]
    //         ]
    //     }
    // }

    // scrolling calendar
    $(".js-slider-calendar").mCustomScrollbar({
        axis: "x",
        scrollInertia: 100,
        autoDraggerLength: false,
        mouseWheel: {
            preventDefault: true,
            scrollAmount: 100
        },
        advanced: {
            autoExpandHorizontalScroll: true
        }
    });

    // scroll for table block
    var newsTable = $(".js-news-table");
    var newsTableLink = $(".js-hor-calendar-scrollto");

    newsTable.mCustomScrollbar({
        scrollInertia: 100,
        mouseWheel: {
            scrollAmount: 200
        }
    });

    var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    newsTableLink.on("click", function (e) {
        e.preventDefault();

        setActiveMonth(this);
    });

    $(".news__nav-link").on("click", function (e) {
        e.preventDefault();

        var self = $(this);

        var activeYear = $(".hor-calendar__item_active");
        var activeMonth = $(".hor-calendar__month_active");

        var prevYear = activeYear.prev();
        var prevMonth = activeMonth.prev();

        var nextYear = activeYear.next();
        var nextMonth = activeMonth.next();

        if (self.hasClass("js-news-nav-prev")) {

            if (prevMonth.length) {
                setActiveMonth(prevMonth.find(".js-hor-calendar-scrollto"));
            } else {

                if (prevYear.length) {
                    setActiveMonth(prevYear.find(".hor-calendar__month").last());
                } else {
                    return false;
                }
            }
        } else if (self.hasClass("js-news-nav-next")) {
            if (nextMonth.length) {
                setActiveMonth(nextMonth.find(".js-hor-calendar-scrollto"));
            } else {

                if (nextYear.length) {
                    setActiveMonth(nextYear.find(".hor-calendar__month").first());
                } else {
                    return false;
                }
            }
        }
    });

    setActiveMonth(".js-hor-calendar-scrollto");

    function setActiveMonth(item) {
        var self = $(item).eq(0);
        var activeItem = self.closest(".hor-calendar__item");
        var linkId = self.attr("href");

        var monthText = self.text();
        var monthItem = self.closest(".js-hor-calendar-month");
        var monthNumber = monthItem.data("month");

        newsTable.mCustomScrollbar("scrollTo", linkId);
        $(".hor-calendar__item_active").removeClass("hor-calendar__item_active");
        activeItem.addClass("hor-calendar__item_active");

        $(".hor-calendar__month_active").removeClass("hor-calendar__month_active");
        monthItem.addClass("hor-calendar__month_active");
        setNewsNav();

        function setNewsNav() {
            var currentMonth = $(".js-news-nav-current");

            var prevBtn = $(".js-news-nav-prev");
            var prevMonth = prevBtn.find(".news__nav-link-month");
            var prevYear = prevBtn.find(".news__nav-link-year");

            var nextBtn = $(".js-news-nav-next");
            var nextMonth = nextBtn.find(".news__nav-link-month");
            var nextYear = nextBtn.find(".news__nav-link-year");

            currentMonth.text(monthText);

            if (monthNumber === 11) {
                prevMonth.text(months[0]);
                prevYear.text(+activeItem.data("year") + 1);
            } else {
                prevMonth.text(months[monthNumber + 1]);
                prevYear.text(activeItem.data("year"));
            }

            if (monthNumber === 0) {
                nextMonth.text(months[11]);
                nextYear.text(+activeItem.data("year") - 1);
            } else {
                nextMonth.text(months[monthNumber - 1]);
                nextYear.text(activeItem.data("year"));
            }
        }
    }

    //
    $(".js-sidebar-open-sub-nav").on("click", function (e) {
        e.preventDefault();

        var self = $(this);
        var sidebarParentItem = self.closest(".sidebar__nav-item");
        var sidebarSubList = sidebarParentItem.find(".sidebar__nav").eq(0);

        self.toggleClass("sidebar__nav-link_active");
        sidebarSubList.slideToggle();
    });

    /*** /news page ***/

    /*** contacts page ***/

    (function () {

        if (document.querySelector("#contactsMap")) {
            ymaps.ready(init);

            var map;
            var mark = [55.714110, 37.567222];
            var placemark;

            function init() {

                map = new ymaps.Map("contactsMap", {
                    center: mark,
                    zoom: 16,
                    controls: []
                });

                placemark = new ymaps.Placemark(mark);

                map.geoObjects.add(placemark);
            }
        }
    })();

    /*** /contacts page ***/

    /*** calendar page ***/
    var dayOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    // $('#calendar').fullCalendar({
    //     locale: 'ru',
    //     dayNamesShort: dayOfWeek,
    //     dayNames: dayOfWeek,
    //     contentHeight: 526,
    //     showNonCurrentDates: false,
    //     fixedWeekCount: false,
    //     events: [
    //         {
    //             title  : 'event1',
    //             start  : '2017-08-02'
    //         },
    //         {
    //             title  : 'event2',
    //             start  : '2017-08-02',
    //         },
    //         {
    //             title  : 'event3',
    //             start  : '2017-08-03',
    //         },
    //     ],
    //     eventLimit: 1,
    //     dayClick: function(date, jsEvent, view) {
    //         console.log("dayClick")

    //         var target = jsEvent.target;
    //         var dayEvents = [];

    //         $('#calendar').fullCalendar('clientEvents', function(event) {

    //             if(moment(date).format('YYYY-MM-DD') == moment(event._start).format('YYYY-MM-DD')) {
    //                 dayEvents.push(event);
    //             }
    //         });

    //         console.log(dayEvents)
    //         if (dayEvents.length) {
    //             createEventsPopup(target, dayEvents);
    //         } else {
    //             createEventsPopup();
    //         }
    //     }

    // });

    // function createEventsPopup(elem, events) {

    //     if (elem) {
    //         var coords = getCoords(elem);
    //         removeElem();

    //         var popup = document.createElement("div");
    //         popup.classList.add("page-calendar__popup");
    //         popup.style.position = "absolute";
    //         popup.style.top = coords.top + "px";
    //         popup.style.left = coords.left + "px";

    //         var popupHead = document.createElement("div");
    //         popupHead.innerText = moment(events[0].start._d).format('D MMMM YYYY');
    //         popup.appendChild(popupHead);

    //         var popupEvent = document.createElement("a");
    //         popupEvent.innerText = "link";
    //         popupEvent.setAttribute("href", "http://");
    //         popup.appendChild(popupEvent);
    //         document.body.appendChild(popup);

    //     } else {
    //         removeElem();
    //     }

    //     function bodyClickHandler(e) {
    //         console.log("bodyClick")
    //         if (e.target.classList.contains("page-calendar__popup")) {

    //         } else if (document.querySelector(".page-calendar__popup")) {
    //             removeElem();
    //             document.removeEventListener("click", bodyClickHandler);
    //         }
    //     }

    //     function removeElem() {

    //         if (document.querySelector(".page-calendar__popup")) {
    //             document.body.removeChild(document.querySelector(".page-calendar__popup"));
    //         }
    //     }

    //     function getCoords(elem) {
    //         var box = elem.getBoundingClientRect();

    //         return {
    //             top: box.top + pageYOffset,
    //             left: box.left + pageXOffset
    //         };
    //     }
    // }

    // $(".js-calendar-big-cell").on("click", function() {
    //     var self = $(this);

    //     if ($(".big-cal__body-cell_show-popup").length > 0) {
    //         $(".big-cal__body-cell_show-popup").find(".big-cal__body-cell-popup").hide();
    //         $(".big-cal__body-cell_show-popup").removeClass("big-cal__body-cell_show-popup");
    //     } 
    // });

    $("body").on("click", function (e) {
        var target = $(e.target);

        if (target.hasClass("big-cal__body-cell_show-popup") || target.closest(".big-cal__body-cell_show-popup").length > 0) {} else if (target.hasClass("js-calendar-big-cell") || target.closest(".js-calendar-big-cell").length > 0) {
            hideCalcPopup();
            showPopup();
        } else {
            hideCalcPopup();
        }

        function hideCalcPopup() {

            if ($(".big-cal__body-cell_show-popup").length > 0) {
                $(".big-cal__body-cell_show-popup").find(".big-cal__body-cell-popup").hide();
                $(".big-cal__body-cell_show-popup").removeClass("big-cal__body-cell_show-popup");
            }
        }

        function showPopup() {
            target.addClass("big-cal__body-cell_show-popup");
            target.find(".big-cal__body-cell-popup").show();
        }
    });

    // $(".js-hor-calendar-month-page-cal").on("click", function() {
    //     $(".hor-calendar__month_active").removeClass("hor-calendar__month_active");
    //     $(this).addClass("hor-calendar__month_active");
    // });

    // $(".js-hor-calendar-month-page-cal-link").on("click", function(e) {
    //     e.preventDefault();
    // })

    // var events = [
    //     [
    //         3,
    //         [
    //             {
    //                 name: "Чемпионат России PlayOff за 5-ое место",
    //                 link: "http://"
    //             },
    //             {
    //                 name: "Чемпионат России PlayOff за 5-ое место",
    //                 link: "http://"
    //             }
    //         ]

    //     ],
    //     [
    //         17,
    //         [
    //             {
    //                 name: "Чемпионат России PlayOff за 5-ое место",
    //                 link: "http://"
    //             }
    //         ]
    //     ]
    // ]

    // function createBigCal(options) {
    //     var elem = options.elem;
    //     var events = options.events;
    //     var calcElem = document.querySelector(elem);

    //     var date = new Date();
    //     var day = date.getDay();
    //     var month = date.getMonth();
    //     var year = date.getFullYear();
    //     var monthDayNumber = moment(date).daysInMonth();
    //     var newDate;

    //     var body = document.createElement("div");
    //     body.classList.add("big-cal__body");
    //     calcElem.appendChild(body);

    //     for (var i = 1; i < moment(date).date(1).format("d"); i++) {
    //         createCell(body);
    //     }

    //     for (var i = 1; i <= monthDayNumber; i++) {
    //         var newDate = new Date(year, month, i);
    //         var dayOfWeek = moment(newDate).date(i).format("d");
    //         var firstDay = moment(newDate).date(i).format("d");

    //         createCell(body, i, events);
    //         console.log("day: " + i + " dayOfWeek: " + moment(newDate).date(i).format("d"));
    //     }

    //     function createCell(parent, number, events) {
    //         var cell = document.createElement("div");
    //         cell.classList.add("big-cal__body-cell");

    //         var inenrCell = document.createElement("div");
    //         inenrCell.classList.add("big-cal__body-cell-inner");
    //         cell.appendChild(inenrCell);

    //         if (number) {
    //             createCellNumber(inenrCell, number);
    //         }

    //         if (events) {

    //             for (var i = 0; i < events.length; i++) {

    //                 if (events[i][0] === number) {
    //                     createEventPopup(inenrCell, events[i][1])
    //                 }
    //             }

    //         }

    //         parent.appendChild(cell);
    //     }

    //     function createCellNumber(cell, number) {
    //         var cellNumber = document.createElement("div");
    //         cellNumber.classList.add("big-cal__body-cell-number");
    //         cellNumber.innerText = number;

    //         cell.classList.add("big-cal__body-cell_number");
    //         cell.appendChild(cellNumber);
    //     }

    //     function createEventPopup(cell, events) {
    //         var eventPopup = document.createElement("div");
    //         eventPopup.classList.add("big-cal__body-cell-popup");

    //         var eventPopupHead = document.createElement("div");
    //         eventPopupHead.classList.add("big-cal__body-cell-popup-head");

    //         function createEventPopupLink(event) {
    //             var eventPopupLinkWrap = document.createElement("div");
    //             var eventPopupLink = document.createElement("a");
    //             eventPopupLink.classList.add("big-cal__body-cell-popup-link");
    //             eventPopupLink.innerText = event.name;
    //             eventPopupLink.setAttribute("href", event.link);

    //             eventPopupLinkWrap.appendChild(eventPopupLink);
    //             eventPopup.appendChild(eventPopupLinkWrap);
    //         }

    //         eventPopup.appendChild(eventPopupHead);

    //         for(var i = 0; i < events.length; i++) {
    //             createEventPopupLink(events[i]);
    //         }

    //         cell.appendChild(eventPopup);
    //     }
    // }

    // createBigCal({
    //     elem: ".js-calendar-big-cal",
    //     events: events
    // })

    /*** /calendar page ***/
});
//# sourceMappingURL=app.js.map
