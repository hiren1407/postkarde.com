var request = require("request");
function random()
{


  return  Math.floor(100000 + Math.random() * 900000).toString()


}

request(
  {
    uri:'http://182.70.248.147/vendorsms/pushsms.aspx?user=divya&password=123zen&msisdn=919340018914&sid=DETAIL&msg=your%20otp%20is%20'+random()+'&fl=0&gwid=2',
    method: "POST"} ,
    function(error, response, body) {
      
  console.log(body);
});
