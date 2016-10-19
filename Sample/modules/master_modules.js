//Type your code here
function upHour(){
  alert("uparrow clicked");
  frmHome.flxContainerMaster.lblTitle.text="title";
}
function downHour(){
  alert("down arrow clicked");
  //frm2.parentFlex.se
}

function onScrollMain()
{
    currentForm = kony.application.getCurrentForm();
    scrollPosY = currentForm.flxMain.contentOffsetMeasured.y;
    currentForm.lblHeight.text = (parseInt(scrollPosY)+150)+"cm";
 // frmHome.flxContainerMaster.flxSCHour.contentOffsetMeasured.y;
 // frmHome.flxContainerMaster.flxSCHour.lblHr1.skin="sknLblCurrent";
  	frmHome.flxContainerMaster.flxSCHour.setContentOffset(setContentOffset, animate);


var lblUp="lblHr"+(id-1);
var lblCurrent="lblHr"+id;
var lblDown="lblHr"+(id+1);
kony.print("y:- "+offset);
kony.print("lbl id to be set: "+lblCurrent);
eval(currentForm).flxContainerMaster.flxSCHour[lblUp].skin="sknLblTmp";
  var id=parseInt((offset/45)+1, 10);
}
function setEvent(){
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
    alert(selectedTime);
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

function test(){
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
//alert("startDate: " + startDate + "\n" + "endDate: " + endDate);
var eventTitle=currentForm.flxContainerMaster.txtBoxTitle.text;
var eventDescription=currentForm.flxContainerMaster.txtBoxDescription.text;

var startTime=startDate.getDate()+"/"+startDate.getMonth()+"/"+startDate.getFullYear()+" "+startDate.getHours()+":"+startDate.getMinutes()+":00";
var endTime=endDate.getDate()+"/"+endDate.getMonth()+"/"+endDate.getFullYear()+" "+endDate.getHours()+":"+endDate.getMinutes()+":00";
try {
	var evtobj={
      summary:eventTitle,
      start:startTime,
      finish:endTime, 
      alarm:40,
      note:eventDescription,
      access:"public"
    };
  	alert("evtobj: "+JSON.stringify(evtobj));
		//kony.phone.addCalendarEvent(evtobj);
		//Adds a event to the device calendar
}catch(PhoneError){
	alert("error in addCalendarEvent:: "+PhoneError);
}
//frmHome.flxContainerMaster.flxSCMeridian.contentOffsetMeasured.y;
//frmHome.flxContainerMaster.flxSCMeridian.contentOffsetMeasured.y;
    //eval(currentForm).flxContainerMaster.flxSCMinute.lblMin1.skin="sknLblCurrent";

}