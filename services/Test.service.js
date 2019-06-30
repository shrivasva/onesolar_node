function getTest(req, res) {
    res.end(JSON.stringify('{"name":"vivek"}'))
}

function postTest(req, res) {
    res.end(JSON.stringify('{"name":"vivek"}'))
}
function getList(req, res) {
    var array = [];

    for (var i = 0; i < 10; i++) {
        array[i] = 'Lead-' + i;
        console.log(array[i])

    }
    console.log(array)
    res.end(JSON.stringify(array))
}

function getLatLonDetails(req, res) {
    console.log(req.body.lead)
    if (req.body.lead === 'Lead-0')
        res.end(JSON.stringify('{"lat":"19.0760","long":"72.8777"}'))
    else if (req.body.lead === 'Lead-1')
        res.end(JSON.stringify('{"lat":"19.2183","long":"72.9781"}'))
    else if (req.body.lead === 'Lead-2')
        res.end(JSON.stringify('{"lat":"17.280554","long":"67.831734"}'))
    else if (req.body.lead === 'Lead-3')
        res.end(JSON.stringify('{"lat":"18.5204","long":"73.8567"}'))
    else if (req.body.lead === 'Lead-4')
        res.end(JSON.stringify('{"lat":"19.2990","long":"72.8548"}'))
    else if (req.body.lead === 'Lead-5')
        res.end(JSON.stringify('{"lat":"19.4564","long":" 72.7925"}'))
        else
        res.end(JSON.stringify('{"lat":"18.9256","long":" 72.8242"}'))

}
function login(req, res) {
    console.log(req.body)
    if(req.body._user==='contractor' && req.body._pass==='Asdf1234'){
        res.end(JSON.stringify('{"login":true,"role":"Contractor","name":"Contractor ABC","user_id":"1"}'));

    }else
    {
        res.end(JSON.stringify('{"login":"false"}'));

    }
}
module.exports = { getTest, postTest, getList, getLatLonDetails,login }