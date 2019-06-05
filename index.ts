import AWS = require('aws-sdk')
//import util = require('util')
//AWS.config.region = 'us-east-1'
AWS.config.update({region: 'us-east-1'})

const ec2 = new AWS.EC2();
//console.log(ec2.config.region)
AWS.config.update({region: 'us-east-2'})

var params = {};
//const pec2 = util.promisify(ec2.describeRegions).bind(ec2)

ec2.describeRegions(params, print_regions);

function print_regions(err, data) {
    if (err) console.log(err, err.stack)
    else console.log(data.Regions.map((obj) => (obj.RegionName)))

}

function get_items_in_region(aRegion) {
    var resourcegroups = new AWS.ResourceGroups()
    AWS.config.update({region: aRegion})

}

function get_tags(err, data) {
    console.log(data)
    data.forEach
}

// Send requests to each region



