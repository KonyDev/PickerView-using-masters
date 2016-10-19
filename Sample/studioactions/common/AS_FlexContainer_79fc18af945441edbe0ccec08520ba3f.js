function AS_FlexContainer_79fc18af945441edbe0ccec08520ba3f(eventobject) {
    var currentForm = kony.application.getCurrentForm().id;
    var date = new Date();
    var hours24 = date.getHours();
    var minute = date.getMinutes();
    var offsetHr;
    var offsetMn = minute * 45;
    var offsetMeridian;
    if (hours24 < 12) {
        offsetHr = hours24 * 45;
        offsetMeridian = 0;
    } else if (hours24 >= 12) {
        offsetHr = (hours24 - 12) * 45;
        offsetMeridian = 45
    }
    lastOffsetHr = offsetHr;
    lastOffsetMn = offsetMn;
    lastOffsetMeridian = offsetMeridian;
    offsetHr = offsetHr + "dp";
    offsetMn = offsetMn + "dp";
    offsetMeridian = offsetMeridian + "dp";
    kony.print("setting hr offset: " + offsetHr);
    eval(currentForm).flxContainerMaster.flxSCHour.lblHr1.skin = "sknLblCurrent";
    eval(currentForm).flxContainerMaster.flxSCHour.setContentOffset({
        x: "0",
        y: offsetHr
    }, true);
    eval(currentForm).flxContainerMaster.flxSCMinute.lblMin1.skin = "sknLblCurrent";
    eval(currentForm).flxContainerMaster.flxSCMinute.setContentOffset({
        x: "0",
        y: offsetMn
    }, true);
    eval(currentForm).flxContainerMaster.flxSCMeridian.lblMeridian1.skin = "sknLblMeridianFocus";
    eval(currentForm).flxContainerMaster.flxSCMeridian.setContentOffset({
        x: "0",
        y: offsetMeridian
    }, true);
    //eval(currentForm).flxContainerMaster.width = "0%";
    //eval(currentForm).flxContainerMaster.height = "0%";
    eval(currentForm).flxContainerMaster.animate(kony.ui.createAnimation({
        "100": {
            "width": "350dp",
            "height": "300dp",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.9
    }, {
        "animationEnd": function() {}
    });
    /*var date = new Date();
    var hours24=date.getHours();
    var hours = hours24 < 10 ? "0" +hours24 : hours24;
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    */
}