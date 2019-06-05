import AWS = require('aws-sdk')
//import util = require('util')
//AWS.config.region = 'us-east-1'
AWS.config.update({region: 'us-east-1'})

const ec2 = new AWS.EC2();
//console.log(ec2.config.region)
AWS.config.update({region: 'us-east-2'})

var params = {};
//const pec2 = util.promisify(ec2.describeRegions).bind(ec2)

ec2.describeRegions(params, get_items_in_region);

function print_regions(err, data) {
    if (err) console.log(err, err.stack)
    else console.log(data.Regions.map((obj) => (obj.RegionName)))

}

function print_callback(err, data) {
    if (err) console.log(err, err.stack)
    else console.log(data)
}

var DresourceQueryQuery = JSON.stringify(require("./test/fixtures/example-cli-input"))
export function get_items_in_region(aRegion, resourceQueryQuery) {
    var resourcegroups = new AWS.ResourceGroups()
    AWS.config.update({region: aRegion})
    var XresourceQueryQuery
    if (resourceQueryQuery) {
        XresourceQueryQuery = resourceQueryQuery }
    else XresourceQueryQuery = DresourceQueryQuery
    var params = {
        "ResourceQuery": {
            "Type": "TAG_FILTERS_1_0",
            "Query": XresourceQueryQuery
        },
        "MaxResults": 0,
        "NextToken": ""
    }
    resourcegroups.searchResources(params, print_callback)
    console.log('xxxxx')


}

function get_tags(err, data) {
    console.log(data)
    data.forEach
}

// Send requests to each region



