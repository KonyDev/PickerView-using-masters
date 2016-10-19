function AS_FlexScrollContainer_23702e0c99a14f1987f9b8f670db2fb0(eventobject) {
    var currentForm = kony.application.getCurrentForm().id;
    var offset = eval(currentForm).flxContainerMaster.flxSCMeridian.contentOffsetMeasured.y;
    var id = parseInt((offset / 45) + 1, 10);
    var lblUp = "lblMeridian" + (id - 1);
    var lblCurrent = "lblMeridian" + id;
    var lblDown = "lblMeridian" + (id + 1);
    kony.print("y:- " + offset);
    kony.print("lbl id to be set: " + lblCurrent);
    eval(currentForm).flxContainerMaster.flxSCMeridian[lblUp].skin = "sknLblMeridianNormal";
    eval(currentForm).flxContainerMaster.flxSCMeridian[lblCurrent].skin = "sknLblMeridianFocus";
    eval(currentForm).flxContainerMaster.flxSCMeridian[lblDown].skin = "sknLblMeridianNormal";
}