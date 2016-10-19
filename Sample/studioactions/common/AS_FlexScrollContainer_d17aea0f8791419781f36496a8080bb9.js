function AS_FlexScrollContainer_d17aea0f8791419781f36496a8080bb9(eventobject) {
    var currentForm = kony.application.getCurrentForm().id;
    var offset = eval(currentForm).flxContainerMaster.flxSCHour.contentOffsetMeasured.y;
    var id = parseInt((offset / 45) + 1, 10);
    var lblUp = "lblHr" + (id - 1);
    var lblCurrent = "lblHr" + id;
    var lblDown = "lblHr" + (id + 1);
    kony.print("y:- " + offset);
    kony.print("lbl id to be set: " + lblCurrent);
    eval(currentForm).flxContainerMaster.flxSCHour[lblUp].skin = "sknLblTmp";
    eval(currentForm).flxContainerMaster.flxSCHour[lblCurrent].skin = "sknLblCurrent";
    eval(currentForm).flxContainerMaster.flxSCHour[lblDown].skin = "sknLblTmp";
}