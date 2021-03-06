'use strict';
const library = (function () {

    const allergies = {"lastupdated":"11/04/2017","nkda":false, "allergies":[{"allergenname":"gluten","onsetdate":"11/01/2000","allergenid":17665,"reactions":[{"severitysnomedcode":371924009,"reactionname":"abdominal pain","snomedcode":21522001,"severity":"moderate to severe"}]},{"allergenname":"peanut","onsetdate":"11/04/2017","allergenid":12483,"reactions":[{"severitysnomedcode":6736007,"reactionname":"abdominal pain","snomedcode":21522001,"severity":"moderate"}]},{"allergenname":"shellfish derived","onsetdate":"11/04/2017","allergenid":25168,"reactions":[{"severitysnomedcode":24484000,"reactionname":"anaphylaxis","snomedcode":39579001,"severity":"severe"}]}]};
    
    const orderStays = [{"ordertypeid":392856,"name":"regular diet"},{"ordertypeid":392859,"name":"diabetic diet"},{"ordertypeid":392858,"name":"renal diet"},{"ordertypeid":398482,"name":"custom diet"},{"ordertypeid":396863,"name":"tube feeding diet"},{"ordertypeid":392857,"name":"heart healthy diet"},{"ordertypeid":396773,"name":"clear liquid diet"},{"ordertypeid":396774,"name":"full liquid diet"},{"ordertypeid":410144,"name":"low fat diet"},{"ordertypeid":410154,"name":"soft diet"},{"ordertypeid":410135,"name":"dysphagia level 1 diet"},{"ordertypeid":410138,"name":"heart healthy, diabetic diet"},{"ordertypeid":409999,"name":"infant diet, formula"},{"ordertypeid":396771,"name":"mechanical soft diet"},{"ordertypeid":398705,"name":"pediatric diet"},{"ordertypeid":410149,"name":"low protein diet"},{"ordertypeid":410136,"name":"dysphagia level 2 diet"},{"ordertypeid":410137,"name":"dysphagia level 3 diet"},{"ordertypeid":410140,"name":"high calorie diet"},{"ordertypeid":410139,"name":"high calorie, high protein diet"}]
    
    const orderTypeResponseRegularDiet = {"totalcount":2,"dietorders":[{"priority":"scheduled","orderingmethodname":"CPOE","startdate":"10/11/2017 10:06:45","stayid":6987,"activateddate":"10/11/2017 10:10:46","ordertypeid":392856,"departmentid":1,"approveduser":"awatson34","name":"regular diet","createduser":"jdoe","duration":"until discontinued","orderid":18161,"createddate":"10/11/2017 10:06:46","status":"ACTIVE","orderingprovidername":"Addison Achatz, MD","activateduser":"awatson34","orderingproviderid":1,"approveddate":"10/11/2017 10:10:49","note":"No Red Meat"},{"priority":"scheduled","orderingmethodname":"CPOE","startdate":"11/04/2017 14:47:48","stayid":7002,"activateddate":"11/04/2017 14:47:57","ordertypeid":392856,"departmentid":1,"approveduser":"kneuberger","name":"regular diet","createduser":"kneuberger","duration":"until discontinued","orderid":18449,"createddate":"11/04/2017 14:47:48","status":"ACTIVE","orderingprovidername":"Brendan Smith-Elion, MD","activateduser":"kneuberger","orderingproviderid":33,"approveddate":"11/04/2017 14:48:00"}]}

    return {
        allergies: allergies,
        orderStays: orderStays,
        orderTypeResponseRegularDiet: orderTypeResponseRegularDiet
    }

})();
module.exports = library;

