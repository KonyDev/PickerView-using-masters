function AS_Button_b7597db5d3fd47f58202ceba662d013a(eventobject) {
    var currentForm = eval(kony.application.getCurrentForm().id);
    var offsetHr = currentForm.flxContainerMaster.flxSCHour.contentOffsetMeasured.y;
    var offsetMn = currentForm.flxContainerMaster.flxSCMinute.contentOffsetMeasured.y;
    var offsetMeridian = currentForm.flxContainerMaster.flxSCMeridian.contentOffsetMeasured.y;
    var idHr = parseInt((offsetHr / 45) + 1, 10);
    var idMn = parseInt((offsetMn / 45) + 1, 10);
    var lblHr = "lblHr" + idHr;
    var lblMn = "lblMin" + idMn;
    var textHr = parseInt(currentForm.flxContainerMaster.flxSCHour[lblHr].text);
    var textMn = parseInt(currentForm.flxContainerMaster.flxSCMinute[lblMn].text);
    var textMeridian;
    var selectedTime;
    if (offsetMeridian == 0) {
        textMeridian = "AM";
    } else if (offsetMeridian == 45) {
        textMeridian = "PM";
    }
    if (textMeridian == "AM") {
        if (textHr == 12) {
            textHr = 00;
        }
    } else if (textMeridian == "PM") {
        if (textHr < 12) {
            textHr = textHr + 12;
        }
    }
    selectedTime = textHr + ":" + textMn + " " + textMeridian;
    //alert(selectedTime);
    var targetHr, targetMin;
    targetMin = (textMn + 2) % 60;
    targetHr = (textHr + ((textMn + 2) / 60));
    var startDate = new Date();
    var endDate = new Date();
    startDate.setHours(textHr);
    startDate.setMinutes(textMn);
    endDate.setMinutes(targetMin);
    if (targetHr > 23) {
        targetHr = 0;
        endDate.setDate(startDate.getDate() + 1);
        endDate.setHours(0);
    } else {
        endDate.setHours(targetHr);
    }
    kony.print("startDate: " + startDate);
    kony.print("endDate: " + endDate);
    alert("startDate: " + startDate + "\n" + "endDate: " + endDate);
    //frmHome.flxContainerMaster.flxSCMinute.contentOffsetMeasured.y;
    //frmHome.flxContainerMaster.flxSCMeridian.contentOffsetMeasured.y;
    //frmHome.flxContainerMaster.flxSCMeridian.contentOffsetMeasured.y;
    //eval(currentForm).flxContainerMaster.flxSCMinute.lblMin1.skin="sknLblCurrent";
}