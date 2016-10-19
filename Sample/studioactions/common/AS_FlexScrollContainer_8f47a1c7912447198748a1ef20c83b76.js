function AS_FlexScrollContainer_8f47a1c7912447198748a1ef20c83b76(eventobject) {
    if (lastOffsetHr === undefined) {
        lastOffsetHr = 0;
    }
    var currentForm = kony.application.getCurrentForm().id;
    var currOffsetHr = eval(currentForm).flxContainerMaster.flxSCHour.contentOffsetMeasured.y;
    var remainder = currOffsetHr % 45;
    if (lastOffsetHr < currOffsetHr) {
        kony.print("scrolled up");
        if (remainder < 22) {
            currOffsetHr = currOffsetHr - remainder;
        } else {
            currOffsetHr = currOffsetHr - remainder + 45;
        }
    } else if (lastOffsetHr > currOffsetHr) {
        kony.print("scrolled down");
        if (lastOffsetHr == 45) {
            currOffsetHr = 0;
        } else if (remainder < 22) {
            currOffsetHr = currOffsetHr - remainder + 45;
        } else {
            currOffsetHr = currOffsetHr - remainder;
        }
    }
    eval(currentForm).flxContainerMaster.flxSCHour.setContentOffset({
        x: "0",
        y: currOffsetHr
    }, true);
    lastOffsetHr = currOffsetHr;
}