function AS_FlexScrollContainer_cab536bf20a74deeb64d2e700b004ef1(eventobject) {
    var currentForm = kony.application.getCurrentForm().id;
    var offset = eval(currentForm).flxContainerMaster.flxSCMinute.contentOffsetMeasured.y;
    var id = parseInt((offset / 45) + 1, 10);
    var lblUp = "lblMin" + (id - 1);
    var lblCurrent = "lblMin" + id;
    var lblDown = "lblMin" + (id + 1);
    kony.print("y:- " + offset);
    kony.print("lbl id to be set: " + lblCurrent);
    eval(currentForm).flxContainerMaster.flxSCMinute[lblUp].skin = "sknLblTmp";
    eval(currentForm).flxContainerMaster.flxSCMinute[lblCurrent].skin = "sknLblCurrent";
    eval(currentForm).flxContainerMaster.flxSCMinute[lblDown].skin = "sknLblTmp";
}