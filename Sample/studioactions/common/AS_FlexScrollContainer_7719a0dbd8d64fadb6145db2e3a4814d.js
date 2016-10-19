function AS_FlexScrollContainer_7719a0dbd8d64fadb6145db2e3a4814d(eventobject) {
    if (lastOffsetMeridian === undefined) {
        lastOffsetMeridian = 0;
    }
    var currentForm = kony.application.getCurrentForm().id;
    var currOffsetMeridian = eval(currentForm).flxContainerMaster.flxSCMeridian.contentOffsetMeasured.y;
    var remainder = currOffsetMeridian % 45;
    if (lastOffsetMeridian < currOffsetMeridian) {
        kony.print("scrolled up");
        if (remainder < 22) {
            currOffsetMeridian = currOffsetMeridian - remainder;
        } else {
            currOffsetMeridian = currOffsetMeridian - remainder + 45;
        }
    } else if (lastOffsetMeridian > currOffsetMeridian) {
        kony.print("scrolled down");
        if (lastOffsetMeridian == 45) {
            currOffsetMeridian = 0;
        } else if (remainder < 22) {
            currOffsetMeridian = currOffsetMeridian - remainder + 45;
        } else if (remainder >= 22) {
            currOffsetMeridian = currOffsetMeridian - remainder;
        }
    }
    eval(currentForm).flxContainerMaster.flxSCMeridian.setContentOffset({
        x: "0",
        y: currOffsetMeridian
    }, true);
    lastOffsetMeridian = currOffsetMeridian;
}