function AS_FlexScrollContainer_335191501d0349d1aa842240f6297c27(eventobject) {
    if (lastOffsetMn === undefined) {
        lastOffsetMn = 0;
    }
    var currentForm = kony.application.getCurrentForm().id;
    var currOffsetMn = eval(currentForm).flxContainerMaster.flxSCMinute.contentOffsetMeasured.y;
    var remainder = currOffsetMn % 45;
    if (lastOffsetMn < currOffsetMn) {
        kony.print("scrolled up");
        if (remainder < 22) {
            currOffsetMn = currOffsetMn - remainder;
        } else {
            currOffsetMn = currOffsetMn - remainder + 45;
        }
    } else if (lastOffsetMn > currOffsetMn) {
        kony.print("scrolled down");
        if (lastOffsetMn == 45) {
            currOffsetMn = 0;
        } else if (remainder < 22) {
            currOffsetMn = currOffsetMn - remainder + 45;
        } else if (remainder > 22) {
            currOffsetMn = currOffsetMn - remainder;
        }
    }
    eval(currentForm).flxContainerMaster.flxSCMinute.setContentOffset({
        x: "0",
        y: currOffsetMn
    }, true);
    lastOffsetMn = currOffsetMn;
}